import Navbar from "../components/Common/Navbar/index"; // Import Navbar component from the specified path
import Hero from "@/components/Home/Hero"; // Import Hero component from the specified path
import Footer from "@/components/Common/Footer"; // Import Footer component from the specified path
import Banner from "@/components/Home/Banner"; // Import Banner component from the specified path
import Notice from "@/components/Home/Notice"; // Import Notice component from the specified path
import Team from "@/components/Home/Team"; // Import Team component from the specified path
import ResearchProjects from "@/components/Home/ResearchProjects/ResearchProjects"; // Import ResearchProjects component from the specified path
import Tutorials from "@/components/Home/Tutorials/Tutorials"; // Import Tutorials component from the specified path
import Workshop from "@/components/Home/Workshops/Workshop"; // Import Workshop component from the specified path
import ConsultancyProjects from "@/components/Home/ConsultancyProjects/ConsultancyProjects"; // Import ConsultancyProjects component from the specified path

export default function Home() {
  return (
    <main>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Banner Section */}
      <Banner />

      {/* Notice Section */}
      <Notice />

      {/* Research Projects Section */}
      <ResearchProjects />

      {/* Tutorials Section */}
      <Tutorials />

      {/* Workshop Section */}
      <Workshop />

      {/* Consultancy Projects Section */}
      <ConsultancyProjects />

      {/* Team Section */}
      <Team />

      {/* Footer Component */}
      <Footer />
    </main>
  );
}
