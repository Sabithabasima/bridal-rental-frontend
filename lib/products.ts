export type ProductCategory =
  | "Bridal Dresses"
  | "Jewelry"
  | "Accessories";

export type ProductAvailability =
  | "available"
  | "coming-soon"
  | "pre-booking";

export type Product = {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  occasion: string;
  look: string;
  color: string;
  duration: number[];
  image: string;
  badge?: string;
  description: string;
  material: string;
  included: string[];
  sizes?: string[];
  fabric?: string;
  work?: string;
  availability: ProductAvailability;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Crimson Heritage Lehenga",
    category: "Bridal Dresses",
    price: 4999,
    occasion: "wedding",
    look: "classic-red",
    color: "red",
    duration: [4, 7, 10, 14],
    image: "/images/trending-crimson-lehenga.jpg",
    badge: "Trending",
    description:
      "A regal crimson bridal lehenga designed with traditional detailing, rich embroidery, and a timeless silhouette for your wedding day.",
    material: "Premium embroidered fabric",
    included: ["Lehenga skirt", "Blouse", "Dupatta"],
    sizes: ["xs", "s", "m", "l", "xl"],
    fabric: "embroidered-fabric",
    work: "zardozi",
    availability: "available",
  },

  {
    id: 2,
    name: "Ivory Silk Bridal Gown",
    category: "Bridal Dresses",
    price: 3999,
    occasion: "reception",
    look: "ivory-bride",
    color: "ivory",
    duration: [4, 7, 10],
    image: "/images/trending-ivory-gown.jpg",
    badge: "New",
    description:
      "An elegant ivory gown with a graceful fall and soft bridal finish, perfect for a sophisticated reception look.",
    material: "Silk blend",
    included: ["Gown", "Matching belt"],
    sizes: ["xs", "s", "m", "l", "xl"],
    fabric: "silk",
    work: "plain",
    availability: "available",
  },

  {
    id: 3,
    name: "Antique Gold Bridal Set",
    category: "Jewelry",
    price: 1999,
    occasion: "wedding",
    look: "regal-bride",
    color: "gold",
    duration: [4, 7, 10, 14],
    image: "/images/trending-antique-gold-set.jpg",
    badge: "Popular",
    description:
      "A statement antique-gold jewelry set inspired by traditional bridal artistry and designed to complement rich wedding ensembles.",
    material: "Gold-finish alloy",
    included: ["Necklace", "Earrings", "Maang tikka"],
    availability: "available",
  },

  {
    id: 4,
    name: "Royal Polki Necklace",
    category: "Jewelry",
    price: 1499,
    occasion: "engagement",
    look: "regal-bride",
    color: "gold",
    duration: [4, 7, 10],
    image: "/images/trending-polki-necklace.jpg",
    description:
      "A refined polki-inspired necklace that adds royal elegance to engagement and pre-wedding outfits.",
    material: "Polki-finish alloy",
    included: ["Necklace", "Matching earrings"],
    availability: "available",
  },

  {
    id: 5,
    name: "Blush Embroidered Lehenga",
    category: "Bridal Dresses",
    price: 4499,
    occasion: "engagement",
    look: "soft-romance",
    color: "blush-pink",
    duration: [4, 7, 10, 14],
    image: "/images/catalog-blush-lehenga.jpg",
    description:
      "A soft blush lehenga featuring delicate embroidery and a romantic bridal silhouette for engagement celebrations.",
    material: "Embroidered net fabric",
    included: ["Lehenga skirt", "Blouse", "Dupatta"],
    sizes: ["xs", "s", "m", "l", "xl"],
    fabric: "net",
    work: "embroidery",
    availability: "available",
  },

  {
    id: 6,
    name: "Traditional Bridal Maang Tikka",
    category: "Jewelry",
    price: 799,
    occasion: "mehendi",
    look: "traditional-bridal",
    color: "gold",
    duration: [4, 7, 10],
    image: "/images/catalog-maang-tikka.jpg",
    description:
      "A traditional maang tikka that brings a delicate festive finish to mehendi and wedding-day styling.",
    material: "Gold-finish alloy",
    included: ["Maang tikka"],
    availability: "available",
  },

  {
    id: 7,
    name: "Embroidered Bridal Potli",
    category: "Accessories",
    price: 699,
    occasion: "reception",
    look: "golden-glow",
    color: "champagne",
    duration: [4, 7, 10],
    image: "/images/catalog-bridal-potli.jpg",
    description:
      "A beautifully embroidered potli bag designed to complete your bridal or reception ensemble.",
    material: "Embroidered textile",
    included: ["Potli bag", "Decorative drawstring"],
    availability: "available",
  },

  {
    id: 8,
    name: "Soft Net Bridal Veil",
    category: "Accessories",
    price: 999,
    occasion: "wedding",
    look: "ivory-bride",
    color: "ivory",
    duration: [4, 7, 10, 14],
    image: "/images/catalog-bridal-veil.jpg",
    description:
      "A soft bridal veil with a delicate finish, perfect for adding an ethereal touch to your wedding look.",
    material: "Soft net fabric",
    included: ["Bridal veil", "Hair comb attachment"],
    availability: "available",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === Number(id));
}