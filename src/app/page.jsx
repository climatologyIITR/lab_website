import Image from "next/image";
import Navbar from "../components/Common/Navbar"
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
    </main>
  );
}
