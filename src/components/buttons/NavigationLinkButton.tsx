import React, { FC } from "react";
import Link from "next/link";
interface Props {
  name: string;
  hrefLink: string;
}

const NavigationLinkButton: FC<Props> = ({ name, hrefLink }) => {
  return (
    <div className=" rounded-xl font-bold hover:scale-110 ">
      <Link href={hrefLink} className="select-none">
        {name}
      </Link>
    </div>
  );
};
export default NavigationLinkButton;
