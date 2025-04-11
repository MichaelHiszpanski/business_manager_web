"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlashPageComponent from "../FlashPageComponent/FlashPageComponent";

gsap.registerPlugin(ScrollTrigger);
const HomeContainer: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelOneRef = useRef<HTMLDivElement>(null);
  const panelTwoRef = useRef<HTMLDivElement>(null);
  const panelTwoWaveRef = useRef<HTMLDivElement>(null);
  const panelTwoHeadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "none" });

    if (!sectionRef.current || !panelOneRef.current || !panelTwoRef.current)
      return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        panelOneRef.current,
        { xPercent: -100 },
        { xPercent: 0, duration: 2 }
      ).fromTo(panelTwoRef.current, { yPercent: -100 }, { yPercent: 0 });

      tl.fromTo(
        panelTwoHeadingRef.current,
        { opacity: 0, y: 50, scale: 0.9, rotation: -90 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: "power3.out",
        }
      );

      const spans = panelTwoWaveRef.current?.querySelectorAll("span") ?? [];

      if (spans.length) {
        tl.fromTo(
          spans,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: "back.out(1.4)",
          },
          "-=1"
        );
      }

      ScrollTrigger.create({
        animation: tl,
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1000",
        // end: "bottom top",
        scrub: true,
        pin: true,
        // markers: true,
        // pinSpacing: false,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" relative w-[100vw] h-[100vh] overflow-hidden bg-gradient-to-t from-colorSeven via-colorSix to-colorSix text-white flex flex-col justify-center items-center"
    >
      <div className="md:w-1/2 p-4 text-center">
        <h1 className=" text-3xl md:text-5xl font-orbitron_variable mb-10">
          Business Manager
        </h1>
        <p className="text-lg md:text-xl font-mono text-colorFive">
          An all-in-one solution designed to simplify your daily business
          operations.
        </p>
      </div>

      <div
        ref={panelOneRef}
        className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-purple-700 flex flex-col justify-center items-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Designed for modern businesses.
        </h2>
        <p className="text-lg md:text-xl text-white font-mono max-w-xl text-center">
          Whether you're a solo entrepreneur or managing a growing team, our
          tools help you stay in control and ahead of the curve.
        </p>
      </div>

      <div
        ref={panelTwoRef}
        className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-colorOne "
      >
        <FlashPageComponent
          headingRef={panelTwoHeadingRef}
          waveRef={panelTwoWaveRef}
        />
      </div>
    </section>
  );
};

export default HomeContainer;
