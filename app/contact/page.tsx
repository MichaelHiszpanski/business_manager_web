// import Footer from "@/components/footer/Footer";
import NavigationBar from "@/components/navigation_bar/NavigationBar";
import { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <div className="w-full justify-center flex flex-col items-center">
      <NavigationBar />
      <div className="w-full min-h-screen bg-colorSeven"></div>
      {/* <Footer isVisible={true} /> */}
    </div>
  );
};

export default Contact;