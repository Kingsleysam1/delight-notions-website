import { useEffect } from 'react';
import { gsap } from 'gsap';

// ─── Default config (mirrors codrops original exactly) ─────────────
export const configDefaults = {
  clipPathDirection: 'top-bottom' as string,
  autoAdjustHorizontalClipPath: true,
  steps: 6,
  stepDuration: 0.35,
  stepInterval: 0.05,
  moverPauseBeforeExit: 0.14,
  rotationRange: 0,
  wobbleStrength: 0,
  panelRevealEase: 'sine.inOut',
  gridItemEase: 'sine',
  moverEnterEase: 'sine.in',
  moverExitEase: 'sine',
  panelRevealDurationFactor: 2,
  clickedItemDurationFactor: 2,
  gridItemStaggerFactor: 0.3,
  moverBlendMode: false as false | string,
  pathMotion: 'linear',
  sineAmplitude: 50,
  sineFrequency: Math.PI,
};

export default function useRepeatingTransition(
  gridRef: React.RefObject<HTMLDivElement | null>,
  panelRef: React.RefObject<HTMLDivElement | null>,
  filterKey: string
) {
  useEffect(() => {
    if (!gridRef.current || !panelRef.current) return;

    const grid = gridRef.current;
    const panel = panelRef.current;
    const panelImg = panel.querySelector('.portfolio-panel__img') as HTMLElement;
    const panelContent = panel.querySelector('.portfolio-panel__content') as HTMLElement;

    let isAnimating = false;
    let isPanelOpen = false;
    let currentItem: HTMLElement | null = null;

    // Deep-copy the config for this effect instance
    const config = { ...configDefaults };
    const originalConfig = { ...configDefaults };

    // ── UI helpers ────────────────────────────────────────────────
    const navbar = document.querySelector('nav') as HTMLElement | null;
    const filterSection = document.querySelector('.portfolio-filters') as HTMLElement | null;

    const hideUI = () => {
      if (navbar) gsap.to(navbar, { opacity: 0, duration: 0.5, ease: 'sine.inOut', pointerEvents: 'none' });
      if (filterSection) gsap.to(filterSection, { opacity: 0, duration: 0.5, ease: 'sine.inOut', pointerEvents: 'none' });
    };

    const showUI = () => {
      if (navbar) gsap.to(navbar, { opacity: 1, duration: 0.5, ease: 'sine.inOut', pointerEvents: 'auto' });
      if (filterSection) gsap.to(filterSection, { opacity: 1, duration: 0.5, ease: 'sine.inOut', pointerEvents: 'auto' });
    };

    // ── Helpers ───────────────────────────────────────────────────
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const getCenter = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    };

    const getClipPaths = (dir: string) => {
      switch (dir) {
        case 'bottom-top': return { from: 'inset(0% 0% 100% 0%)', reveal: 'inset(0% 0% 0% 0%)', hide: 'inset(100% 0% 0% 0%)' };
        case 'left-right':  return { from: 'inset(0% 100% 0% 0%)', reveal: 'inset(0% 0% 0% 0%)', hide: 'inset(0% 0% 0% 100%)' };
        case 'right-left':  return { from: 'inset(0% 0% 0% 100%)', reveal: 'inset(0% 0% 0% 0%)', hide: 'inset(0% 100% 0% 0%)' };
        case 'top-bottom':
        default:            return { from: 'inset(100% 0% 0% 0%)', reveal: 'inset(0% 0% 0% 0%)', hide: 'inset(0% 0% 100% 0%)' };
      }
    };

    const extractOverrides = (item: HTMLElement) => {
      const o: Partial<typeof configDefaults> = {};
      if (item.dataset.clipPathDirection) (o as any).clipPathDirection = item.dataset.clipPathDirection;
      if (item.dataset.steps) o.steps = parseInt(item.dataset.steps);
      if (item.dataset.stepDuration) o.stepDuration = parseFloat(item.dataset.stepDuration);
      if (item.dataset.stepInterval) o.stepInterval = parseFloat(item.dataset.stepInterval);
      if (item.dataset.rotationRange) o.rotationRange = parseFloat(item.dataset.rotationRange);
      if (item.dataset.wobbleStrength) o.wobbleStrength = parseFloat(item.dataset.wobbleStrength);
      if (item.dataset.moverPauseBeforeExit) o.moverPauseBeforeExit = parseFloat(item.dataset.moverPauseBeforeExit);
      if (item.dataset.panelRevealEase) o.panelRevealEase = item.dataset.panelRevealEase;
      if (item.dataset.gridItemEase) o.gridItemEase = item.dataset.gridItemEase;
      if (item.dataset.moverEnterEase) o.moverEnterEase = item.dataset.moverEnterEase;
      if (item.dataset.moverExitEase) o.moverExitEase = item.dataset.moverExitEase;
      if (item.dataset.panelRevealDurationFactor) o.panelRevealDurationFactor = parseFloat(item.dataset.panelRevealDurationFactor);
      if (item.dataset.clickedItemDurationFactor) o.clickedItemDurationFactor = parseFloat(item.dataset.clickedItemDurationFactor);
      if (item.dataset.gridItemStaggerFactor) o.gridItemStaggerFactor = parseFloat(item.dataset.gridItemStaggerFactor);
      if (item.dataset.moverBlendMode) (o as any).moverBlendMode = item.dataset.moverBlendMode;
      if (item.dataset.pathMotion) o.pathMotion = item.dataset.pathMotion;
      if (item.dataset.sineAmplitude) o.sineAmplitude = parseFloat(item.dataset.sineAmplitude);
      if (item.dataset.sineFrequency) o.sineFrequency = parseFloat(item.dataset.sineFrequency);
      return o;
    };

    const extractItemData = (item: HTMLElement) => {
      const imgDiv = item.querySelector('.portfolio-grid__item-image') as HTMLElement;
      const caption = item.querySelector('figcaption');
      // Prefer data-image to avoid computed-style quirks in Next.js
      const imgURL = item.dataset.image
        ? `url("${item.dataset.image}")`
        : (imgDiv?.style?.backgroundImage || '');
      return {
        imgURL,
        title: caption?.querySelector('h3')?.textContent || '',
        desc: caption?.querySelector('p')?.textContent || '',
      };
    };

    const setPanelContent = ({ imgURL, title, desc }: { imgURL: string; title: string; desc: string }) => {
      panelImg.style.backgroundImage = imgURL;
      (panel.querySelector('h3') as HTMLElement).textContent = title;
      (panel.querySelector('p') as HTMLElement).textContent = desc;
    };

    const positionPanel = (clickedItem: HTMLElement) => {
      const centerX = getCenter(clickedItem).x;
      const isLeft = centerX < window.innerWidth / 2;
      if (isLeft) panel.classList.add('portfolio-panel--right');
      else panel.classList.remove('portfolio-panel--right');

      if (config.autoAdjustHorizontalClipPath) {
        if (config.clipPathDirection === 'left-right' || config.clipPathDirection === 'right-left') {
          config.clipPathDirection = isLeft ? 'left-right' : 'right-left';
        }
      }
    };

    const computeStaggerDelays = (clicked: HTMLElement, items: HTMLElement[]) => {
      const base = getCenter(clicked);
      const distances = items.map(el => {
        const c = getCenter(el);
        return Math.hypot(c.x - base.x, c.y - base.y);
      });
      const max = Math.max(...distances) || 1;
      return distances.map(d => (d / max) * config.gridItemStaggerFactor);
    };

    const generateMotionPath = (startRect: DOMRect, endRect: DOMRect, steps: number) => {
      const path: { left: number; top: number; width: number; height: number }[] = [];
      const fullSteps = steps + 2;
      const sc = { x: startRect.left + startRect.width / 2,  y: startRect.top  + startRect.height / 2 };
      const ec = { x: endRect.left   + endRect.width  / 2,  y: endRect.top    + endRect.height  / 2 };

      for (let i = 0; i < fullSteps; i++) {
        const t = i / (fullSteps - 1);
        const width   = lerp(startRect.width,  endRect.width,  t);
        const height  = lerp(startRect.height, endRect.height, t);
        const centerX = lerp(sc.x, ec.x, t);
        const centerY = lerp(sc.y, ec.y, t);
        const sineOffset = config.pathMotion === 'sine'
          ? Math.sin(t * config.sineFrequency) * config.sineAmplitude : 0;
        const wx = (Math.random() - 0.5) * config.wobbleStrength;
        const wy = (Math.random() - 0.5) * config.wobbleStrength;
        path.push({ left: centerX - width / 2 + wx, top: centerY - height / 2 + sineOffset + wy, width, height });
      }
      return path.slice(1, -1);
    };

    // ── Animate grid items out ────────────────────────────────────
    const animateGridItems = (items: HTMLElement[], clicked: HTMLElement, delays: number[]) => {
      const cp = getClipPaths(config.clipPathDirection);
      gsap.to(items, {
        opacity: 0,
        scale: (_i: number, el: HTMLElement) => (el === clicked ? 1 : 0.8),
        duration: (_i: number, el: HTMLElement) => el === clicked ? config.stepDuration * config.clickedItemDurationFactor : 0.3,
        ease: config.gridItemEase,
        clipPath: (_i: number, el: HTMLElement) => (el === clicked ? cp.from : 'none'),
        delay: (i: number) => delays[i],
      });
    };

    // ── Create & animate the repeating mover elements ─────────────
    const animateTransition = (startEl: HTMLElement, endEl: HTMLElement, imgURL: string) => {
      hideUI();

      const path = generateMotionPath(startEl.getBoundingClientRect(), endEl.getBoundingClientRect(), config.steps);
      const fragment = document.createDocumentFragment();
      const cp = getClipPaths(config.clipPathDirection);

      // ★ KEY FIX: reset the panel image clip-path BEFORE the reveal so it
      //   starts hidden (same as original codrops resetView sets it).
      gsap.set(endEl, { clipPath: cp.hide });

      path.forEach((step, index) => {
        const mover = document.createElement('div');
        mover.className = 'portfolio-mover';

        const style: gsap.TweenVars = {
          backgroundImage: imgURL,
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          position: 'fixed',
          left: step.left,
          top: step.top,
          width: step.width,
          height: step.height,
          clipPath: cp.from,
          zIndex: 1000 + index,
          rotationZ: gsap.utils.random(-config.rotationRange, config.rotationRange),
        };
        if (config.moverBlendMode) style.mixBlendMode = config.moverBlendMode as string;
        gsap.set(mover, style);
        fragment.appendChild(mover);

        const delay = index * config.stepInterval;
        gsap.timeline({ delay })
          .fromTo(mover,
            { opacity: 0.4, clipPath: cp.hide },
            { opacity: 1, clipPath: cp.reveal, duration: config.stepDuration, ease: config.moverEnterEase }
          )
          .to(mover,
            { clipPath: cp.from, duration: config.stepDuration, ease: config.moverExitEase },
            `+=${config.moverPauseBeforeExit}`
          );
      });

      // Insert all movers into the DOM at once
      grid.parentNode?.insertBefore(fragment, grid.nextSibling);

      // Schedule mover cleanup
      const cleanupDelay = config.steps * config.stepInterval + config.stepDuration * 2 + config.moverPauseBeforeExit;
      gsap.delayedCall(cleanupDelay, () => {
        document.querySelectorAll('.portfolio-mover').forEach(m => m.remove());
      });

      revealPanel(endEl);
    };

    // ── Reveal the panel ──────────────────────────────────────────
    const revealPanel = (endImg: HTMLElement) => {
      const cp = getClipPaths(config.clipPathDirection);

      gsap.set(panelContent, { opacity: 0 });
      gsap.set(panel, { opacity: 1, pointerEvents: 'auto' });

      gsap.timeline({
        defaults: {
          duration: config.stepDuration * config.panelRevealDurationFactor,
          ease: config.panelRevealEase,
        },
      })
      .fromTo(endImg,
        { clipPath: cp.hide },
        { clipPath: cp.reveal, pointerEvents: 'auto', delay: config.steps * config.stepInterval }
      )
      .fromTo(panelContent,
        { y: 25 },
        {
          duration: 1,
          ease: 'expo',
          opacity: 1,
          y: 0,
          delay: config.steps * config.stepInterval,
          onComplete: () => { isAnimating = false; isPanelOpen = true; },
        },
        '<-=.2'
      );
    };

    // ── Reset to grid view ────────────────────────────────────────
    const resetView = () => {
      // ★ KEY FIX: match original — guard at the TOP
      if (isAnimating) return;
      isAnimating = true;

      // Kill any stale tweens
      gsap.killTweensOf([panel, panelContent, panelImg]);
      document.querySelectorAll('.portfolio-mover').forEach(m => m.remove());

      const allItems = Array.from(grid.querySelectorAll('.portfolio-grid__item')) as HTMLElement[];
      const delays = computeStaggerDelays(currentItem!, allItems);
      gsap.killTweensOf(allItems);

      gsap.timeline({
        defaults: { duration: config.stepDuration, ease: 'expo' },
        onComplete: () => {
          panel.classList.remove('portfolio-panel--right');
          isAnimating = false;
          isPanelOpen = false;
        },
      })
      .to(panel, { opacity: 0 })
      .add(showUI, 0)
      .set(panel, { opacity: 0, pointerEvents: 'none' })
      .set(panelImg, { clipPath: 'inset(0% 0% 100% 0%)' })
      .set(allItems, { clipPath: 'none', opacity: 0, scale: 0.8 }, 0)
      .to(allItems, { opacity: 1, scale: 1, delay: (i: number) => delays[i] }, '>');

      Object.assign(config, originalConfig);
    };

    // ── Item click handler ────────────────────────────────────────
    const handleItemClick = (e: Event) => {
      const item = e.currentTarget as HTMLElement;
      if (isAnimating) return;
      isAnimating = true;
      currentItem = item;

      Object.assign(config, originalConfig); // reset from previous item
      const overrides = extractOverrides(item);
      Object.assign(config, overrides);

      positionPanel(item);

      const data = extractItemData(item);
      setPanelContent(data);

      const allItems = Array.from(grid.querySelectorAll('.portfolio-grid__item')) as HTMLElement[];
      const delays = computeStaggerDelays(item, allItems);
      animateGridItems(allItems, item, delays);
      animateTransition(
        item.querySelector('.portfolio-grid__item-image') as HTMLElement,
        panelImg,
        data.imgURL
      );
    };

    // ── Close button & keyboard ───────────────────────────────────
    const handleClose = (e: Event) => {
      e.preventDefault();
      if (isPanelOpen && !isAnimating) resetView();
    };
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isPanelOpen && !isAnimating) resetView();
    };

    const closeBtn = panelContent.querySelector('.portfolio-panel__close');
    closeBtn?.addEventListener('click', handleClose);
    document.addEventListener('keydown', handleKeydown);

    const items = Array.from(grid.querySelectorAll('.portfolio-grid__item'));
    items.forEach(item => item.addEventListener('click', handleItemClick));

    // ── Cleanup ───────────────────────────────────────────────────
    return () => {
      items.forEach(item => item.removeEventListener('click', handleItemClick));
      closeBtn?.removeEventListener('click', handleClose);
      document.removeEventListener('keydown', handleKeydown);
      document.querySelectorAll('.portfolio-mover').forEach(m => m.remove());
      gsap.killTweensOf([panel, panelContent, panelImg]);
    };
  }, [filterKey]);
}
