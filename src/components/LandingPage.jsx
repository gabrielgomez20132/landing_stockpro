import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Benefits from "./Benefits";
import DemoCTA from "./DemoCTA";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <DemoCTA />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
