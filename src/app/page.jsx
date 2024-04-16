import Image from "next/image";
import Navbar from "../components/Common/Navbar/index"
import Hero from "@/components/Home/Hero";
import Footer from "@/components/Common/Footer";
import Banner from "@/components/Home/Banner";
import Notice from "@/components/Home/Notice";
import Team from "@/components/Home/Team";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Banner/>
      <Notice/>
      <Team/>
      <Footer/>
    </main>
  );
}
