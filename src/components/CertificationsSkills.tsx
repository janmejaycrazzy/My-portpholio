import React from 'react';
import { Award, CheckCircle2, Shield, Compass, GraduationCap, Cpu, Layers } from 'lucide-react';
import {
  CERTIFICATIONS,
  CORE_COMPETENCIES,
  TECHNICAL_SKILLS,
  EDUCATION,
} from '../data/infrastructureData';

export const CertificationsSkills: React.FC = () => {
  return (
    <section id="competencies" className="py-12 relative bg-[#070b1e]/40 border-t border-[#00b7c3]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tabular text-[#a3c9ff] uppercase tracking-wider mb-2">
            <Award className="w-4 h-4 text-[#a3c9ff]" />
            CREDENTIALS, COMPETENCIES & TECHNICAL SKILLS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Core Competencies & Certifications
          </h2>
          <p className="text-sm text-[#94a3b8] mt-1 max-w-xl">
            Verified professional credentials, domain proficiencies, and education detailed from Janmejay Mohapatra's career resume.
          </p>
        </div>

        {/* Certifications & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-xl bg-[#0b112c]/85 border border-[#00b7c3]/25 hover:border-[#00ffb2]/50 hover:bg-[#111b44] transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono-tabular px-2 py-0.5 rounded bg-[#03050d] text-[#00b7c3] border border-[#00b7c3]/30">
                    CERTIFICATION
                  </span>
                  <span
                    className={`text-[10px] font-mono-tabular px-2 py-0.5 rounded ${
                      cert.status === 'Certified'
                        ? 'bg-[#00ffb2]/15 text-[#00ffb2] border border-[#00ffb2]/30'
                        : 'bg-[#ffaa00]/15 text-[#ffaa00] border border-[#ffaa00]/30'
                    }`}
                  >
                    {cert.status.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white font-sans leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#94a3b8] font-mono-tabular">
                  Issuing Org: {cert.issuer}
                </p>
              </div>

              <div className="pt-2 border-t border-[#00b7c3]/15 flex items-center justify-between text-[11px] font-mono-tabular text-[#a3c9ff]">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00ffb2]" />
                  Verified Credential
                </span>
              </div>
            </div>
          ))}

          {/* Education Card */}
          {EDUCATION.map((edu, eIdx) => (
            <div
              key={eIdx}
              className="p-5 rounded-xl bg-[#0b112c]/85 border border-[#0078d4]/35 hover:border-[#a3c9ff]/50 hover:bg-[#111b44] transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono-tabular px-2 py-0.5 rounded bg-[#03050d] text-[#a3c9ff] border border-[#0078d4]/30">
                    EDUCATION
                  </span>
                  <span className="text-[10px] font-mono-tabular text-[#00ffb2]">
                    COMPLETED
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white font-sans leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-xs text-[#94a3b8] font-mono-tabular">
                  Year of Completion: {edu.year}
                </p>
              </div>

              <div className="pt-2 border-t border-[#0078d4]/15 flex items-center gap-1 text-[11px] font-mono-tabular text-[#a3c9ff]">
                <GraduationCap className="w-3.5 h-3.5 text-[#a3c9ff]" />
                <span>Bachelor's Degree</span>
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies Matrix */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#00b7c3]" />
            <span>Core Competencies (Detailed by Domain)</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CORE_COMPETENCIES.map((group, gIdx) => (
              <div
                key={gIdx}
                className="p-4 rounded-lg bg-[#080d22] border border-[#00b7c3]/20 space-y-2.5"
              >
                <h4 className="text-xs font-bold font-mono-tabular text-[#4bd9e5] uppercase tracking-wider flex items-center justify-between">
                  <span>{group.name}</span>
                </h4>
                <p className="text-xs text-[#c0c7d4] leading-relaxed font-sans">
                  {group.skills}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Table / Grid */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#00ffb2]" />
            <span>Technical Skills Matrix</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECHNICAL_SKILLS.map((skillItem, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-lg bg-[#0b112c]/75 border border-[#00b7c3]/15 space-y-2"
              >
                <div className="text-xs font-bold font-mono-tabular text-[#a3c9ff] uppercase tracking-wider">
                  {skillItem.domain}
                </div>
                <div className="text-xs text-[#dfe1f6] leading-relaxed">
                  {skillItem.skills}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
