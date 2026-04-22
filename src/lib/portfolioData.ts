export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  description: string;
  imgURL: string;
}

// ─── Wedding ───────────────────────────────────────────────────────
const weddingImages = [
  "/images/wedding/DEL_1418.jpg",
  "/images/wedding/DEL_51536.jpg",
  "/images/wedding/DSC01893.jpg",
  "/images/wedding/DSC05720.jpg",
  "/images/wedding/DSC05789.jpg",
  "/images/wedding/DSC05838.jpg",
  "/images/wedding/DSCC_0686.jpg",
  "/images/wedding/DSC_0521.jpg",
  "/images/wedding/DSC_0528.jpg",
  "/images/wedding/DSC_0594.jpg",
  "/images/wedding/DSC_0601.jpg",
  "/images/wedding/DSC_0611.jpg",
  "/images/wedding/DSC_0649.jpg",
  "/images/wedding/DSC_0682.jpg",
  "/images/wedding/DSC_0691.jpg",
  "/images/wedding/DSC_0710.jpg",
  "/images/wedding/DSC_0820-1.jpg",
  "/images/wedding/DSC_0901.jpg",
  "/images/wedding/DSC_1081.jpg",
  "/images/wedding/DSC_1101.jpg",
  "/images/wedding/Jennifer-and-King_24.jpg",
  "/images/wedding/Jennifer-and-King_27.jpg",
  "/images/wedding/Jennifer-and-King_29.jpg",
  "/images/wedding/Jennifer-and-King_35.jpg",
  "/images/wedding/SINO4040.jpg",
  "/images/wedding/SINO4181.jpg",
  "/images/wedding/SINO4197.jpg",
  "/images/wedding/SINO4203.jpg",
  "/images/wedding/SINO4215.jpg",
  "/images/wedding/SINO4227.jpg",
  "/images/wedding/SINO4232.jpg",
  "/images/wedding/SINO4254.jpg",
  "/images/wedding/Trust-Charitos(8).jpg",
];

// ─── Portrait ──────────────────────────────────────────────────────
const portraitImages = [
  "/images/portrait/AGCOMS_9.jpg",
  "/images/portrait/Becky_2.JPG",
  "/images/portrait/Becky_4.JPG",
  "/images/portrait/DSC01019.jpg",
  "/images/portrait/DSC01022.jpg",
  "/images/portrait/DSC01028.jpg",
  "/images/portrait/DSC01034.jpg",
  "/images/portrait/DSC01048.jpg",
  "/images/portrait/DSC01092.jpg",
  "/images/portrait/DSC01098.jpg",
  "/images/portrait/DSC01114.jpg",
  "/images/portrait/DSC01122.jpg",
  "/images/portrait/DSC01126.jpg",
  "/images/portrait/DSC01129.jpg",
  "/images/portrait/DSC01143.jpg",
  "/images/portrait/DSC01151.jpg",
  "/images/portrait/DSC01163.jpg",
  "/images/portrait/DSC01182.jpg",
  "/images/portrait/DSC01208.jpg",
  "/images/portrait/DSC01426.jpg",
  "/images/portrait/DSC01447.jpg",
  "/images/portrait/DSC_0238-1.jpg",
  "/images/portrait/DSC_0269.jpg",
  "/images/portrait/DSC_0276.jpg",
  "/images/portrait/DSC_0334.jpg",
  "/images/portrait/DSC_0335.jpg",
  "/images/portrait/DSC_0337.jpg",
  "/images/portrait/DSC_0338.jpg",
  "/images/portrait/DSC_0342.jpg",
  "/images/portrait/DSC_0371.jpg",
  "/images/portrait/DSC_0389.jpg",
  "/images/portrait/Ejirika-_1.jpg",
  "/images/portrait/Ejirika-_9.jpg",
  "/images/portrait/HON-SUNDAY-DARE_3.jpg",
  "/images/portrait/HON-SUNDAY-DARE_6.jpg",
  "/images/portrait/IFE_7342.jpg",
  "/images/portrait/IFE_7356.jpg",
  "/images/portrait/IMG_3846.jpg",
  "/images/portrait/IMG_6135.jpg",
  "/images/portrait/JOY.JPG",
  "/images/portrait/JOY_1.JPG",
  "/images/portrait/SAVE_20250824_132341.jpg",
  "/images/portrait/SAVE_20250901_104551.jpg",
  "/images/portrait/Trust-Charitos-(88).jpg",
  "/images/portrait/Zinta_5.jpg",
  "/images/portrait/Zinta_6.jpg",
  "/images/portrait/_DEL2042.JPG",
  "/images/portrait/_DEL2067BW.jpg",
];

