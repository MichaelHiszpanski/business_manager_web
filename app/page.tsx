import React from "react";
import NavigationBar from "../src/components/navigation_bar/NavigationBar";
import Image from "next/image";
import Footer from "@/components/footer2/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center sm:items-start bg-colorEight relative">
      <NavigationBar />
      <section>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </section>

      <Footer isVisible={true} />
    </main>
  );
}
