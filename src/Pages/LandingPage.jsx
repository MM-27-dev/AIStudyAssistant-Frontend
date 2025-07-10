import React from 'react'
import Header from '../components/LandingPage/Header';
import HeroSection from '../components/LandingPage/HeroSection';
import PriceSection from '../components/LandingPage/PriceSection';
import Testimonials from '../components/LandingPage/Testimonials';
import SeamlessFollowUp from '../components/LandingPage/SeamlessFollowU';
import FAQSection from '../components/LandingPage/FAQSection';
import JoinCommunity from '../components/LandingPage/JoinCommunity';
import Footer from '../components/LandingPage/Footer';
import Features from '../components/LandingPage/Features';

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