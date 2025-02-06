"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  wave_down_three,
  wave_up_two,
  flutterLogoOne,
  googlePlayLogo2,
} from "@/consts/images";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <main
      className="flex pt-navPadding flex-col w-full  h-full items-center sm:items-start
     bg-white dark:bg-white "
    >
      <section
        className=" absolute top-80 flex-col  md:hidden
        md:rotate-0 w-full md:w-full overflow-hidden  2"
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
              opacity: "0.3",
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
              opacity: "0.3",
              // transform: "rotate(45deg) scale(1.5)",
            }}
          />
        </div>
      </section>
      <section className="w-full overflow-hidden">
        <div className="marquee-wrapper mx-auto mt-10 max-w-full py-4 md:py-6">
          <p className="marquee-text text-colorOne select-none text-sm md:text-base leading-normal md:leading-relaxed">
            Please note that this website and mobile application is currently
            under construction. I appreciate your patience and understanding as
            I work to bring you a complete and improved experience.
          </p>
        </div>
      </section>

      <section
        className=" absolute top-80 flex-col my-[300px]
        md:rotate-0 w-full md:w-full overflow-hidden  "
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
              opacity: "0.4",
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
              opacity: "0.4",
            }}
          />
        </div>
      </section>
      <div className="w-full flex flex-col px-5">
        <h2 className=" font-orbitron_variable md:text-5xl text-3xl  font-bold text-center w-full my-10 text-black ">
          Business Manager
        </h2>
        <div className="flex md:flex-row items-center flex-col-reverse md:px-[200px] my-12">
          <Image
            onDragStart={(e) => e.preventDefault()}
            onClick={(e) => e.preventDefault()}
            alt="flutter_logo"
            src={flutterLogoOne}
            className="md:w-1/2 w-full overflow-hidden rounded-xl shadow-xl mt-5 md:mt-0"
          />
          <div className="flex flex-col w-full">
            <h4 className="w-full text-center font-permanentMarker my-10 text-2xl text-black">
              Your All-in-One Business Management Solution
            </h4>
            <div className="line-clamp-7  md:text-black text-colorFive font-mono md:px-24">
              Welcome to Your All-in-One Business Management Solution Running a
              business is challenging, but managing it doesn’t have to be. With
              our Business Manager app, streamline your daily operations, keep
              everything organized, and save time to focus on what truly
              matters—growing your business.
            </div>
          </div>
        </div>
        <p
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="md:w-[600px] text-black line-clamp-7 bg-colorSeven bg-opacity-20 p-2 rounded-xl md:ml-[50%] font-mono"
        >
          Running a business is challenging, but managing it doesn't have to be.
          Every day brings new challenges that consume your precious time.
          Thanks to the Business Manager application, you can improve your daily
          operations, better organize and stay in order, save your valuable time
          and focus on what you consider important.
        </p>
        <h2 className="w-full text-center font-orbitron_variable md:text-4xl text-3xl my-10 text-black">
          What You’ll Love About Our App
        </h2>

        <div className="md:w-[800px] text-black line-clamp-7 bg-colorSix bg-opacity-20 p-2 md:p-5 rounded-xl md:ml-[10%] font-mono ">
          <div className="space-y-4 text-gray-800">
            <p className="text-lg font-semibold">Key Features:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-bold">To-Do List:</span> Stay on top of
                your to-do list and never miss a deadline with intuitive task
                prioritization and reminders.
              </li>
              <li>
                <span className="font-bold">
                  Professional Invoicing Made Easy:
                </span>
                Generate, send, and track invoices quickly, helping you stay on
                top of your finances.
              </li>
              <li>
                <span className="font-bold">Employee Management:</span> Add your
                employees, assign them tasks and mark them as completed.
                Visualization of progress and resources.
              </li>
              <li>
                <span className="font-bold">Work Manager:</span> Plan, schedule,
                and view upcoming tasks or events by day, week, or month for
                better organization.
              </li>
            </ul>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="md:w-[500px] text-black line-clamp-7 bg-colorOne bg-opacity-20 p-2 rounded-xl md:ml-[20%] font-mono my-5 mt-24"
        >
          Why Choose Our App? Designed specifically for small businesses, our
          app combines simplicity and power, giving you the tools to handle
          essential tasks without the hassle. It’s your one-stop shop for
          staying organized, managing tasks, and keeping clients happy—all from
          your mobile device.
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="md:w-[700px] text-black line-clamp-7 bg-colorEight bg-opacity-20 p-2 rounded-xl md:ml-[20%] font-mono my-5  mt-24"
        >
          Get Started Today Start using the Business Manager app to experience
          smoother workflows, better productivity, and a more organized business
          life. Join a community of small business owners who are transforming
          how they manage their operations.
        </div>
        <div className="flex flex-col  md:flex-row mb-[100px] items-center w-full justify-center my-10">
          <p className=" font-orbitron_variable text-lg md:text-xl text-black md:my-0 my-2">
            Download the application from
          </p>
          <Link
            href="https://play.google.com/store/games?hl=en"
            target="_blank"
          >
            <Image
              alt="google_play"
              src={googlePlayLogo2}
              className="w-[200px] h-[50px] overflow-hidden rounded-lg ml-5 cursor-pointer shadow-lg"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
