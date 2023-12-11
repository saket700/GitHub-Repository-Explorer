import React from "react";

type OptionValue = string;

interface SelectProps<T extends OptionValue> {
  options: T[];
  value: T;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  isDisabled?: boolean;
}

export const Select: React.FC<SelectProps<OptionValue>> = ({ onChange, isDisabled,options }) => {
  return (
    <div className="ml-4 mt-[16px]">
      <select
        id="github_repo"
        className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-4 text-black bottom-1.5 end-2.5 py-[10px]"
        onChange={onChange} 
        disabled={isDisabled}
        
      >
        {options.map((option) => (
          <option key={option} value={option} >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
