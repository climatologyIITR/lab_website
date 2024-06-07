import Image from "next/image";
import Navbar from "../components/Common/Navbar/index"
import Hero from "@/components/Home/Hero";
import Footer from "@/components/Common/Footer";
import Banner from "@/components/Home/Banner";
import Notice from "@/components/Home/Notice";
import Team from "@/components/Home/Team";
import ResearchProjects from "@/components/Home/ResearchProjects/ResearchProjects";
import Tutorials from "@/components/Home/Tutorials/Tutorials";
import Workshop from "@/components/Home/Workshops/Workshop";
import ConsultancyProjects from "@/components/Home/ConsultancyProjects/ConsultancyProjects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Banner />
      <Notice />
      <ResearchProjects />
      <Tutorials />
      <Workshop />
      <ConsultancyProjects />
      <Team />
      <Footer />
    </main>
  );
}
