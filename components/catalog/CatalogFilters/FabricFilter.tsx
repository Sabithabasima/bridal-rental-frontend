"use client";

import FilterSection from "./FilterSection";

type FabricFilterProps = {
  options: {
    label: string;
    value: string;
  }[];
  selectedValues: string[];
  onChange: (value: string) => void;
};

export default function FabricFilter({
  options,
  selectedValues,
  onChange,
}: FabricFilterProps) {
  return (
    <FilterSection
      title="Fabric"
      options={options}
      selectedValues={selectedValues}
      onChange={onChange}
      defaultOpen={false}
    />
  );
}