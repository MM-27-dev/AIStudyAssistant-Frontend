import React from 'react'
import FAQSection from "./FAQSection";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import JoinCommunity from "./JoinCommunity";
import PriceSection from "./PriceSection";
import SeamlessFollowUp from "./SeamlessFollowU";
import Testimonials from "./Testimonials";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <Header />
      <HeroSection />
      <Features />
      <PriceSection />
      <Testimonials />
      <SeamlessFollowUp />
      <FAQSection />
      <JoinCommunity />
      <Footer />
    </div>
  );
}

export default LandingPage