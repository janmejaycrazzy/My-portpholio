import React, { useState } from 'react';
import { Terminal, Copy, Check, Play, RefreshCw, Layers, Shield } from 'lucide-react';
import { TERMINAL_PRESETS } from '../data/infrastructureData';

export const TerminalConsole: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [customInput, setCustomInput] = useState<string>('');
  const [customHistory, setCustomHistory] = useState<{ cmd: string; output: string }[]>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const [isExecuting, setIsExecuting] = useState<boolean>(false);

  const currentPreset = TERMINAL_PRESETS[activeTab] || TERMINAL_PRESETS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentPreset.cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const cmd = customInput.trim().toLowerCase();
    setIsExecuting(true);

    setTimeout(() => {
      let output = '';
      if (cmd.includes('ad') || cmd.includes('user') || cmd.includes('azure')) {
        output = `Sync status: Healthy (Azure AD Connect DirSync).\nUsers synchronized: 480 Active Accounts.\nMFA Enforcement: 100% conditional access enabled.\nReplication delta: 0 errors detected.`;
      } else if (cmd.includes('hyper-v') || cmd.includes('vm') || cmd.includes('cluster')) {
        output = `Cluster Name: HYPERV-ERP-HA\nTotal Nodes: 4 Active Hosts\nVM State: All 28 Virtual Machines Running (High Availability Enabled).\nFailover Reserve: 25% CPU / 32GB RAM capacity unreserved.`;
      } else if (cmd.includes('dr') || cmd.includes('backup') || cmd.includes('failover')) {
        output = `Disaster Recovery Status: STANDBY_SYNCHRONIZED\nPrimary DC: Mumbai (Active)\nDR Site: Bengaluru (Hot-Standby)\nLast RTO/RPO Drill: Successful (RTO 15m target met, zero data corruption).`;
      } else if (cmd === 'help') {
        output = `Available demo commands:\n  - Get-ADUser -Filter * | Measure-Object\n  - Get-VM -Cluster HYPERV-ERP-HA\n  - Test-NetConnection -Port 443 -ComputerName erp.enterprise.internal\n  - Test-DRFailoverStatus\n  - clear (resets custom terminal logs)`;
      } else if (cmd === 'clear') {
        setCustomHistory([]);
        setCustomInput('');
        setIsExecuting(false);
        return;
      } else {
        output = `[Executed on Admin Bastion: admin.mumbai.infra]\nCommand: '${customInput.trim()}' executed with return code 0.\nStatus: Operation completed successfully without error.`;
      }

      setCustomHistory(prev => [...prev, { cmd: customInput.trim(), output }]);
      setCustomInput('');
      setIsExecuting(false);
    }, 400);
  };

  return (
    <section id="terminal" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-tabular text-[#00b7c3] uppercase tracking-wider mb-2">
              <Terminal className="w-4 h-4 text-[#00b7c3]" />
              ADMINISTRATIVE RUNBOOK & CLI CONSOLE
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              IT Infrastructure Command Diagnostics
            </h2>
            <p className="text-sm text-[#94a3b8] mt-1 max-w-xl">
              Execute diagnostic queries across Active Directory, Hyper-V clusters, network tunnels, and backup restoration health checks.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#94a3b8]">
            <span className="text-[#a3c9ff]">SESSION:</span>
            <span className="text-white bg-[#0b112c] px-2 py-0.5 rounded border border-[#00b7c3]/20">
              j.mohapatra@admin-mgmt (MFA Verified)
            </span>
          </div>
        </div>

        {/* Terminal Window Container */}
        <div className="rounded-xl bg-[#03050d] border border-[#00b7c3]/30 shadow-2xl overflow-hidden font-mono-tabular">
          {/* Terminal Window Titlebar */}
          <div className="bg-[#080d22] px-4 py-3 border-b border-[#00b7c3]/20 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 inline-block"></span>
              </div>
              <span className="text-xs text-[#94a3b8] ml-2 font-medium">
                janmejay@infra-mgmt-node:~$
              </span>
            </div>

            {/* Terminal Tab Selector */}
            <div className="flex items-center gap-1.5 overflow-x-auto">
              {TERMINAL_PRESETS.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-1 rounded text-xs transition-all whitespace-nowrap ${
                    activeTab === idx
                      ? 'bg-[#0078d4] text-white font-semibold shadow-sm'
                      : 'bg-[#0e1638] text-[#94a3b8] hover:text-white hover:bg-[#142050]'
                  }`}
                >
                  {preset.description}
                </button>
              ))}
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-xs text-[#00b7c3] hover:text-white bg-[#111b44] px-2.5 py-1 rounded border border-[#00b7c3]/30 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#00ffb2]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Cmd'}</span>
            </button>
          </div>

          {/* Terminal Screen Body */}
          <div className="p-5 text-xs text-[#dfe1f6] space-y-4 min-h-[300px] overflow-x-auto">
            {/* Active Preset Command */}
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-[#00ffb2]">
                <span className="text-[#a3c9ff]">PS C:\Admin&gt;</span>
                <span className="text-white font-bold">{currentPreset.cmd}</span>
              </div>

              {/* Command Description pill */}
              <div className="inline-block px-2 py-0.5 rounded bg-[#111b44] text-[#4bd9e5] text-[11px] border border-[#00b7c3]/30">
                Runbook Task: {currentPreset.description}
              </div>

              {/* Preset stdout */}
              <pre className="p-3.5 rounded bg-[#070b1e] border border-[#00b7c3]/15 text-[#c0c7d4] font-mono-tabular leading-relaxed whitespace-pre-wrap">
                {currentPreset.output}
              </pre>
            </div>

            {/* Custom interactive execution history */}
            {customHistory.map((item, hIdx) => (
              <div key={hIdx} className="space-y-1 pt-2 border-t border-[#00b7c3]/10">
                <div className="flex items-start gap-2 text-[#ffaa00]">
                  <span className="text-[#a3c9ff]">PS C:\Admin&gt;</span>
                  <span className="text-white">{item.cmd}</span>
                </div>
                <pre className="p-3 rounded bg-[#080d22] border border-[#00b7c3]/15 text-[#c0c7d4] font-mono-tabular leading-relaxed whitespace-pre-wrap">
                  {item.output}
                </pre>
              </div>
            ))}

            {isExecuting && (
              <div className="flex items-center gap-2 text-[#00ffb2] text-xs">
                <RefreshCw className="w-3 h-3 animate-spin" />
                <span>Querying infrastructure telemetries across hybrid nodes...</span>
              </div>
            )}
          </div>

          {/* Interactive Shell Input Prompt */}
          <form
            onSubmit={handleRunCustom}
            className="p-3 bg-[#080d22] border-t border-[#00b7c3]/20 flex items-center gap-3"
          >
            <span className="text-[#00ffb2] text-xs font-bold pl-2">PS&gt;</span>
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Type diagnostic command (e.g. 'azure ad sync', 'hyper-v cluster', 'dr status', or 'help')..."
              className="flex-1 bg-transparent text-xs text-white placeholder-[#475569] focus:outline-none font-mono-tabular"
            />
            <button
              type="submit"
              disabled={isExecuting}
              className="px-3 py-1 rounded bg-[#0078d4] text-white text-xs font-medium hover:bg-[#0060ab] transition-colors disabled:opacity-50 flex items-center gap-1.5"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Execute</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
