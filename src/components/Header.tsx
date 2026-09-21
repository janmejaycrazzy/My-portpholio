import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Terminal, Download, Radio, RefreshCw, Cpu, Layers } from 'lucide-react';
import { TELEMETRY_REGIONS, EXECUTIVE_PROFILE } from '../data/infrastructureData';

interface HeaderProps {
  onOpenBriefing: () => void;
  onOpenChaosModal: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  chaosActive: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBriefing,
  onOpenChaosModal,
  activeSection,
  onNavigate,
  chaosActive,
}) => {
  const [utcTime, setUtcTime] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#050816]/95 backdrop-blur-xl border-b border-[#00b7c3]/20 shadow-2xl' : 'bg-[#050816]/80 backdrop-blur-md border-b border-[#00b7c3]/10'}`}>
      {/* Top NOC Telemetry Bar */}
      <div className="border-b border-[#00b7c3]/15 bg-[#03050d]/80 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-mono-tabular text-[11px]">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-[#00ffb2] font-semibold">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${chaosActive ? 'bg-[#ff3b6b]' : 'bg-[#00ffb2]'} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${chaosActive ? 'bg-[#ff3b6b]' : 'bg-[#00ffb2]'}`}></span>
              </span>
              <span>{chaosActive ? 'NOC ALERT: ACTIVE DR SIMULATION' : 'NOC STATUS: ALL HYBRID INFRASTRUCTURE OPERATIONAL'}</span>
            </div>

            <div className="hidden lg:flex items-center gap-3 text-[#94a3b8]">
              {TELEMETRY_REGIONS.map((r) => (
                <div key={r.id} className="flex items-center gap-1">
                  <span className="text-[#475569]">{r.name.split(' ')[0]}:</span>
                  <span className={chaosActive && r.id === 'dc-mumbai-onprem' ? 'text-[#ff3b6b] font-bold' : 'text-[#00ffb2]'}>
                    {chaosActive && r.id === 'dc-mumbai-onprem' ? 'FAILOVER' : `${r.latencyMs}ms`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 text-[#94a3b8]">
            <div className="flex items-center gap-1.5 text-[#00b7c3]">
              <Radio className="w-3 h-3 animate-pulse" />
              <span>SLA: 99.5%+</span>
            </div>
            <div className="hidden sm:inline-block text-[#c0c7d4] bg-[#0b112c] px-2 py-0.5 rounded border border-[#00b7c3]/20">
              {utcTime || '12:00:00 UTC'}
            </div>
            <div className="flex items-center gap-1 text-[#00ffb2]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00ffb2]" />
              <span className="hidden md:inline">ITIL & ZERO-TRUST ALIGNED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Brand / Title */}
          <div 
            onClick={() => onNavigate('overview')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#0078d4] to-[#00b7c3] p-0.5 flex items-center justify-center shadow-[0_0_16px_rgba(0,120,212,0.4)]">
              <div className="h-full w-full bg-[#070b1e] rounded-[7px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-[#00b7c3] group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-base tracking-tight font-sans">
                  {EXECUTIVE_PROFILE.name.toUpperCase()}
                </span>
                <span className="text-[10px] font-mono-tabular px-1.5 py-0.5 rounded bg-[#0078d4]/20 text-[#a3c9ff] border border-[#0078d4]/40 font-medium">
                  TEAM LEAD
                </span>
              </div>
              <p className="text-[11px] text-[#94a3b8] font-mono-tabular hidden sm:block">
                IT INFRASTRUCTURE & HYBRID CLOUD MANAGEMENT
              </p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'experience', label: 'Experience' },
              { id: 'competencies', label: 'Competencies & Skills' },
              { id: 'topology', label: 'Hybrid Topology' },
              { id: 'telemetry', label: 'SLA & Metrics' },
              { id: 'incidents', label: 'Incident Mgmt' },
              { id: 'terminal', label: 'Console' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-white bg-[#0078d4]/25 border border-[#00b7c3]/40 shadow-[0_0_12px_rgba(0,183,195,0.2)]'
                    : 'text-[#94a3b8] hover:text-white hover:bg-[#111b44]/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenChaosModal}
              title="Simulate Disaster Recovery Failover"
              className={`px-2.5 sm:px-3 py-1.5 rounded text-xs font-mono-tabular font-medium flex items-center gap-1.5 transition-all duration-200 border ${
                chaosActive
                  ? 'bg-[#ff3b6b]/20 border-[#ff3b6b] text-[#ff3b6b] shadow-[0_0_16px_rgba(255,59,107,0.4)] animate-pulse'
                  : 'bg-[#111b44] border-[#00b7c3]/30 text-[#00b7c3] hover:border-[#00ffb2] hover:text-white'
              }`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${chaosActive ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">{chaosActive ? 'DR In Progress' : 'Simulate DR Drill'}</span>
              <span className="sm:hidden">DR</span>
            </button>

            <button
              onClick={onOpenBriefing}
              className="px-3.5 py-1.5 rounded text-xs font-semibold bg-[#0078d4] text-white hover:bg-[#0060ab] transition-all duration-200 border border-white/20 shadow-[0_0_16px_rgba(0,120,212,0.45)] hover:shadow-[0_0_24px_rgba(0,183,195,0.5)] flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Contact Janmejay</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
