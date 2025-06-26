import React from "react";
import Nav from "../components/nav";
import Hero from "../components/hero";
import Scroll from "../components/scroll";
import FeatureSidebar from "../components/FeatureSidebar";
import FaqSection from "@/components/FaqSection";
import Footer from "../components/footer";

const HomePage: React.FC = () => {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Scroll />
        <FeatureSidebar />
      </main>
      <FaqSection />
      {/* Assuming you have a Footer component */}
      <Footer />
    </div>
  );
};

export default HomePage;