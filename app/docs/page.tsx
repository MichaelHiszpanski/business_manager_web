import Footer from "@/components/footer2/Footer";
import NavigationBar from "@/components/navigation_bar/NavigationBar";
import React, { FC } from "react";

const Docs: FC = () => {
  return (
    <main className=" min-h-screen  w-full ">
      <NavigationBar />
      <div className="w-24 h-24 bg-red-500 mb-[500px]">sfdadvvad</div>
      <Footer
        isVisible={true}
        backgroudnColor="from-colorSix to-colorSeven"
        fontColor="colorOne"
      />
    </main>
  );
};

export default Docs;
