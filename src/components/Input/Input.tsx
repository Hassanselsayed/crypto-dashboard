import type { ChangeEventHandler } from "react";
import "./Input.scss";

interface InputProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  handleChange: ChangeEventHandler;
}

export default function Input({
  type,
  name,
  value,
  placeholder,
  handleChange,
}: InputProps) {
  return (
    <input
      className="input"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
