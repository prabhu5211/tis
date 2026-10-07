import React, { useState } from 'react';
import { ScrollProgress } from './components/animation/ScrollProgress';
import { CustomCursor } from './components/animation/CustomCursor';
import { ColorGradeSwitcher, type ColorGradePreset } from './components/animation/ColorGradeSwitcher';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { AcademicPrograms } from './components/sections/AcademicPrograms';
import { BoardingLife } from './components/sections/BoardingLife';
import { CampusGallery } from './components/sections/CampusGallery';
import { StatisticsCounter } from './components/sections/StatisticsCounter';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { AdmissionProcess } from './components/sections/AdmissionProcess';
import { FAQSection } from './components/sections/FAQSection';
import { InquiryModal } from './components/sections/InquiryModal';

export const App: React.FC = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);
  const [colorPreset, setColorPreset] = useState<ColorGradePreset>('crimson');

  const presetClassMap: Record<ColorGradePreset, string> = {
    crimson: 'preset-crimson-gold',
    teal: 'preset-teal-amber',
    navy: 'preset-royal-navy'
  };

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-[#070b12] text-slate-900 dark:text-slate-100 flex flex-col font-sans relative selection:bg-amber-500 selection:text-slate-950 ${presetClassMap[colorPreset]}`}>
      {/* Standout Feature D: Fixed Scroll Progress Bar */}
      <ScrollProgress />

      {/* Standout Feature A: Custom Spring Precision Cursor */}
      <CustomCursor />

      {/* Interactive Color Grading & Scheme Switcher */}
      <ColorGradeSwitcher
        activePreset={colorPreset}
        onSelectPreset={(preset) => setColorPreset(preset)}
      />

      {/* Announcement Marquee Bar */}
      <AnnouncementBar onOpenInquiry={() => setIsInquiryOpen(true)} />

      {/* Main Glassmorphic Navbar with Standout Feature C (Theme Switcher) */}
      <Navbar onOpenInquiry={() => setIsInquiryOpen(true)} />

      {/* Main Content Sections with Standout Feature B (Scroll-Triggered Reveals) */}
      <main className="flex-grow">
        <HeroSection onOpenInquiry={() => setIsInquiryOpen(true)} />
        <AboutSection />
        <AcademicPrograms onOpenInquiry={() => setIsInquiryOpen(true)} />
        <BoardingLife />
        <CampusGallery />
        <StatisticsCounter />
        <TestimonialsSection />
        <AdmissionProcess onOpenInquiry={() => setIsInquiryOpen(true)} />
        <FAQSection />
      </main>

      {/* Rich Footer Component */}
      <Footer />

      {/* Global Interactive Modals */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </div>
  );
};

export default App;
