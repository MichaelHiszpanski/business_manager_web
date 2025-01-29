import React, { FC } from "react";
import Link from "next/link";
interface Props {
  name: string;
  hrefLink: string;
  className?: string;
  onClick?: () => void;
}

const NavigationLinkButton: FC<Props> = ({
  name,
  hrefLink,
  className,
  onClick,
}) => {
  return (
    <div
      className={` ${className} rounded-xl font-bold hover:scale-125 
      transition-transform duration-300 ease-in-out select-none font-orbitron_variable text-xl`}
      onClick={onClick}
    >
      <Link href={hrefLink}>{name}</Link>
    </div>
  );
};
export default NavigationLinkButton;
