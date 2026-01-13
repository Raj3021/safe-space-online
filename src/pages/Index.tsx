import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { RiskQuiz } from "@/components/RiskQuiz";
import { WhatAreTheySection } from "@/components/WhatAreTheySection";
import { HowTheyOperateSection } from "@/components/HowTheyOperateSection";
import { DetectionTipsSection } from "@/components/DetectionTipsSection";
import { ProtectionGuideSection } from "@/components/ProtectionGuideSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection onStartQuiz={() => setIsQuizOpen(true)} />
        <WhatAreTheySection />
        <HowTheyOperateSection />
        <DetectionTipsSection />
        <ProtectionGuideSection />
        <ResourcesSection />
      </main>
      <Footer />
      <RiskQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
};

export default Index;
