"use client";

import React from "react";

type Props = {
  headingRef: React.RefObject<HTMLDivElement>;
  waveRef: React.RefObject<HTMLParagraphElement>;
};

const FlashPageComponent: React.FC<Props> = ({ headingRef, waveRef }) => {
  const waveText = "Your one-stop solution for all your Business needs!";

  return (
    <div className="w-[100vw] h-[100vh] p-4 md:mt-10 text-center flex flex-col justify-center items-center">
      <div>
        <h1
          ref={headingRef}
          className="md:text-5xl text-3xl md:text-[60px] font-permanentMarker text-colorFour mb-4 select-none"
        >
          Business Manager
        </h1>
      </div>
      <div className="w-full">
        <p
          ref={waveRef}
          className="text-gray-200 md:mt-10 font-mono px-4 items-center text-lg md:text-xl flex flex-wrap justify-center select-none"
        >
          {waveText.split("").map((char, i) => (
            <span key={i} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default FlashPageComponent;
