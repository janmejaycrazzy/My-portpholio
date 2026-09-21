import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroExecutive } from './components/HeroExecutive';
import { ProfessionalExperienceSection } from './components/ProfessionalExperienceSection';
import { CertificationsSkills } from './components/CertificationsSkills';
import { MetricsBento } from './components/MetricsBento';
import { TopologyExplorer } from './components/TopologyExplorer';
import { TerminalConsole } from './components/TerminalConsole';
import { IncidentWarRoom } from './components/IncidentWarRoom';
import { FinOpsGovernance } from './components/FinOpsGovernance';
import { Footer } from './components/Footer';
import { ExecutiveBriefingModal } from './components/ExecutiveBriefingModal';
import { ChaosSimulatorModal } from './components/ChaosSimulatorModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [briefingOpen, setBriefingOpen] = useState<boolean>(false);
  const [chaosModalOpen, setChaosModalOpen] = useState<boolean>(false);
  const [chaosActive, setChaosActive] = useState<boolean>(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleToggleChaos = () => {
    setChaosActive((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#050816] text-[#dfe1f6] bg-grid-pattern selection:bg-[#0078d4] selection:text-white relative">
      {/* Header & NOC status bar */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenBriefing={() => setBriefingOpen(true)}
        onOpenChaosModal={() => setChaosModalOpen(true)}
        chaosActive={chaosActive}
      />

      {/* Main Experience */}
      <main className="space-y-4">
        <HeroExecutive
          onNavigate={handleNavigate}
          onOpenBriefing={() => setBriefingOpen(true)}
        />

        {/* 10+ Years Professional Experience & Key Achievements */}
        <ProfessionalExperienceSection />

        {/* Core Competencies, Technical Skills Matrix & Certifications */}
        <CertificationsSkills />

        {/* Operational Metrics, SLA Uptime & Performance Bento */}
        <MetricsBento />

        {/* Hybrid Cloud Architecture & Network Topology Explorer */}
        <TopologyExplorer
          chaosActive={chaosActive}
          onToggleChaos={handleToggleChaos}
        />

        {/* Live IT Infrastructure Command Diagnostics Terminal */}
        <TerminalConsole />

        {/* Incident Management & Operational Case Studies */}
        <IncidentWarRoom />

        {/* Capacity Planning & Cost Optimization Governance */}
        <FinOpsGovernance />
      </main>

      {/* Footer */}
      <Footer onOpenBriefing={() => setBriefingOpen(true)} />

      {/* Modals */}
      <ExecutiveBriefingModal
        isOpen={briefingOpen}
        onClose={() => setBriefingOpen(false)}
      />

      <ChaosSimulatorModal
        isOpen={chaosModalOpen}
        onClose={() => setChaosModalOpen(false)}
        chaosActive={chaosActive}
        onToggleChaos={handleToggleChaos}
      />
    </div>
  );
}
