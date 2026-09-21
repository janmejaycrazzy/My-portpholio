import React, { useState } from 'react';
import { Layers, Server, Globe, Database, Eye, ShieldCheck, Zap, AlertTriangle, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { TOPOLOGY_NODES } from '../data/infrastructureData';
import { TopologyNode } from '../types';

interface TopologyExplorerProps {
  chaosActive: boolean;
  onToggleChaos: () => void;
}

export const TopologyExplorer: React.FC<TopologyExplorerProps> = ({ chaosActive, onToggleChaos }) => {
  const [selectedNode, setSelectedNode] = useState<TopologyNode>(TOPOLOGY_NODES[2]); // default to Primary Hyper-V & Azure Cluster
  const [activeLayer, setActiveLayer] = useState<string>('all');

  const layers = [
    { id: 'all', label: 'All Architecture Layers', icon: Layers },
    { id: 'edge', label: '1. Firewall & Perimeter (pfSense/Fortinet)', icon: Globe },
    { id: 'ingress', label: '2. Hybrid Azure VNet & VPN Gateway', icon: Globe },
    { id: 'compute', label: '3. Virtualization (Hyper-V/Azure AD)', icon: Server },
    { id: 'data', label: '4. ERP Storage & Disaster Recovery', icon: Database },
    { id: 'observability', label: '5. SolarWinds & PRTG Telemetry', icon: Eye },
  ];

  const filteredNodes = activeLayer === 'all' 
    ? TOPOLOGY_NODES 
    : TOPOLOGY_NODES.filter(n => n.layer === activeLayer);

  return (
    <section id="topology" className="py-12 relative bg-[#070b1e]/60 border-y border-[#00b7c3]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-tabular text-[#00ffb2] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-[#00ffb2]" />
              HYBRID CLOUD & ERP INFRASTRUCTURE TOPOLOGY
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Hybrid Cloud & Network Architecture Map
            </h2>
            <p className="text-sm text-[#94a3b8] mt-1 max-w-2xl">
              Enterprise architecture interconnecting Microsoft Azure, on-premises ERP data center, Active Directory, Hyper-V clusters, and perimeter firewall security.
            </p>
          </div>

          {/* Chaos Simulator Control */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleChaos}
              className={`px-4 py-2 rounded-lg text-xs font-mono-tabular font-semibold flex items-center gap-2 transition-all duration-200 border ${
                chaosActive
                  ? 'bg-[#ff3b6b]/20 border-[#ff3b6b] text-[#ff3b6b] shadow-[0_0_20px_rgba(255,59,107,0.4)] animate-pulse'
                  : 'bg-[#111b44] border-[#00b7c3]/30 text-[#00b7c3] hover:border-[#00ffb2] hover:text-white'
              }`}
            >
              {chaosActive ? (
                <>
                  <RotateCcw className="w-4 h-4 animate-spin" />
                  <span>DR DRILL IN PROGRESS: REVERT FAILOVER</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 text-[#ffaa00]" />
                  <span>SIMULATE DR AUTOMATED FAILOVER</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Chaos Active Banner */}
        {chaosActive && (
          <div className="mb-6 p-4 rounded-lg bg-[#ff3b6b]/10 border border-[#ff3b6b]/40 flex items-start gap-3 text-xs font-mono-tabular">
            <AlertTriangle className="w-5 h-5 text-[#ff3b6b] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="text-white font-bold flex items-center gap-2">
                <span>SIMULATION ACTIVE: US-EAST-1 NETWORK PARTITION</span>
                <span className="px-1.5 py-0.5 rounded bg-[#ff3b6b]/30 text-[#ffb4ab] text-[10px]">
                  DRAIN RATE: 100% COMPLETE
                </span>
              </div>
              <p className="text-[#c0c7d4]">
                Route53 ARC has withdrawn BGP routes from us-east-1. Cloudflare Anycast is automatically steering 100% of ingress queries to secondary European and Asian clusters. Aurora Global Read replica promoted without data corruption.
              </p>
            </div>
          </div>
        )}

        {/* Layer Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {layers.map((layer) => {
            const Icon = layer.icon;
            const isSelected = activeLayer === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`px-3 py-1.5 rounded text-xs font-medium font-mono-tabular flex items-center gap-2 transition-all ${
                  isSelected
                    ? 'bg-[#0078d4] text-white border border-white/20 shadow-[0_0_12px_rgba(0,120,212,0.4)]'
                    : 'bg-[#0b112c] text-[#94a3b8] hover:text-white border border-[#00b7c3]/20 hover:border-[#00b7c3]/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{layer.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Topology Canvas + Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Interactive Node Map */}
          <div className="lg:col-span-7 space-y-3">
            {filteredNodes.map((node) => {
              const isSelected = selectedNode.id === node.id;
              const isDrained = chaosActive && node.id === 'node-compute-1';

              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-200 border ${
                    isSelected
                      ? 'bg-[#111b44] border-[#00ffb2] shadow-[0_0_20px_rgba(0,255,178,0.25)]'
                      : 'bg-[#0b112c]/80 border-[#00b7c3]/20 hover:border-[#00b7c3]/50 hover:bg-[#0f1738]'
                  } ${isDrained ? 'opacity-50 border-[#ff3b6b] bg-[#2a0b14]' : ''}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded bg-[#03050d] border ${isSelected ? 'border-[#00ffb2]' : 'border-[#00b7c3]/30'}`}>
                        <Server className={`w-4 h-4 ${isSelected ? 'text-[#00ffb2]' : 'text-[#00b7c3]'}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-bold text-white font-sans">
                            {node.name}
                          </h3>
                          {isDrained ? (
                            <span className="text-[10px] font-mono-tabular px-1.5 py-0.5 rounded bg-[#ff3b6b]/20 text-[#ff3b6b] border border-[#ff3b6b]/40 font-bold">
                              DRAINED / ISOLATED
                            </span>
                          ) : (
                            <span className="text-[10px] font-mono-tabular px-1.5 py-0.5 rounded bg-[#00ffb2]/15 text-[#00ffb2] border border-[#00ffb2]/30 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00ffb2]"></span>
                              OPTIMAL
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#94a3b8] font-mono-tabular">
                          {node.type} • {node.provider}
                        </p>
                      </div>
                    </div>

                    <div className="text-right font-mono-tabular text-xs hidden sm:block">
                      <div className="text-white font-medium">{node.region}</div>
                      <div className="text-[11px] text-[#00b7c3]">{node.latency}</div>
                    </div>
                  </div>

                  {/* Micro tags */}
                  <div className="mt-3 pt-2.5 border-t border-[#00b7c3]/15 flex items-center justify-between text-[11px] font-mono-tabular text-[#94a3b8]">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {node.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-1.5 py-0.5 rounded bg-[#03050d] text-[#a3c9ff] border border-[#0078d4]/20 text-[10px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-[#c0c7d4] text-[10px]">{node.throughput}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Live Node Inspector Drawer */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-xl bg-[#0b112c] p-5 border border-[#00b7c3]/30 shadow-2xl space-y-5">
              <div className="flex items-start justify-between gap-3 border-b border-[#00b7c3]/20 pb-4">
                <div>
                  <span className="text-[10px] font-mono-tabular text-[#4bd9e5] uppercase tracking-wider">
                    INFRASTRUCTURE NODE INSPECTOR
                  </span>
                  <h3 className="text-lg font-bold text-white font-sans mt-0.5">
                    {selectedNode.name}
                  </h3>
                  <p className="text-xs font-mono-tabular text-[#94a3b8]">
                    {selectedNode.type}
                  </p>
                </div>
                <div className="p-2 rounded bg-[#0078d4]/20 border border-[#0078d4]/40 text-[#a3c9ff]">
                  <Server className="w-5 h-5" />
                </div>
              </div>

              {/* Real-time telemetry metrics */}
              <div className="grid grid-cols-2 gap-3 font-mono-tabular text-xs">
                <div className="bg-[#03050d] p-3 rounded border border-[#00b7c3]/20">
                  <span className="text-[#94a3b8] text-[10px] uppercase block">Provider & Region</span>
                  <span className="text-white font-semibold text-xs mt-1 block">
                    {selectedNode.provider} ({selectedNode.region})
                  </span>
                </div>

                <div className="bg-[#03050d] p-3 rounded border border-[#00b7c3]/20">
                  <span className="text-[#94a3b8] text-[10px] uppercase block">Measured Latency</span>
                  <span className="text-[#00ffb2] font-semibold text-xs mt-1 block">
                    {chaosActive && selectedNode.id === 'node-compute-1' ? 'DRAINED (INF)' : selectedNode.latency}
                  </span>
                </div>

                <div className="bg-[#03050d] p-3 rounded border border-[#00b7c3]/20">
                  <span className="text-[#94a3b8] text-[10px] uppercase block">Active Replicas/Nodes</span>
                  <span className="text-white font-semibold text-xs mt-1 block">
                    {selectedNode.replicaCount.toLocaleString()} Units
                  </span>
                </div>

                <div className="bg-[#03050d] p-3 rounded border border-[#00b7c3]/20">
                  <span className="text-[#94a3b8] text-[10px] uppercase block">Throughput Capacity</span>
                  <span className="text-[#4bd9e5] font-semibold text-xs mt-1 block truncate">
                    {selectedNode.throughput}
                  </span>
                </div>
              </div>

              {/* Hardware & Mesh Specifications */}
              <div className="space-y-1.5 text-xs font-mono-tabular">
                <span className="text-[#a3c9ff] text-[11px] font-semibold">Specification Profile:</span>
                <div className="bg-[#03050d] p-3 rounded border border-[#00b7c3]/20 text-[#c0c7d4] leading-relaxed text-[11px]">
                  {selectedNode.specs}
                </div>
              </div>

              {/* Redundancy & Failover Strategy */}
              <div className="space-y-1.5 text-xs font-mono-tabular">
                <span className="text-[#00ffb2] text-[11px] font-semibold">High Availability Strategy:</span>
                <div className="bg-[#00e29d]/10 p-3 rounded border border-[#00ffb2]/30 text-[#dfe1f6] text-[11px]">
                  {selectedNode.redundancy}
                </div>
              </div>

              {/* Architectural Description */}
              <div className="text-xs text-[#94a3b8] leading-relaxed border-t border-[#00b7c3]/15 pt-3">
                {selectedNode.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
