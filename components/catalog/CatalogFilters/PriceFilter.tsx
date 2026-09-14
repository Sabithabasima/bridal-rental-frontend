"use client";

import FilterSection from "./FilterSection";

type PriceFilterProps = {
  options: {
    label: string;
    value: string;
  }[];
  selectedValues: string[];
  onChange: (value: string) => void;
};

export default function PriceFilter({
  options,
  selectedValues,
  onChange,
}: PriceFilterProps) {
  return (
    <FilterSection
      title="Rental Price"
      options={options}
      selectedValues={selectedValues}
      onChange={onChange}
      defaultOpen={false}
    />
  );
}