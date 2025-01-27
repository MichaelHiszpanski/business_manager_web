import React, { FC, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  borderColor: string;
  name: string;
  error?: string | null;
  isLabel?: boolean;
  label: string;
}

const CustomTextInput: FC<Props> = ({
  value,
  onChange,
  placeholder = "Email",
  type = "text",
  borderColor,
  name,
  label,
  isLabel = true,
  error = "",
}) => {
  const [currentKeyboardType, setCurrentKeyboardType] = useState(type);
  const showPassword = () => {
    setCurrentKeyboardType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };
  return (
    <div className="w-full  h-[90px]">
      {isLabel && (
        <label className="block text-sm font-medium text-colorOne bg-white  mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={currentKeyboardType}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`p-2  border text-colorOne   rounded w-full  ${borderColor} `}
          // required
        />
        {type === "password" && (
          <button
            type="button"
            onClick={showPassword}
            className={`absolute right-2 top-2 text-gray-500 hover:text-colorFive focus:outline-none `}
          >
            {currentKeyboardType === "password" ? (
              <FaRegEye size={25} />
            ) : (
              <FaRegEyeSlash size={25} />
            )}
          </button>
        )}
      </div>

      {error && error.length > 0 && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default CustomTextInput;
