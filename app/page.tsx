"use client";
import React, { useEffect } from "react";
import NavigationBar from "../src/components/navigation_bar/NavigationBar";
import Image from "next/image";
import Footer from "@/components/footer2/Footer";
import { wave_down_three, wave_up_two } from "@/consts/images";
import GridWrapper from "@/components/wrappers/grid_wrapper";
import ServiceCard from "@/components/cards/ServiceCard";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  const serviceCardSettings = {
    width: "w-[300px]",
    height: "h-[400px]",
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

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
            className="w-full h-full object-covert translate-y-[5px]"
            onDragStart={(e) => e.preventDefault()}
            onClick={(e) => e.preventDefault()}
            style={{
              filter: "blur(8px)",
              opacity: "0.8",
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
        <p
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="md:w-[400px] text-black line-clamp-7 bg-colorThree bg-opacity-20 p-2 rounded-xl"
        >
          Running a business is challenging, but managing it doesn't have to be.
          Every day brings new challenges that consume your precious time.
          Thanks to the Business Manager application, you can improve your daily
          operations, better organize and stay in order, save your valuable time
          and focus on what you consider important.
        </p>
        <h2>What You’ll Love About Our App</h2>
        <div>
          Here's some text content for the front page of your Business Manager
          app website: Welcome to Your All-in-One Business Management Solution
          Running a business is challenging, but managing it doesn’t have to be.
          With our Business Manager app, streamline your daily operations, keep
          everything organized, and save time to focus on what truly
          matters—growing your business. What You’ll Love About Our App
        </div>
        <div className="text-red-500">
          Effortless Task Management: Stay on top of your to-do list and never
          miss a deadline with intuitive task prioritization and reminders.
          Professional Invoicing Made Easy: Generate, send, and track invoices
          quickly, helping you stay on top of your finances. Seamless Contact
          Management: Keep all client and team information in one secure place,
          making communication simple and efficient. HR Essentials: Manage
          employee information, track roles, and streamline hiring to support
          your growing team. Integrated Calendar: Plan, schedule, and view
          upcoming tasks or events by day, week, or month for better
          organization.
        </div>
        <div className=" text-green-400">
          Why Choose Our App? Designed specifically for small businesses, our
          app combines simplicity and power, giving you the tools to handle
          essential tasks without the hassle. It’s your one-stop shop for
          staying organized, managing tasks, and keeping clients happy—all from
          your mobile device.
        </div>
        <div>
          Get Started Today Start using the Business Manager app to experience
          smoother workflows, better productivity, and a more organized business
          life. Join a community of small business owners who are transforming
          how they manage their operations.
        </div>
      </div>
      {/* <section className="w-full mt-[100px] md:mt-[300px] z-10 px-5 md:px-[100px] ">
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
      </section> */}
      <Footer
        isVisible={true}
        backgroudnColor="from-colorSix to-colorSeven"
        fontColor="colorOne"
      />
    </main>
  );
}
