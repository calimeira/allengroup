import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import CategoryServices from "../components/CategoryServices";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import CollageBanner from "../components/CollageBanner";
import WhatsappChat from "../components/WhatsappChat";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <CategoryServices />
      <CTASection />
   
      <Footer />
      <WhatsappChat />
    </div>
  );
}
