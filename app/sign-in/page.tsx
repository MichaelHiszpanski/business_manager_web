import Footer from "../../src/components/footer/Footer";
import NavigationBar from "../../src/components/navigation_bar/NavigationBar";
import { NextPage } from "next";
import Image from "next/image";

const SignIn: NextPage = () => {
  return (
    <div className="w-full justify-center flex flex-col items-center">
      <NavigationBar />
      <div className="w-full min-h-screen bg-colorSeven">
        <h1>Login</h1>
      </div>
      <Footer isVisible={true} />
    </div>
  );
};

export default SignIn;
