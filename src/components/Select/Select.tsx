import type { ChangeEventHandler } from "react";
import type { SelectOption } from "../../types";

interface SelectProps {
  className?: string;
  name: string;
  selectedValue: string;
  options: SelectOption[];
  handleChange: ChangeEventHandler<HTMLSelectElement>;
}

export default function Select({
  className,
  name,
  selectedValue,
  options,
  handleChange,
}: SelectProps) {
  return (
    <select
      className={`select ${className}`}
      name={name}
      value={selectedValue}
      onChange={handleChange}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          <strong>{opt.label}</strong>
        </option>
      ))}
    </select>
  );
}
