import React, { useState } from 'react';
import { DollarSign, TrendingDown, PieChart, Sliders, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { FINOPS_DATA } from '../data/infrastructureData';

export const FinOpsGovernance: React.FC = () => {
  const [resourceEfficiency, setResourceEfficiency] = useState<number>(30); // 30% baseline downtime/cost optimization

  // Calculate dynamic projected annual savings based on optimization percentage
  const baseOperatingAnnual = 1200000;
  const savingsMultiplier = resourceEfficiency / 100;
  const dynamicSavings = Math.round(baseOperatingAnnual * savingsMultiplier);
  const totalBaseSavings = FINOPS_DATA.reduce((acc, curr) => acc + curr.annualSavings, 0);

  return (
    <section id="finops" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-tabular text-[#00ffb2] uppercase tracking-wider mb-2">
              <DollarSign className="w-4 h-4 text-[#00ffb2]" />
              IT BUDGET PLANNING, PROCUREMENT & COST EFFICIENCY
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Infrastructure Capacity Planning & Cost Governance
            </h2>
            <p className="text-sm text-[#94a3b8] mt-1 max-w-xl">
              Prudent IT vendor management, hardware procurement, software license tracking, and outage prevention driving measurable operational savings.
            </p>
          </div>

          <div className="bg-[#0b112c] px-4 py-2.5 rounded-lg border border-[#00ffb2]/30 text-right">
            <span className="text-[10px] font-mono-tabular text-[#94a3b8] uppercase block">
              ANNUAL VALUE & COST RECOVERY
            </span>
            <span className="text-2xl font-bold font-mono-tabular text-[#00ffb2]">
              ${(totalBaseSavings / 1000).toLocaleString()}k / yr
            </span>
          </div>
        </div>

        {/* 4-Category Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {FINOPS_DATA.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg bg-[#0b112c]/75 border border-[#00b7c3]/20 hover:border-[#00ffb2]/40 transition-all space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-white font-sans">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#00b7c3] font-mono-tabular mt-0.5">
                    Focus: {cat.keyInitiative}
                  </p>
                </div>
                <span className="text-xs font-mono-tabular font-bold px-2 py-0.5 rounded bg-[#00ffb2]/15 text-[#00ffb2] border border-[#00ffb2]/30 shrink-0">
                  -{cat.reductionPercentage}% OPTIMIZED
                </span>
              </div>

              {/* Cost bar comparison */}
              <div className="space-y-1 font-mono-tabular text-xs">
                <div className="flex justify-between text-[#94a3b8] text-[11px]">
                  <span>Baseline Spend: ${(cat.currentMonthly / 1000).toFixed(0)}k/mo</span>
                  <span className="text-white font-semibold">Optimized: ${(cat.optimizedMonthly / 1000).toFixed(0)}k/mo</span>
                </div>
                {/* Visual bar */}
                <div className="h-2 w-full bg-[#03050d] rounded-full overflow-hidden flex">
                  <div
                    className="h-full bg-[#0078d4]"
                    style={{ width: `${(cat.optimizedMonthly / cat.currentMonthly) * 100}%` }}
                    title="Managed Operations Cost"
                  ></div>
                  <div
                    className="h-full bg-[#00ffb2]/40"
                    style={{ width: `${100 - (cat.optimizedMonthly / cat.currentMonthly) * 100}%` }}
                    title="Cost Avoidance / Reclaimed"
                  ></div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#00b7c3]/15 flex items-center justify-between text-xs font-mono-tabular text-[#94a3b8]">
                <span>Annual Value Recovered:</span>
                <span className="text-white font-bold text-sm">
                  ${(cat.annualSavings / 1000).toLocaleString()}k
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Optimization Simulator */}
        <div className="rounded-xl bg-[#080d22] p-6 border border-[#00b7c3]/30 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#00b7c3]/15 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#00b7c3]" />
                <h3 className="text-base font-bold text-white">
                  Capacity Planning & Downtime Cost Avoidance Simulator
                </h3>
              </div>
              <p className="text-xs text-[#94a3b8]">
                Simulate downtime reduction percentage and hardware consolidation yields across ERP environments.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono-tabular text-[#94a3b8]">REDUCTION RATIO:</span>
              <span className="text-xl font-bold font-mono-tabular text-[#00ffb2] bg-[#03050d] px-3 py-1 rounded border border-[#00ffb2]/30">
                {resourceEfficiency}% DOWNTIME REDUCTION
              </span>
            </div>
          </div>

          {/* Slider bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono-tabular text-[#94a3b8]">
              <span>10% Baseline</span>
              <span>20% Intermediate</span>
              <span className="text-[#00ffb2] font-semibold">30% Achieved by Janmejay</span>
              <span>50% Stretch Target</span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              value={resourceEfficiency}
              onChange={(e) => setResourceEfficiency(Number(e.target.value))}
              className="w-full h-2 bg-[#0b112c] rounded-lg appearance-none cursor-pointer accent-[#00b7c3]"
            />
          </div>

          {/* Dynamic Calculated Outcomes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono-tabular text-xs">
            <div className="bg-[#03050d] p-3.5 rounded border border-[#00b7c3]/20">
              <span className="text-[#94a3b8] text-[10px] uppercase block">Downtime Cost Avoidance</span>
              <span className="text-white font-bold text-base mt-1 block">
                ${(dynamicSavings / 1000).toLocaleString()}k / yr
              </span>
            </div>

            <div className="bg-[#03050d] p-3.5 rounded border border-[#00b7c3]/20">
              <span className="text-[#94a3b8] text-[10px] uppercase block">Unplanned Outages Prevented</span>
              <span className="text-[#00ffb2] font-bold text-base mt-1 block">
                -40% via Change Management
              </span>
            </div>

            <div className="bg-[#03050d] p-3.5 rounded border border-[#00b7c3]/20">
              <span className="text-[#94a3b8] text-[10px] uppercase block">L2 Support SLA Adherence</span>
              <span className="text-[#4bd9e5] font-bold text-base mt-1 block">
                95% across 200+ End-Users
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
