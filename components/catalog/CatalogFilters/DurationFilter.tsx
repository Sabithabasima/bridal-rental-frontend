"use client";

import FilterSection from "./FilterSection";

type DurationFilterProps = {
  options: {
    label: string;
    value: string;
  }[];
  selectedValues: string[];
  onChange: (value: string) => void;
};

export default function DurationFilter({
  options,
  selectedValues,
  onChange,
}: DurationFilterProps) {
  return (
    <FilterSection
      title="Rental Duration"
      options={options}
      selectedValues={selectedValues}
      onChange={onChange}
      defaultOpen={false}
    />
  );
}