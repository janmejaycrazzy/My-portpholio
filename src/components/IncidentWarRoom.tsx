import React, { useState } from 'react';
import { AlertCircle, Clock, ShieldAlert, CheckCircle2, ChevronRight, ChevronDown, Filter, Zap, ArrowUpRight } from 'lucide-react';
import { INCIDENT_CASE_STUDIES } from '../data/infrastructureData';
import { IncidentCaseStudy } from '../types';

export const IncidentWarRoom: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string>('inc-01');

  const categories = ['All', 'Reliability', 'Architecture', 'Security'];

  const filteredIncidents = selectedCategory === 'All'
    ? INCIDENT_CASE_STUDIES
    : INCIDENT_CASE_STUDIES.filter(inc => inc.category === selectedCategory);

  const getSeverityBadge = (severity: IncidentCaseStudy['severity']) => {
    switch (severity) {
      case 'P0':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono-tabular bg-[#ff3b6b]/20 text-[#ff3b6b] border border-[#ff3b6b]/40 font-bold">
            P0 MISSION CRITICAL RESOLVED
          </span>
        );
      case 'P1':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono-tabular bg-[#ffaa00]/20 text-[#ffaa00] border border-[#ffaa00]/40 font-bold">
            P1 HIGH PRIORITY INITIATIVE
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono-tabular bg-[#00b7c3]/20 text-[#00b7c3] border border-[#00b7c3]/40 font-bold">
            ENTERPRISE DR & BCP GOVERNANCE
          </span>
        );
    }
  };

  return (
    <section id="incidents" className="py-12 relative bg-[#070b1e]/50 border-t border-[#00b7c3]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-tabular text-[#ffaa00] uppercase tracking-wider mb-2">
              <AlertCircle className="w-4 h-4 text-[#ffaa00]" />
              ITIL INCIDENT, PROBLEM & CHANGE MANAGEMENT
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Operational Case Studies & Problem Management
            </h2>
            <p className="text-sm text-[#94a3b8] mt-1 max-w-xl">
              Authentic post-incident forensic dissections demonstrating proactive monitoring, ITIL change management, and disaster recovery execution.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-1.5 bg-[#0b112c] p-1 rounded-lg border border-[#00b7c3]/20 text-xs font-mono-tabular">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#0078d4] text-white font-semibold'
                    : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-4">
          {filteredIncidents.map((incident) => {
            const isExpanded = expandedId === incident.id;

            return (
              <div
                key={incident.id}
                className={`rounded-xl transition-all duration-300 border ${
                  isExpanded
                    ? 'bg-[#0b112c] border-[#00ffb2]/50 shadow-[0_0_24px_rgba(0,183,195,0.25)]'
                    : 'bg-[#080d22]/80 border-[#00b7c3]/20 hover:border-[#00b7c3]/40'
                }`}
              >
                {/* Header click row */}
                <div
                  onClick={() => setExpandedId(isExpanded ? '' : incident.id)}
                  className="p-5 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      {getSeverityBadge(incident.severity)}
                      <span className="text-xs font-mono-tabular text-[#94a3b8]">
                        {incident.date}
                      </span>
                      <span className="text-[#475569]">•</span>
                      <span className="text-xs font-mono-tabular text-[#00ffb2]">
                        Impact: {incident.mttr}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                      {incident.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-mono-tabular text-[#00b7c3] hidden md:inline">
                      {isExpanded ? 'Collapse Operational Detail' : 'View Full Case Study'}
                    </span>
                    <div className={`p-1.5 rounded bg-[#111b44] text-[#00b7c3] border border-[#00b7c3]/30 transition-transform ${isExpanded ? 'rotate-90' : ''}`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="p-5 pt-0 border-t border-[#00b7c3]/15 space-y-5 text-xs font-sans">
                    <p className="text-sm text-[#dfe1f6] leading-relaxed pt-3">
                      {incident.summary}
                    </p>

                    {/* Timeline & Diagnostics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Root Cause & Detection */}
                      <div className="p-4 rounded-lg bg-[#03050d] border border-[#ffaa00]/30 space-y-2">
                        <div className="text-[11px] font-mono-tabular text-[#ffaa00] font-bold uppercase flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>Identified Challenge / Root Cause</span>
                        </div>
                        <p className="text-[#c0c7d4] leading-relaxed">
                          {incident.rootCause}
                        </p>
                        <div className="pt-2 text-[11px] font-mono-tabular text-[#94a3b8] border-t border-white/10">
                          Detection & Monitoring: {incident.detectionTime}
                        </div>
                      </div>

                      {/* Business Impact Prevented */}
                      <div className="p-4 rounded-lg bg-[#03050d] border border-[#00ffb2]/30 space-y-2">
                        <div className="text-[11px] font-mono-tabular text-[#00ffb2] font-bold uppercase flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Business Impact & Value Realized</span>
                        </div>
                        <p className="text-[#c0c7d4] leading-relaxed">
                          {incident.impactPrevented}
                        </p>
                        <div className="pt-2 text-[11px] font-mono-tabular text-[#94a3b8] border-t border-white/10">
                          Execution Scope: {incident.duration}
                        </div>
                      </div>
                    </div>

                    {/* Actions Taken & Preventative Measures */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                      <div className="space-y-2">
                        <h4 className="font-mono-tabular text-[11px] text-[#4bd9e5] uppercase font-bold tracking-wider">
                          Key Solutions Implemented:
                        </h4>
                        <div className="space-y-2">
                          {incident.automatedActions.map((action, aIdx) => (
                            <div key={aIdx} className="flex items-start gap-2 text-[#c0c7d4]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#00b7c3] shrink-0 mt-1.5"></span>
                              <span>{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-mono-tabular text-[11px] text-[#00ffb2] uppercase font-bold tracking-wider">
                          Permanent Controls & Preventative Architecture:
                        </h4>
                        <div className="space-y-2">
                          {incident.preventativeMeasures.map((measure, mIdx) => (
                            <div key={mIdx} className="flex items-start gap-2 text-[#c0c7d4]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#00ffb2] shrink-0 mt-1.5"></span>
                              <span>{measure}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
