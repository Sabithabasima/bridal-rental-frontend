"use client";

import FilterSection from "./FilterSection";

type SizeFilterProps = {
  options: {
    label: string;
    value: string;
  }[];
  selectedValues: string[];
  onChange: (value: string) => void;
};

export default function SizeFilter({
  options,
  selectedValues,
  onChange,
}: SizeFilterProps) {
  return (
    <FilterSection
      title="Size"
      options={options}
      selectedValues={selectedValues}
      onChange={onChange}
      defaultOpen={false}
    />
  );
}