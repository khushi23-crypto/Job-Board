import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Scroll from "../components/Scroll";
import FeatureSidebar from "../components/FeatureSidebar";
import FaqSection from "@/components/FaqSection";
import Footer from "../components/Footer";

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