import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, Mail, ChevronRight } from 'lucide-react';
import { ANNOUNCEMENTS, SCHOOL_INFO } from '../../data/tisData';

interface AnnouncementBarProps {
  onOpenInquiry: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenInquiry }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-950 via-[#0b192c] to-slate-950 text-white text-xs py-2 px-4 border-b border-amber-500/20 shadow-sm relative z-40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Ticker Item */}
        <div className="flex items-center gap-2 overflow-hidden text-center sm:text-left">
          <span className="flex items-center gap-1 bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider shrink-0 animate-pulse">
            <Sparkles className="w-3 h-3" /> Live Update
          </span>
          <p className="text-amber-100 font-medium truncate max-w-xl transition-all duration-500">
            {ANNOUNCEMENTS[currentIdx]}
          </p>
        </div>

        {/* Contact Quick Info & Admission Trigger */}
        <div className="hidden lg:flex items-center gap-5 text-slate-300">
          <a
            href={`tel:${SCHOOL_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{SCHOOL_INFO.phone}</span>
          </a>
          <a
            href={`mailto:${SCHOOL_INFO.admissionsEmail}`}
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>{SCHOOL_INFO.admissionsEmail}</span>
          </a>
          <button
            onClick={onOpenInquiry}
            className="flex items-center gap-1 text-amber-400 font-semibold hover:underline cursor-pointer ml-2"
          >
            <span>Apply Now</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
