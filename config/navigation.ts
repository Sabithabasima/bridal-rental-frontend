// config/navigation.ts

export type NavigationItem = {
  label: string;
  href: string;
};

export type FooterNavigation = {
  shop: NavigationItem[];
  customerCare: NavigationItem[];
  company: NavigationItem[];
};

/**
 * Main navigation displayed in the desktop header.
 *
 * "Complete the Look" is intentionally not included here.
 * It will be displayed contextually on the homepage and product pages.
 */
export const primaryNavigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Dresses",
    href: "/catalog/dresses",
  },
  {
    label: "Jewelry",
    href: "/catalog/jewelry",
  },
  {
    label: "Accessories",
    href: "/catalog/accessories",
  },
  {
    label: "Occasions",
    href: "/occasions",
  },
];

/**
 * Navigation displayed inside the mobile menu.
 */
export const mobileNavigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Bridal Dresses",
    href: "/catalog/dresses",
  },
  {
    label: "Jewelry",
    href: "/catalog/jewelry",
  },
  {
    label: "Accessories",
    href: "/catalog/accessories",
  },
  {
    label: "Shop by Occasion",
    href: "/occasions",
  },
  {
    label: "How Rental Works",
    href: "/how-it-works",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

/**
 * Navigation displayed in the fixed mobile bottom bar.
 */
export const bottomNavigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Explore",
    href: "/catalog",
  },
  {
    label: "Wishlist",
    href: "/wishlist",
  },
  {
    label: "Cart",
    href: "/cart",
  },
  {
    label: "Account",
    href: "/account",
  },
];

/**
 * Navigation displayed in the footer.
 */
export const footerNavigation: FooterNavigation = {
  shop: [
    {
      label: "Bridal Dresses",
      href: "/catalog/dresses",
    },
    {
      label: "Jewelry",
      href: "/catalog/jewelry",
    },
    {
      label: "Accessories",
      href: "/catalog/accessories",
    },
    {
      label: "Shop by Occasion",
      href: "/occasions",
    },
  ],

  customerCare: [
    {
      label: "How Rental Works",
      href: "/how-it-works",
    },
    {
      label: "Size Guide",
      href: "/size-guide",
    },
    {
      label: "Rental Policies",
      href: "/rental-policies",
    },
    {
      label: "Frequently Asked Questions",
      href: "/faqs",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ],

  company: [
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Our Story",
      href: "/our-story",
    },
    {
      label: "Careers",
      href: "/careers",
    },
  ],
};