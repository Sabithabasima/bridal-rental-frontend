"use client";

import FilterSection from "./FilterSection";

type OccasionFilterProps = {
  options: {
    label: string;
    value: string;
  }[];
  selectedValues: string[];
  onChange: (value: string) => void;
};

export default function OccasionFilter({
  options,
  selectedValues,
  onChange,
}: OccasionFilterProps) {
  return (
    <FilterSection
      title="Occasion"
      options={options}
      selectedValues={selectedValues}
      onChange={onChange}
      defaultOpen={true}
    />
  );
}