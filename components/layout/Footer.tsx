import Link from "next/link";

const navigation = {
  shop: [
    {
      label: "Bridal Wear",
      href: "/bridal-wear",
    },
    {
      label: "Jewellery",
      href: "/jewellery",
    },
    {
      label: "Collections",
      href: "/collections",
    },
    {
      label: "Complete the Look",
      href: "/collections/complete-look",
    },
  ],
  about: [
    {
      label: "Our Story",
      href: "/about",
    },
    {
      label: "How It Works",
      href: "/#how-it-works",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "FAQs",
      href: "/faq",
    },
  ],
  customer: [
    {
      label: "My Account",
      href: "/account",
    },
    {
      label: "Wishlist",
      href: "/wishlist",
    },
    {
      label: "My Rentals",
      href: "/account/rentals",
    },
    {
      label: "Rental Guide",
      href: "/rental-guide",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-block font-serif text-3xl tracking-[0.25em]"
            >
              AURELIA
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-400">
              Curated bridal wear and jewellery for unforgettable moments.
              Discover your look, reserve your pieces and make your moment
              entirely your own.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-6">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:text-white"
              >
                Instagram
              </Link>

              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:text-white"
              >
                Facebook
              </Link>

              <Link
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:text-white"
              >
                Pinterest
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
              Shop
            </h3>

            <nav className="mt-6 flex flex-col gap-4">
              {navigation.shop.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm text-neutral-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
              AURELIA
            </h3>

            <nav className="mt-6 flex flex-col gap-4">
              {navigation.about.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm text-neutral-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Customer */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
              Customer
            </h3>

            <nav className="mt-6 flex flex-col gap-4">
              {navigation.customer.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm text-neutral-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-16 border-t border-neutral-800 pt-10 lg:mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                Email
              </p>

              <a
                href="mailto:hello@aureliabridal.com"
                className="mt-3 block text-sm text-neutral-300 transition-colors hover:text-white"
              >
                hello@aureliabridal.com
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                Phone
              </p>

              <a
                href="tel:+919999999999"
                className="mt-3 block text-sm text-neutral-300 transition-colors hover:text-white"
              >
                +91 99999 99999
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                Studio
              </p>

              <p className="mt-3 text-sm leading-6 text-neutral-300">
                Kerala, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-800 px-6 py-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-5 text-[10px] uppercase tracking-[0.18em] text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} AURELIA. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:text-neutral-300"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-neutral-300"
            >
              Terms
            </Link>

            <Link
              href="/shipping"
              className="transition-colors hover:text-neutral-300"
            >
              Shipping & Returns
            </Link>
          </div>
        </div>
      </div>

      {/* Large Brand Mark */}
      <div className="overflow-hidden px-6 pb-4 sm:px-10 lg:px-16">
        <p className="select-none text-center font-serif text-[17vw] leading-[0.7] tracking-[-0.05em] text-neutral-900">
          AURELIA
        </p>
      </div>
    </footer>
  );
}