"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white text-black">
      {/* Desktop Header */}
      <div className="hidden h-24 items-center justify-between border-b border-neutral-200 px-8 lg:flex xl:px-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-2xl tracking-[0.28em]"
        >
          AURELIA
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-10">
          <Link
            href="/bridal-wear"
            className="text-[13px] uppercase tracking-[0.16em] transition-opacity hover:opacity-50"
          >
            Bridal Wear
          </Link>

          <Link
            href="/jewellery"
            className="text-[13px] uppercase tracking-[0.16em] transition-opacity hover:opacity-50"
          >
            Jewellery
          </Link>

          <Link
            href="/collections"
            className="text-[13px] uppercase tracking-[0.16em] transition-opacity hover:opacity-50"
          >
            Collections
          </Link>

          <Link
            href="/about"
            className="text-[13px] uppercase tracking-[0.16em] transition-opacity hover:opacity-50"
          >
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          {/* Wishlist */}
          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="transition-opacity hover:opacity-50"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
              />
            </svg>
          </Link>

          {/* Account */}
          <Link
            href="/account"
            aria-label="Account"
            className="transition-opacity hover:opacity-50"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4.42 3.58-8 8-8s8 3.58 8 8" />
            </svg>
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            aria-label="Shopping bag"
            className="transition-opacity hover:opacity-50"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M6 8h12l1 13H5L6 8Z" />
              <path d="M9 8a3 3 0 0 1 6 0" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex h-20 items-center justify-between border-b border-neutral-200 px-5 lg:hidden">
        {/* Menu Button */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-5 bg-black" />
            <span className="block h-px w-5 bg-black" />
          </div>
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.25em]"
        >
          AURELIA
        </Link>

        {/* Mobile Cart */}
        <Link
          href="/cart"
          aria-label="Shopping bag"
          className="flex h-10 w-10 items-center justify-center"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M6 8h12l1 13H5L6 8Z" />
            <path d="M9 8a3 3 0 0 1 6 0" />
          </svg>
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-b border-neutral-200 bg-white px-6 py-8 lg:hidden">
          <nav className="flex flex-col">
            <Link
              href="/bridal-wear"
              onClick={() => setMenuOpen(false)}
              className="border-b border-neutral-200 py-5 text-sm uppercase tracking-[0.16em]"
            >
              Bridal Wear
            </Link>

            <Link
              href="/jewellery"
              onClick={() => setMenuOpen(false)}
              className="border-b border-neutral-200 py-5 text-sm uppercase tracking-[0.16em]"
            >
              Jewellery
            </Link>

            <Link
              href="/collections"
              onClick={() => setMenuOpen(false)}
              className="border-b border-neutral-200 py-5 text-sm uppercase tracking-[0.16em]"
            >
              Collections
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="border-b border-neutral-200 py-5 text-sm uppercase tracking-[0.16em]"
            >
              About
            </Link>

            <Link
              href="/wishlist"
              onClick={() => setMenuOpen(false)}
              className="border-b border-neutral-200 py-5 text-sm uppercase tracking-[0.16em]"
            >
              Wishlist
            </Link>

            <Link
              href="/account"
              onClick={() => setMenuOpen(false)}
              className="py-5 text-sm uppercase tracking-[0.16em]"
            >
              Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}