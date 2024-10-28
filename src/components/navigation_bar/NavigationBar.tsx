import React, { FC } from "react";
import Link from "next/link";
const NavigationBar: FC = () => {
  return (
    <nav className="w-full bg-red-400 h-[100px] flex flex-row justify-evenly items-center">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/">Docs</Link>
      </div>
      <div>
        <Link href="/">Informations</Link>
      </div>
      <div>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <Link href="/sign-in">Sign In</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
