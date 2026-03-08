import HeroSection from "@/components/landing/HeroSection";
import EventDetailsBar from "@/components/landing/EventDetailsBar";
import WhatYouLearn from "@/components/landing/WhatYouLearn";
import CourseOutline from "@/components/landing/CourseOutline";
import TargetAudience from "@/components/landing/TargetAudience";
import InstructorProfile from "@/components/landing/InstructorProfile";
import PricingSection from "@/components/landing/PricingSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <EventDetailsBar />
      <WhatYouLearn />
      <CourseOutline />
      <TargetAudience />
      <InstructorProfile />
      <PricingSection />
      <FooterSection />
    </div>
  );
};

export default Index;
