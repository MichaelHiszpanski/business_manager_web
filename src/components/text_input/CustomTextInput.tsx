import React, { FC } from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  borderColor: string;
}

const CustomTextInput: FC<Props> = ({
  value,
  onChange,
  placeholder = "Email",
  type = "email",
  borderColor,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`p-2 mb-6 border   rounded w-full  ${borderColor} `}
      required
    />
  );
};

export default CustomTextInput;
