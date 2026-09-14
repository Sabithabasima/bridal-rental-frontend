"use client";

import Link from "next/link";
import { mobileNavigation } from "@/config/navigation";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M6 6L18 18" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12H19" />
      <path d="M12 5L19 12L12 19" />
    </svg>
  );
}

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-black/50 backdrop-blur-[2px]"
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className="relative flex h-full w-[88%] max-w-sm flex-col bg-[#FFFDF8] shadow-2xl"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-[#E8DCC8] px-5 py-5">
          <Link
            href="/"
            onClick={onClose}
            className="flex flex-col leading-none"
          >
            <span className="font-serif text-2xl font-semibold tracking-wide text-[#681C2C]">
              AURELIA
            </span>

            <span className="mt-1 text-[9px] uppercase tracking-[0.32em] text-[#A17A3E]">
              The Bridal Edit
            </span>
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8DCC8] text-[#681C2C] transition hover:bg-[#F4EBDD]"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A17A3E]">
            Explore the collection
          </p>

          <ul className="space-y-1">
            {mobileNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center justify-between border-b border-[#EFE6D8] py-4 text-[15px] font-medium text-[#2D2525] transition hover:text-[#681C2C]"
                >
                  <span>{item.label}</span>

                  <span className="text-[#A17A3E] transition-transform group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Information */}
        <div className="border-t border-[#E8DCC8] bg-[#F8F0E5] px-5 py-6">
          <p className="font-serif text-lg text-[#681C2C]">
            Your dream bridal look awaits.
          </p>

          <p className="mt-2 text-sm leading-6 text-[#6D6260]">
            Discover timeless bridal outfits and carefully curated accessories
            for your special moments.
          </p>

          <Link
            href="/contact"
            onClick={onClose}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-[#681C2C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#4F1421]"
          >
            Get in Touch
          </Link>
        </div>
      </aside>
    </div>
  );
}