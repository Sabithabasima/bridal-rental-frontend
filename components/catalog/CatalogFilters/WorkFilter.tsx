"use client";

import FilterSection from "./FilterSection";

type WorkFilterProps = {
  options: {
    label: string;
    value: string;
  }[];
  selectedValues: string[];
  onChange: (value: string) => void;
};

export default function WorkFilter({
  options,
  selectedValues,
  onChange,
}: WorkFilterProps) {
  return (
    <FilterSection
      title="Embroidery & Work"
      options={options}
      selectedValues={selectedValues}
      onChange={onChange}
      defaultOpen={false}
    />
  );
}