// Real Passionfruit Coffee photography (sourced from their Squarespace CDN).
const C = "https://images.squarespace-cdn.com/content/v1/6361494bee36a43036e20fe3";

export const IMG = {
  heroInterior: `${C}/920b1420-d32a-49fb-af4a-81ccc198a608/IMG_9669.jpg`,
  family: `${C}/19df343c-6e6d-4315-a4ab-aff11ce7d6c3/family.jpg`,
  coffeeBeans: `${C}/f92c7ea4-92ba-4771-a479-887cc1b33ff7/IMG_9732.jpg`,
  // Reused gallery fallbacks — same brand CDN
  drink1: `${C}/920b1420-d32a-49fb-af4a-81ccc198a608/IMG_9669.jpg`,
  drink2: `${C}/f92c7ea4-92ba-4771-a479-887cc1b33ff7/IMG_9732.jpg`,
  pastry1: `${C}/19df343c-6e6d-4315-a4ab-aff11ce7d6c3/family.jpg`,
};

export const LOGO_WHITE =
  "https://images.squarespace-cdn.com/content/v1/6361494bee36a43036e20fe3/ce359909-6032-4978-b4d0-c9f09223500a/Passionfruit_Logo_White.png";

export const SEASONAL_SPECIALS = [
  {
    image: IMG.drink1,
    name: "Strawberry Pandan Matcha Latte",
    description: "Floral, bright, and a little unexpected.",
  },
  {
    image: IMG.drink2,
    name: "Salted Maple Matcha",
    description: "Earthy meets sweet.",
  },
  {
    image: IMG.pastry1,
    name: "Burnt Orange Mocha",
    description: "Citrus warmth in every sip.",
  },
];

export const ANNOUNCEMENT =
  "Now serving: Strawberry Pandan Matcha Latte";
