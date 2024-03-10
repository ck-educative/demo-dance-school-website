
import React from 'react';

interface DropdownProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ id, value, onChange, options }) => {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1 block w-1/2 rounded-md border-2 border-gray-800 shadow-sm"
      required
    >
      <option value="">--Please choose an option--</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;