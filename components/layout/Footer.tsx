import Link from "next/link";
import { footerNavigation } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="bg-[#681C2C] text-[#FFF8EF]">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand Section */}
          <div>
            <Link href="/" className="inline-flex flex-col leading-none">
              <span className="font-serif text-3xl font-semibold tracking-[0.08em]">
                AURELIA
              </span>

              <span className="mt-2 text-[9px] uppercase tracking-[0.32em] text-[#D8B879]">
                The Bridal Edit
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#EBD8D5]">
              Timeless bridal fashion, thoughtfully curated for your most
              unforgettable moments. Rent your dream look without compromise.
            </p>

            <Link
              href="/catalog"
              className="mt-7 inline-flex items-center rounded-full border border-[#D8B879] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#F4D9A6] transition hover:bg-[#D8B879] hover:text-[#681C2C]"
            >
              Explore Collection
            </Link>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-serif text-xl text-[#F4D9A6]">Shop</h3>

            <ul className="mt-5 space-y-3">
              {footerNavigation.shop.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#EBD8D5] transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care Links */}
          <div>
            <h3 className="font-serif text-xl text-[#F4D9A6]">
              Customer Care
            </h3>

            <ul className="mt-5 space-y-3">
              {footerNavigation.customerCare.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#EBD8D5] transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-serif text-xl text-[#F4D9A6]">Our World</h3>

            <ul className="mt-5 space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#EBD8D5] transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.18em] text-[#D8B879]">
                Need assistance?
              </p>

              <Link
                href="/contact"
                className="mt-2 inline-block text-sm text-white underline decoration-[#D8B879] underline-offset-4"
              >
                Talk to our bridal team
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
          <p className="text-xs text-[#EBD8D5]">
            © {new Date().getFullYear()} Aurelia. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-5 text-xs text-[#EBD8D5]">
            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}