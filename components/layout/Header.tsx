"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryNavigation } from "@/config/navigation";
import MobileMenu from "./MobileMenu";

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    >
      <path d="M4 7H20" />
      <path d="M4 12H20" />
      <path d="M4 17H20" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16L21 21" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.8 8.7C20.8 13.6 12 20 12 20S3.2 13.6 3.2 8.7C3.2 5.8 5.3 3.8 8 3.8C9.7 3.8 11.2 4.6 12 5.9C12.8 4.6 14.3 3.8 16 3.8C18.7 3.8 20.8 5.8 20.8 8.7Z" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 8H19L20 21H4L5 8Z" />
      <path d="M9 8V6C9 4.3 10.3 3 12 3C13.7 3 15 4.3 15 6V8" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21C4.8 16.8 7.5 14.5 12 14.5C16.5 14.5 19.2 16.8 20 21" />
    </svg>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#E8DCC8] bg-[#FFFDF8]/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[76px] items-center justify-between gap-4 lg:h-[88px]">
            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#681C2C] transition hover:bg-[#F4EBDD] lg:hidden"
            >
              <MenuIcon />
            </button>

            {/* Brand Logo */}
            <Link
              href="/"
              className="flex flex-col items-center leading-none lg:items-start"
            >
              <span className="font-serif text-2xl font-semibold tracking-[0.08em] text-[#681C2C] sm:text-3xl">
                AURELIA
              </span>

              <span className="mt-1 text-[8px] uppercase tracking-[0.32em] text-[#A17A3E] sm:text-[9px]">
                The Bridal Edit
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden flex-1 items-center justify-center lg:flex">
              <ul className="flex items-center gap-6 xl:gap-8">
                {primaryNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="relative whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.08em] text-[#403536] transition hover:text-[#681C2C] after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-[#A17A3E] after:transition-all hover:after:w-full"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Header Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              <Link
                href="/search"
                aria-label="Search"
                className="flex h-10 w-10 items-center justify-center rounded-full text-[#681C2C] transition hover:bg-[#F4EBDD]"
              >
                <SearchIcon />
              </Link>

              <Link
                href="/wishlist"
                aria-label="Wishlist"
                className="hidden h-10 w-10 items-center justify-center rounded-full text-[#681C2C] transition hover:bg-[#F4EBDD] sm:flex"
              >
                <HeartIcon />
              </Link>

              <Link
                href="/cart"
                aria-label="Shopping bag"
                className="flex h-10 w-10 items-center justify-center rounded-full text-[#681C2C] transition hover:bg-[#F4EBDD]"
              >
                <BagIcon />
              </Link>

              <Link
                href="/account"
                aria-label="Account"
                className="hidden h-10 w-10 items-center justify-center rounded-full text-[#681C2C] transition hover:bg-[#F4EBDD] sm:flex"
              >
                <UserIcon />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}