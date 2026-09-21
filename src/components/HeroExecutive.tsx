import React, { useState, useRef, useEffect } from 'react';
import {
  Shield,
  Award,
  Terminal,
  Server,
  CheckCircle2,
  ChevronRight,
  Phone,
  Mail,
  Linkedin,
  MapPin,
  Maximize2,
  Upload,
  RotateCcw,
  X,
} from 'lucide-react';
import { EXECUTIVE_PROFILE } from '../data/infrastructureData';

interface HeroExecutiveProps {
  onNavigate: (sectionId: string) => void;
  onOpenBriefing: () => void;
}

export const HeroExecutive: React.FC<HeroExecutiveProps> = ({ onNavigate, onOpenBriefing }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    return localStorage.getItem('janmejay_custom_photo') || EXECUTIVE_PROFILE.headshotUrl;
  });
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('janmejay_custom_photo');
    if (saved) {
      setPhotoUrl(saved);
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoUrl(result);
          localStorage.setItem('janmejay_custom_photo', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    localStorage.removeItem('janmejay_custom_photo');
    setPhotoUrl(EXECUTIVE_PROFILE.headshotUrl);
  };

  return (
    <section className="relative pt-6 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_rgba(0,120,212,0.22)_0%,_rgba(0,183,195,0.08)_40%,_transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Executive Mission & Authority */}
          <div className="lg:col-span-8 space-y-6">
            {/* Mission badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0b112c]/80 border border-[#00b7c3]/30 text-xs font-mono-tabular text-[#4bd9e5]">
              <span className="h-2 w-2 rounded-full bg-[#00ffb2] animate-pulse"></span>
              <span className="font-semibold tracking-wider">IT INFRASTRUCTURE LEAD</span>
              <span className="text-[#94a3b8]">•</span>
              <span className="text-[#dfe1f6]">10+ YEARS EXPERIENCE</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                {EXECUTIVE_PROFILE.name}
              </h1>
              <div className="text-lg sm:text-xl font-semibold text-[#00b7c3] font-mono-tabular">
                {EXECUTIVE_PROFILE.title}
              </div>
              <p className="text-sm sm:text-base text-[#c0c7d4] max-w-3xl leading-relaxed">
                {EXECUTIVE_PROFILE.summary}
              </p>
            </div>

            {/* Direct Contact Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono-tabular text-[#a3c9ff] bg-[#0b112c]/90 p-3 rounded-lg border border-[#00b7c3]/30">
              <a
                href={`tel:${EXECUTIVE_PROFILE.phone}`}
                className="flex items-center gap-1.5 hover:text-[#00ffb2] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#00ffb2]" />
                <span>{EXECUTIVE_PROFILE.phone}</span>
              </a>
              <span className="text-[#475569] hidden sm:inline">•</span>
              <a
                href={`mailto:${EXECUTIVE_PROFILE.email}`}
                className="flex items-center gap-1.5 hover:text-[#00ffb2] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#00b7c3]" />
                <span>{EXECUTIVE_PROFILE.email}</span>
              </a>
              <span className="text-[#475569] hidden sm:inline">•</span>
              <a
                href={EXECUTIVE_PROFILE.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#00ffb2] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0078d4]" />
                <span className="truncate max-w-[200px]">{EXECUTIVE_PROFILE.linkedin}</span>
              </a>
              <span className="text-[#475569] hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-[#94a3b8]">
                <MapPin className="w-3.5 h-3.5 text-[#ffaa00]" />
                <span>{EXECUTIVE_PROFILE.location}</span>
              </span>
            </div>

            {/* Credential pills */}
            <div className="flex flex-wrap gap-2 text-xs font-mono-tabular">
              <span className="px-2.5 py-1 rounded bg-[#0b112c] border border-[#0078d4]/40 text-[#a3c9ff] flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#0078d4]" />
                CCNA Cisco Certified
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0b112c] border border-[#00b7c3]/40 text-[#4bd9e5] flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-[#00b7c3]" />
                Microsoft Azure & Azure AD
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0b112c] border border-[#00ffb2]/40 text-[#00ffb2] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ffb2]" />
                ITIL Foundation (In Progress)
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0b112c] border border-[#ffaa00]/40 text-[#ffaa00] flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#ffaa00]" />
                Hardware & Networking (Jetking)
              </span>
            </div>

            {/* Strategic KPI Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {EXECUTIVE_PROFILE.keyStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#0b112c]/75 border border-[#00b7c3]/20 hover:border-[#00ffb2]/40 transition-all duration-200"
                >
                  <div className="text-[11px] font-mono-tabular text-[#94a3b8] uppercase tracking-wider mb-1">
                    {stat.label}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono-tabular text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-[#00ffb2] font-mono-tabular mt-1 flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00ffb2]"></span>
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('experience')}
                className="px-5 py-2.5 rounded text-sm font-semibold bg-[#0078d4] text-white hover:bg-[#0060ab] transition-all duration-200 border border-white/20 shadow-[0_0_20px_rgba(0,120,212,0.4)] flex items-center gap-2 group"
              >
                <span>Professional Experience</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('competencies')}
                className="px-4 py-2.5 rounded text-sm font-mono-tabular font-medium bg-[#111b44] text-[#00b7c3] hover:text-white hover:border-[#00b7c3] transition-all duration-200 border border-[#00b7c3]/30 flex items-center gap-2"
              >
                <Server className="w-4 h-4 text-[#00ffb2]" />
                <span>Core Competencies</span>
              </button>

              <button
                onClick={onOpenBriefing}
                className="px-4 py-2.5 rounded text-sm font-medium text-[#94a3b8] hover:text-white hover:bg-[#111b44]/40 transition-colors flex items-center gap-1.5"
              >
                <Terminal className="w-4 h-4 text-[#a3c9ff]" />
                <span>Contact Janmejay</span>
              </button>
            </div>
          </div>

          {/* Right Column: Executive Card & Original Photo */}
          <div className="lg:col-span-4">
            <div className="relative rounded-xl bg-gradient-to-b from-[#111b44] to-[#070b1e] p-1 border border-[#00b7c3]/30 shadow-2xl">
              {/* Top verification header */}
              <div className="p-4 bg-[#0b112c]/90 rounded-t-lg border-b border-[#00b7c3]/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#00ffb2] animate-pulse"></div>
                  <span className="text-xs font-mono-tabular text-white font-semibold">
                    IT INFRASTRUCTURE LEAD
                  </span>
                </div>
                <span className="text-[10px] font-mono-tabular px-2 py-0.5 rounded bg-[#00e29d]/15 text-[#00ffb2] border border-[#00ffb2]/30">
                  VERIFIED PROFILE
                </span>
              </div>

              {/* Photo & Identity - Displayed cleanly as-is without dark gradient overlays or artificial ID badges */}
              <div className="p-5 space-y-4">
                <div className="relative mx-auto w-48 sm:w-56 rounded-xl overflow-hidden border-2 border-[#00b7c3]/40 shadow-xl bg-[#03050d] group">
                  <img
                    src={photoUrl}
                    alt={EXECUTIVE_PROFILE.name}
                    className="w-full h-auto object-contain block transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover toolbar for viewing full size and uploading */}
                  <div className="absolute top-2 right-2 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity bg-[#03050d]/85 backdrop-blur-md p-1 rounded-lg border border-[#00b7c3]/30">
                    <button
                      onClick={() => setIsLightboxOpen(true)}
                      title="View full size photo"
                      className="p-1 rounded text-[#00b7c3] hover:text-white hover:bg-[#111b44] transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      title="Upload original photo file"
                      className="p-1 rounded text-[#00ffb2] hover:text-white hover:bg-[#111b44] transition-colors"
                    >
                      <Upload className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Hidden File Input for Custom Upload */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />

                {/* Photo controls row */}
                <div className="flex items-center justify-center gap-3 text-[11px] font-mono-tabular">
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="text-[#00b7c3] hover:text-white transition-colors flex items-center gap-1"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span>View Full Photo</span>
                  </button>
                  <span className="text-[#475569]">•</span>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-[#a3c9ff] hover:text-white transition-colors flex items-center gap-1"
                  >
                    <Upload className="w-3 h-3 text-[#00ffb2]" />
                    <span>Update Photo</span>
                  </button>
                  {photoUrl !== EXECUTIVE_PROFILE.headshotUrl && (
                    <>
                      <span className="text-[#475569]">•</span>
                      <button
                        onClick={handleResetPhoto}
                        className="text-[#ffaa00] hover:text-white transition-colors flex items-center gap-1"
                        title="Reset to default photo"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset</span>
                      </button>
                    </>
                  )}
                </div>

                <div className="text-center space-y-1">
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    {EXECUTIVE_PROFILE.name}
                  </h2>
                  <p className="text-xs text-[#00b7c3] font-medium font-sans">
                    {EXECUTIVE_PROFILE.title}
                  </p>
                  <p className="text-[11px] text-[#94a3b8] font-mono-tabular">
                    JDAS Cloud-based ERP • Mumbai, India
                  </p>
                </div>

                {/* Micro Terminal status inside card */}
                <div className="rounded-lg bg-[#03050d] p-3 border border-[#00b7c3]/15 font-mono-tabular text-[11px] space-y-1.5">
                  <div className="flex justify-between text-[#94a3b8]">
                    <span>Managed Uptime:</span>
                    <span className="text-[#00ffb2]">99.5%+ ERP SLA</span>
                  </div>
                  <div className="flex justify-between text-[#94a3b8]">
                    <span>Downtime Reduction:</span>
                    <span className="text-[#00ffb2]">-30% Proactive</span>
                  </div>
                  <div className="flex justify-between text-[#94a3b8]">
                    <span>Unplanned Outages:</span>
                    <span className="text-[#4bd9e5]">-40% Change Mgmt</span>
                  </div>
                  <div className="flex justify-between text-[#94a3b8]">
                    <span>RPO / RTO Target:</span>
                    <span className="text-[#00ffb2]">Maintained via DR</span>
                  </div>
                </div>

                {/* Audit & Certs Bar */}
                <div className="pt-1 flex items-center justify-center gap-2 text-[10px] font-mono-tabular text-[#c0c7d4]">
                  <Award className="w-3.5 h-3.5 text-[#ffaa00]" />
                  <span>CCNA • Jetking Hardware & Networking • ITIL (In Prog)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Resolution Photo Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-xl max-h-[90vh] bg-[#0b112c] p-2 rounded-xl border border-[#00b7c3]/40 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 border-b border-[#00b7c3]/20 mb-2">
              <span className="text-xs font-mono-tabular text-white font-bold">
                {EXECUTIVE_PROFILE.name} - Official Photograph
              </span>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-1 rounded text-[#94a3b8] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center justify-center bg-black/40 rounded-lg p-2 max-h-[75vh] overflow-hidden">
              <img
                src={photoUrl}
                alt={EXECUTIVE_PROFILE.name}
                className="max-h-[70vh] w-auto object-contain rounded"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-3 flex items-center justify-between text-xs font-mono-tabular text-[#94a3b8]">
              <span>Unmodified original image aspect ratio</span>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="text-[#00ffb2] hover:underline flex items-center gap-1"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload New File</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
