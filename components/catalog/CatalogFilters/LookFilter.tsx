"use client";

import FilterSection from "./FilterSection";

type LookFilterProps = {
  options: {
    label: string;
    value: string;
  }[];
  selectedValues: string[];
  onChange: (value: string) => void;
};

export default function LookFilter({
  options,
  selectedValues,
  onChange,
}: LookFilterProps) {
  return (
    <FilterSection
      title="Look"
      options={options}
      selectedValues={selectedValues}
      onChange={onChange}
      defaultOpen={false}
    />
  );
}