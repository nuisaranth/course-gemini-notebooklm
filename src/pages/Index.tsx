import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import WhatYouLearn from "@/components/landing/WhatYouLearn";
import CourseOutline from "@/components/landing/CourseOutline";
import TargetAudience from "@/components/landing/TargetAudience";
import InstructorProfile from "@/components/landing/InstructorProfile";
import EventGallery from "@/components/landing/EventGallery";
import PricingSection from "@/components/landing/PricingSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="benefits"><WhatYouLearn /></div>
      <div id="outline"><CourseOutline /></div>
      <div id="target"><TargetAudience /></div>
      <div id="instructor"><InstructorProfile /></div>
      <EventGallery />
      <div id="pricing"><PricingSection /></div>
      <div id="faq"><FooterSection /></div>
    </div>
  );
};

export default Index;
