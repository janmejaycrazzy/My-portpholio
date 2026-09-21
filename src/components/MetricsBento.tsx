import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Info, ChevronDown, ChevronUp, CheckCircle, ShieldAlert, Cpu } from 'lucide-react';
import { METRIC_CARDS } from '../data/infrastructureData';
import { MetricCardData } from '../types';

export const MetricsBento: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<MetricCardData | null>(null);

  // SVG Sparkline generator
  const renderSparkline = (data: number[], isPositive: boolean) => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min === 0 ? 1 : max - min;
    const width = 100;
    const height = 30;
    
    const points = data
      .map((val, idx) => {
        const x = (idx / (data.length - 1)) * width;
        const y = height - ((val - min) / range) * (height - 8) - 4;
        return `${x},${y}`;
      })
      .join(' ');

    const strokeColor = isPositive ? '#00ffb2' : '#ff3b6b';

    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="w-24 h-8 overflow-visible">
        <polyline
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />
        {/* End dot */}
        {data.length > 0 && (
          <circle
            cx={width}
            cy={height - ((data[data.length - 1] - min) / range) * (height - 8) - 4}
            r="3"
            fill={strokeColor}
            className="animate-pulse"
          />
        )}
      </svg>
    );
  };

  return (
    <section id="telemetry" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-tabular text-[#00b7c3] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 bg-[#00b7c3] rounded-full"></span>
              INFRASTRUCTURE TELEMETRY & SERVICE BENCHMARKS
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Operational Performance & SLA Rigor
            </h2>
            <p className="text-sm text-[#94a3b8] mt-1 max-w-xl">
              Real-time infrastructure telemetries tracked across ERP availability, L2 incident resolution SLAs, backup compliance, and user satisfaction.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#94a3b8] bg-[#0b112c] px-3 py-1.5 rounded-lg border border-[#00b7c3]/20">
            <span className="h-2 w-2 rounded-full bg-[#00ffb2] animate-ping-slow"></span>
            <span>ERP SLA: 99.5%+ PRODUCTION TARGET MET</span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {METRIC_CARDS.map((card) => {
            const isExpanded = selectedMetric?.id === card.id;

            return (
              <div
                key={card.id}
                onClick={() => setSelectedMetric(isExpanded ? null : card)}
                className={`group relative rounded-lg p-5 transition-all duration-300 cursor-pointer ${
                  isExpanded
                    ? 'bg-[#111b44] border border-[#00ffb2]/60 shadow-[0_0_24px_rgba(0,183,195,0.3)]'
                    : 'bg-[#0b112c]/75 border border-[#00b7c3]/20 hover:border-[#00ffb2]/40 hover:bg-[#0f1738]'
                }`}
              >
                {/* Top bar with tag & sparkline */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono-tabular px-2 py-0.5 rounded bg-[#03050d] text-[#a3c9ff] border border-[#0078d4]/30 font-medium">
                    {card.codeTag}
                  </span>
                  <div>{renderSparkline(card.sparkline, card.trendPositive)}</div>
                </div>

                {/* Primary Metric Value */}
                <div className="space-y-1 my-3">
                  <div className="text-3xl sm:text-4xl font-bold font-mono-tabular text-white tracking-tight">
                    {card.value}
                  </div>
                  <div className="text-xs font-semibold text-[#dfe1f6] tracking-wider uppercase font-sans">
                    {card.label}
                  </div>
                </div>

                {/* Trend & Benchmark */}
                <div className="pt-2 border-t border-[#00b7c3]/15 flex items-center justify-between text-xs font-mono-tabular">
                  <div className="flex items-center gap-1.5">
                    {card.trendPositive ? (
                      <TrendingUp className="w-3.5 h-3.5 text-[#00ffb2]" />
                    ) : (
                      <TrendingDown className="w-3.5 h-3.5 text-[#ff3b6b]" />
                    )}
                    <span className={card.trendPositive ? 'text-[#00ffb2] font-semibold' : 'text-[#ff3b6b]'}>
                      {card.trend}
                    </span>
                  </div>
                  <span className="text-[#94a3b8] text-[11px] truncate max-w-[140px]" title={card.benchmark}>
                    {card.benchmark}
                  </span>
                </div>

                {/* Drilldown Trigger */}
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono-tabular text-[#00b7c3] group-hover:text-[#00ffb2]">
                  <span>{isExpanded ? 'Hide Architecture Notes' : 'Inspect Architecture Specs'}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </div>

                {/* Expanded architectural detail pane */}
                {isExpanded && (
                  <div className="mt-4 pt-3 border-t border-[#00b7c3]/30 space-y-3 text-xs">
                    <p className="text-[#c0c7d4] leading-relaxed">
                      {card.drilldownDetails.description}
                    </p>

                    <div className="space-y-1.5 bg-[#03050d] p-3 rounded border border-[#00b7c3]/20 font-mono-tabular text-[11px]">
                      {card.drilldownDetails.subMetrics.map((sm, i) => (
                        <div key={i} className="flex justify-between items-center text-[#94a3b8]">
                          <span className="text-[#a3c9ff]">{sm.key}:</span>
                          <span className="text-white font-medium">{sm.val}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-[#0078d4]/10 p-2.5 rounded border border-[#0078d4]/30 text-[11px] text-[#a3c9ff]">
                      <span className="font-semibold text-white">Systemic Outcome: </span>
                      {card.drilldownDetails.architecturalImpact}
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
