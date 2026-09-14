"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { bottomNavigation } from "@/config/navigation";

function HomeIcon() {
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
      <path d="M3 10.5L12 3L21 10.5V21H3V10.5Z" />
      <path d="M9 21V14H15V21" />
    </svg>
  );
}

function ExploreIcon() {
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
      <circle cx="11" cy="11" r="7" />
      <path d="M16 16L21 21" />
      <path d="M8 14L10 10L14 8" />
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

const iconMap = {
  Home: HomeIcon,
  Explore: ExploreIcon,
  Wishlist: HeartIcon,
  Cart: BagIcon,
  Account: UserIcon,
};

export default function MobileBottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E8DCC8] bg-[#FFFDF8]/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-5">
        {bottomNavigation.map((item) => {
          const Icon = iconMap[item.label as keyof typeof iconMap];
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-h-[68px] flex-col items-center justify-center gap-1 text-[10px] font-medium transition ${
                active
                  ? "text-[#681C2C]"
                  : "text-[#8A7C78] hover:text-[#681C2C]"
              }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
                  active ? "bg-[#F0E2D0]" : ""
                }`}
              >
                <Icon />
              </span>

              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}