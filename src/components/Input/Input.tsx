import type { ChangeEventHandler } from "react";
import "./Input.scss";

interface InputProps {
  className?: string;
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
  className,
  type,
  name,
  value,
  placeholder,
  handleChange,
}: InputProps) {
  return (
    <input
      className={`input ${className}`}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
