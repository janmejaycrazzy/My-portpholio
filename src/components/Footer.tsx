import React from 'react';
import { ShieldCheck, Cpu, Terminal, ChevronUp, Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { EXECUTIVE_PROFILE } from '../data/infrastructureData';

interface FooterProps {
  onOpenBriefing: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBriefing }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#00b7c3]/20 bg-[#03050d] py-12 text-xs font-mono-tabular">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-bold font-sans text-base">
              <Cpu className="w-5 h-5 text-[#00b7c3]" />
              <span>{EXECUTIVE_PROFILE.name.toUpperCase()}</span>
              <span className="text-xs font-mono-tabular text-[#94a3b8] font-normal">• {EXECUTIVE_PROFILE.title.toUpperCase()}</span>
            </div>
            <p className="text-[#94a3b8] max-w-xl text-xs leading-relaxed font-sans">
              10+ years of experience managing hybrid cloud infrastructure, ERP environments, and cross-functional support teams.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#a3c9ff] pt-1">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#00ffb2]" />
                {EXECUTIVE_PROFILE.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#00b7c3]" />
                {EXECUTIVE_PROFILE.email}
              </span>
              <a
                href={EXECUTIVE_PROFILE.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white text-[#0078d4]"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>{EXECUTIVE_PROFILE.linkedin}</span>
              </a>
              <span className="flex items-center gap-1.5 text-[#94a3b8]">
                <MapPin className="w-3.5 h-3.5 text-[#ffaa00]" />
                {EXECUTIVE_PROFILE.location}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBriefing}
              className="px-4 py-2 rounded bg-[#0078d4] text-white font-semibold hover:bg-[#0060ab] transition-colors border border-white/20 shadow-[0_0_12px_rgba(0,120,212,0.4)]"
            >
              Get in Touch
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-[#0b112c] text-[#00b7c3] hover:text-white border border-[#00b7c3]/30 hover:border-[#00ffb2] transition-colors"
              title="Return to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Credentials Bar */}
        <div className="pt-6 border-t border-[#00b7c3]/15 flex flex-wrap items-center justify-between gap-4 text-[#94a3b8] text-[11px]">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1 text-[#00ffb2]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CCNA CERTIFIED (CISCO)</span>
            </span>
            <span>•</span>
            <span className="text-[#a3c9ff]">
              HARDWARE & NETWORKING (JETKING)
            </span>
            <span>•</span>
            <span className="text-[#ffaa00]">
              ITIL FOUNDATION (IN PROGRESS)
            </span>
            <span>•</span>
            <span>B.COM (2012)</span>
          </div>

          <div className="text-[#475569]">
            © {new Date().getFullYear()} Janmejay Mohapatra. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
