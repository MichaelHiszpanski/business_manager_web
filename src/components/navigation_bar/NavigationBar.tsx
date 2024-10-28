import React, { FC } from "react";

const NavigationBar: FC = () => {
  return (
    <nav className="w-full bg-red-400 h-[100px] flex flex-row justify-evenly items-center">
      <div>
        <a href="/">Home</a>
      </div>
      <div>
        <a>Docs</a>
      </div>
      <div>
        <a>Informations</a>
      </div>
      <div>
        <a href="/contact">Contact</a>
      </div>
      <div>
        <a href="/sign-in">Sign In</a>
      </div>
    </nav>
  );
};

export default NavigationBar;
