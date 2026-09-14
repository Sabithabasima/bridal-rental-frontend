"use client";

import { useState } from "react";

type FilterOption = {
  label: string;
  value: string;
};

type FilterSectionProps = {
  title: string;
  options: FilterOption[];
  selectedValues: string[];
  onChange: (value: string) => void;
  defaultOpen?: boolean;
};

export default function FilterSection({
  title,
  options,
  selectedValues,
  onChange,
  defaultOpen = false,
}: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#eadfd4]">
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-sm font-medium text-[#3b3030]">
          {title}
        </span>

        <span
          className={`text-lg text-[#6f625d] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
         ⌄
        </span>
      </button>

      {isOpen && (
        <div className="space-y-3 pb-5">
          {options.map((option) => {
            const isSelected = selectedValues.includes(option.value);

            return (
              <label
                key={option.value}
                className="flex cursor-pointer items-center gap-3 text-sm text-[#6f625d]"
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onChange(option.value)}
                  className="h-4 w-4 rounded border-[#cdbda9] accent-[#681c2c]"
                />

                <span
                  className={
                    isSelected
                      ? "font-medium text-[#681c2c]"
                      : ""
                  }
                >
                  {option.label}
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}