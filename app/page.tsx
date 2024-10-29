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
    <main className="flex flex-col  min-h-screen w-full items-center sm:items-start bg-white relative">
      <NavigationBar />
      <section className="w-full absolute flex-col my-[200px] ">
        <div className="relative w-full h-[300px]">
          <Image
            src={wave_up_two}
            alt="Next.js logo"
            layout="fill"
            objectFit="cover"
            onDragStart={(e) => e.preventDefault()}
            onClick={(e) => e.preventDefault()}
          />
        </div>
        <div className="relative w-full h-[300px]">
          <Image
            src={wave_down_three}
            alt="bg"
            layout="fill"
            objectFit="cover"
            onDragStart={(e) => e.preventDefault()}
            onClick={(e) => e.preventDefault()}
          />
        </div>
      </section>
      <section className="w-full mt-[300px] z-10 px-5 md:px-[100px]">
        <GridWrapper gap="4">
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
          {/* Additional ServiceCards */}
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