// ─── Model ────────────────────────────────────────────────────────
const modelImages = [
  "/images/model/ASUU-2.jpg",
  "/images/model/ASUU.jpg",
  "/images/model/ATT01492.JPG",
  "/images/model/ATT01504.JPG",
  "/images/model/DEL_4282.jpg",
  "/images/model/DSC05581.jpg",
  "/images/model/DSC05661.jpg",
  "/images/model/DSC05670.jpg",
  "/images/model/DSC05689.jpg",
  "/images/model/DSC05712.jpg",
  "/images/model/DSC06101.jpg",
  "/images/model/DSC06437.jpg",
  "/images/model/DSC06482.jpg",
  "/images/model/DSC06533.jpg",
  "/images/model/DSC_0025.jpg",
  "/images/model/DSC_0026.jpg",
  "/images/model/DSC_0027.jpg",
  "/images/model/DSC_0110.jpg",
  "/images/model/DSC_0224.jpg",
  "/images/model/DSC_0234.jpg",
  "/images/model/DSC_0346_1.jpg",
  "/images/model/DSC_0386.jpg",
  "/images/model/DSC_0450.jpg",
  "/images/model/IFE_0049.JPG",
  "/images/model/IFE_0066.jpg",
  "/images/model/IFE_74833.jpg",
  "/images/model/IFE_74988.jpg",
  "/images/model/IMG_9943.jpg",
  "/images/model/IMG_9981.jpg",
  "/images/model/IMG_9984.jpg",
  "/images/model/Jemima.jpg",
  "/images/model/Jemima_2.jpg",
  "/images/model/MRS-A-5.jpg",
  "/images/model/Mrs-A7.jpg",
  "/images/model/_DEL0197.JPG",
  "/images/model/_DEL0227.JPG",
  "/images/model/_DEL0294.JPG",
  "/images/model/_DEL0298.JPG",
  "/images/model/_DEL0306.JPG",
];

// ─── Corporate ─────────────────────────────────────────────────────
const corporateImages = [
  "/images/coorporate/DSC01153.jpg",
  "/images/coorporate/DSC01159.jpg",
  "/images/coorporate/DSC_0309.jpg",
  "/images/coorporate/IMG_6149.jpg",
  "/images/coorporate/IMG_6150.jpg",
  "/images/coorporate/IMG_6177.jpg",
  "/images/coorporate/IMG_6264.jpg",
  "/images/coorporate/IMG_6269.jpg",
  "/images/coorporate/Trust-Charitos-(33).jpg",
  "/images/coorporate/Trust-Charitos-(37).jpg",
  "/images/coorporate/Trust-Charitos-(5).jpg",
];

// ─── Events ────────────────────────────────────────────────────────
const eventImages = [
  "/images/event/DSC00462.jpg",
  "/images/event/DSC00581.jpg",
  "/images/event/DSC00586.jpg",
  "/images/event/DSC06946.jpg",
  "/images/event/DSC06990.jpg",
  "/images/event/DSC07003.jpg",
  "/images/event/DSC07056.jpg",
  "/images/event/DSC07058.jpg",
  "/images/event/DSC08466.jpg",
  "/images/event/DSC08555.jpg",
  "/images/event/DSC08619.jpg",
  "/images/event/DSC08635.jpg",
  "/images/event/DSC08653.jpg",
  "/images/event/KHA_4150.jpg",
  "/images/event/KHA_4206.jpg",
  "/images/event/KHA_4309.jpg",
];

// ─── Family ────────────────────────────────────────────────────────
const familyImages = [
  "/images/family/DSC01789.jpg",
  "/images/family/DSC01834.jpg",
  "/images/family/DSC05639.jpg",
  "/images/family/DSC05743.jpg",
  "/images/family/DSC05884.jpg",
  "/images/family/DSC06601.jpg",
  "/images/family/DSC06620.jpg",
  "/images/family/DSC06632.jpg",
  "/images/family/DSC06714.jpg",
  "/images/family/DSC06725.jpg",
  "/images/family/DSC_0354.jpg",
  "/images/family/DSC_1110.jpg",
  "/images/family/DSC_1604.jpg",
  "/images/family/DSC_1682.jpg",
  "/images/family/DSC_1698.jpg",
];

// ─── Products ──────────────────────────────────────────────────────
const productImages = [
  "/images/product/DEL_1276.jpg",
  "/images/product/DEL_1519.jpg",
  "/images/product/DSC_0382.jpg",
  "/images/product/DSC_0512.jpg",
  "/images/product/DSC_0542 (1).jpg",
];

// ─── Build portfolio items per category ────────────────────────────
function buildItems(images: string[], category: string, label: string): PortfolioItem[] {
  return images.map((imgURL, i) => ({
    id: `${category}-${i + 1}`,
    category,
    title: `${label} — ${String(i + 1).padStart(2, "0")}`,
    description: `A stunning ${label.toLowerCase()} capture by Delight Notions Studio's.`,
    imgURL,
  }));
}

export const portfolioData: PortfolioItem[] = [
  ...buildItems(weddingImages,    "wedding",    "Wedding"),
  ...buildItems(portraitImages,   "portrait",   "Portrait"),
  ...buildItems(modelImages,      "model",      "Model"),
  ...buildItems(corporateImages,  "corporate",  "Corporate"),
  ...buildItems(eventImages,      "events",     "Events"),
  ...buildItems(familyImages,     "family",     "Family"),
  ...buildItems(productImages,    "products",   "Products"),
];
