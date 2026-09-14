
"use client";

import FilterSection from "./FilterSection";

type ColorFilterProps = {
  options: {
    label: string;
    value: string;
  }[];
  selectedValues: string[];
  onChange: (value: string) => void;
};

export default function ColorFilter({
  options,
  selectedValues,
  onChange,
}: ColorFilterProps) {
  return (
    <FilterSection
      title="Color"
      options={options}
      selectedValues={selectedValues}
      onChange={onChange}
      defaultOpen={false}
    />
  );
}