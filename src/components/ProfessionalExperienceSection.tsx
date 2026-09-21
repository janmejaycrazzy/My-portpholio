import React from 'react';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Building2, Shield, Users } from 'lucide-react';
import { PROFESSIONAL_EXPERIENCE, KEY_ACHIEVEMENTS } from '../data/infrastructureData';

export const ProfessionalExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-12 relative bg-[#070b1e]/50 border-t border-[#00b7c3]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tabular text-[#00ffb2] uppercase tracking-wider mb-2">
            <Briefcase className="w-4 h-4 text-[#00ffb2]" />
            10+ YEARS PROFESSIONAL EXPERIENCE
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Professional Experience & Career History
          </h2>
          <p className="text-sm text-[#94a3b8] mt-1 max-w-2xl">
            Demonstrated track record of managing hybrid cloud infrastructure, driving incident and problem management, leading teams, and optimizing IT service delivery.
          </p>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="space-y-6 mb-12">
          {PROFESSIONAL_EXPERIENCE.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#0b112c]/85 border border-[#00b7c3]/25 hover:border-[#00ffb2]/50 transition-all duration-200 space-y-4"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#00b7c3]/15 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <span>{exp.role}</span>
                  </h3>
                  <div className="text-sm font-semibold text-[#00b7c3] flex items-center gap-1.5 mt-0.5">
                    <Building2 className="w-4 h-4 text-[#00b7c3]" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03050d] border border-[#00b7c3]/30 text-xs font-mono-tabular text-[#a3c9ff] self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5 text-[#00ffb2]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet highlights from resume */}
              <div className="space-y-2.5 pt-1">
                {exp.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-sm text-[#c0c7d4] leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00ffb2] shrink-0"></span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Achievements Box */}
        <div className="rounded-xl bg-gradient-to-r from-[#0b112c] via-[#111b44] to-[#070b1e] p-6 sm:p-8 border border-[#00b7c3]/30 space-y-4">
          <div className="flex items-center gap-2 text-[#ffaa00] font-mono-tabular text-xs font-bold uppercase tracking-wider">
            <Shield className="w-4 h-4 text-[#ffaa00]" />
            <span>EXECUTIVE KEY ACHIEVEMENTS SUMMARY</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Measurable Operational Impact
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {KEY_ACHIEVEMENTS.map((achievement, aIdx) => (
              <div
                key={aIdx}
                className="p-4 rounded-lg bg-[#03050d]/70 border border-[#00b7c3]/20 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#00ffb2] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#dfe1f6] leading-relaxed">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
