"use client";

import React, { useState, useRef, useEffect } from "react";
import { portfolioData } from "@/lib/portfolioData";
import Image from "next/image";
import useRepeatingTransition from "./useRepeatingTransition";
import '@/app/portfolio/portfolio.css';

const categories = ["All", "Wedding", "Portrait", "Model", "Corporate", "Events", "Family", "Products"];

export default function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState("All");
  const gridRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Initialize smooth scroll safely for SSR
  useEffect(() => {
    let lenis: any;
    let rafId: number;

    import('@studio-freight/lenis').then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    });

    return () => {
      if (lenis) lenis.destroy();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useRepeatingTransition(gridRef, panelRef, activeTab);

  const filteredItems = activeTab === "All"
    ? portfolioData
    : portfolioData.filter(item => item.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="portfolio-container relative">
      <div className="portfolio-filters flex flex-wrap gap-3 mb-[3rem]">
        {categories.map((cat) => (
          <span
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2 rounded-[6.25rem] border text-[1rem] font-[500] cursor-pointer transition-colors
              ${cat === activeTab
                ? "bg-superGray border-superGray text-white"
                : "border-lightDark text-customGrayAlt2 hover:border-superGray hover:text-white"}`}
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="portfolio-grid" ref={gridRef}>
        {filteredItems.map((item, index) => {
          const customProps = index % 3 === 0 ? {
            'data-steps': "10",
            'data-step-duration': "0.3",
            'data-path-motion': "sine",
            'data-sine-amplitude': "300",
            'data-clip-path-direction': "left-right",
            'data-panel-reveal-duration-factor': "4"
          } : {};

          return (
            <figure
              key={item.id}
              className="portfolio-grid__item"
              role="img"
              aria-labelledby={`caption-${item.id}`}
              data-image={item.imgURL}
              {...customProps}
            >
              <div className="portfolio-grid__item-image relative">
                <Image
                  src={item.imgURL}
                  alt={item.title || "Portfolio Image"}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="portfolio-grid__item-caption" id={`caption-${item.id}`}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="portfolio-panel bg-background" ref={panelRef}>
        <div className="portfolio-panel__img"></div>
        <div className="portfolio-panel__content">
          <h3></h3>
          <p></p>
          <button className="portfolio-panel__close hover:text-white transition-colors">Close</button>
        </div>
      </div>
    </div>
  );
}
