"use client";
import React from "react";
import NavigationBar from "../src/components/navigation_bar/NavigationBar";
import Image from "next/image";
import Footer from "@/components/footer2/Footer";
import { wave_down_three, wave_up_two } from "@/consts/images";
import GridWrapper from "@/components/wrappers/grid_wrapper";
import ServiceCard from "@/components/cards/ServiceCard";

export default function Home() {
  const serviceCardSettings = {
    width: "w-[300px]",
    height: "h-[400px]",
  };
  return (
    <main
      className="flex flex-col w-full  min-h-screen items-center sm:items-start
     bg-white relative border border-blac"
    >
      <NavigationBar />
      <section
        className=" absolute top-80 flex-col  md:hidden
        md:rotate-0 w-full md:w-full overflow-hidden  left-1/2 -translate-x-1/2"
      >
        <div className="relative w-full flex  h-full">
          <Image
            src={wave_up_two}
            alt="Next.js logo"
            className="w-full h-full object-covert translate-y-[10px]"
            onDragStart={(e) => e.preventDefault()}
            onClick={(e) => e.preventDefault()}
            style={{
              filter: "blur(8px)",
              opacity: "0.8",
              // transform: "rotate(45deg) scale(1.5)",
            }}
          />
        </div>
        <div className="relative w-full flex h-full">
          <Image
            src={wave_down_three}
            alt="image"
            className="object-cover  w-full h-full "
            onDragStart={(e) => e.preventDefault()}
            onClick={(e) => e.preventDefault()}
            style={{
              filter: "blur(8px)",
              opacity: "0.8",
              // transform: "rotate(45deg) scale(1.5)",
            }}
          />
        </div>
      </section>
      <section
        className=" absolute top-80 flex-col my-[300px]
        md:rotate-0 w-full md:w-full overflow-hidden  left-1/2 -translate-x-1/2"
      >
        <div className="relative w-full flex  h-full">
          <Image
            src={wave_up_two}
            alt="Next.js logo"
            className="w-full h-full object-covert translate-y-[10px]"
            onDragStart={(e) => e.preventDefault()}
            onClick={(e) => e.preventDefault()}
            style={{
              filter: "blur(8px)",
              opacity: "0.8",
              // transform: "rotate(45deg) scale(1.5)",
            }}
          />
        </div>
        <div className="relative w-full flex h-full">
          <Image
            src={wave_down_three}
            alt="image"
            className="object-cover  w-full h-full "
            onDragStart={(e) => e.preventDefault()}
            onClick={(e) => e.preventDefault()}
            style={{
              filter: "blur(8px)",
              opacity: "0.8",
            }}
          />
        </div>
      </section>
      <div className="w-full flex flex-col">
        <h2 className=" font-orbitron_variable md:text-5xl text-3xl z-20 font-bold text-center w-full">
          Business Manager
        </h2>
        <p className="md:w-[400px] text-black line-clamp-3">
          jhsfvjhvsafjhvasfjhvscajhvsajhsvafdjhvdsfajhsadvjhvajhsvjhsavcjhvcsjhvasjhv
        </p>
      </div>
      <section className="w-full mt-[100px] md:mt-[300px] z-10 px-5 md:px-[100px] ">
        <div className="w-full flex flec-col justify-center">
          <h2 className=" font-orbitron_variable md:text-5xl text-3xl z-20 font-bold my-12">
            Services
          </h2>
        </div>
        <GridWrapper columnGap="4">
          <ServiceCard
            width={serviceCardSettings.width}
            height={serviceCardSettings.height}
            title="Service 1"
            content="Content 1"
          />
          <ServiceCard
            width={serviceCardSettings.width}
            height={serviceCardSettings.height}
            title="Service 2"
            content="Content 2"
          />
          <ServiceCard
            width={serviceCardSettings.width}
            height={serviceCardSettings.height}
            title="Service 3"
            content="Content 3"
          />
          <ServiceCard
            width={serviceCardSettings.width}
            height={serviceCardSettings.height}
            title="Service 1"
            content="Content 1"
          />
          <ServiceCard
            width={serviceCardSettings.width}
            height={serviceCardSettings.height}
            title="Service 2"
            content="Content 2"
          />
          <ServiceCard
            width={serviceCardSettings.width}
            height={serviceCardSettings.height}
            title="Service 3"
            content="Content 3"
          />
        </GridWrapper>
      </section>
      <Footer
        isVisible={true}
        backgroudnColor="from-colorSix to-colorSeven"
        fontColor="colorOne"
      />
    </main>
  );
}
