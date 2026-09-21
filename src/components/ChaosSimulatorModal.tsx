import React from 'react';
import { X, Zap, RotateCcw, AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';

interface ChaosSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  chaosActive: boolean;
  onToggleChaos: () => void;
}

export const ChaosSimulatorModal: React.FC<ChaosSimulatorModalProps> = ({
  isOpen,
  onClose,
  chaosActive,
  onToggleChaos,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050816]/90 backdrop-blur-xl">
      <div className="relative w-full max-w-2xl rounded-xl bg-[#080d22] border border-[#00b7c3]/40 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_50px_rgba(255,59,107,0.25)] overflow-hidden font-sans">
        {/* Titlebar */}
        <div className="px-6 py-4 bg-[#0b112c] border-b border-[#00b7c3]/20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#ffaa00]">
            <Zap className="w-4 h-4 text-[#ffaa00]" />
            <span className="font-bold tracking-wider">DISASTER RECOVERY & HOT-STANDBY FAILOVER SIMULATOR</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#94a3b8] hover:text-white hover:bg-[#111b44] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">
              Automated DR Drill & Hot-Standby Failover
            </h3>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Simulate an unplanned primary data center outage (Mumbai ERP node) to observe automated failover, DNS redirect to hot-standby DR site (Bengaluru), and RTO/RPO validation.
            </p>
          </div>

          {/* Drill Status Panel */}
          <div className={`p-4 rounded-lg border font-mono-tabular text-xs space-y-3 ${
            chaosActive 
              ? 'bg-[#ff3b6b]/15 border-[#ff3b6b] text-[#ffb4ab]' 
              : 'bg-[#03050d] border-[#00b7c3]/30 text-[#c0c7d4]'
          }`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-white flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${chaosActive ? 'bg-[#ff3b6b] animate-ping' : 'bg-[#00ffb2]'}`}></span>
                CURRENT STATUS: {chaosActive ? 'FAILOVER DRILL IN EXECUTION' : 'NORMAL PRODUCTION BASELINE'}
              </span>
              <span className={`px-2 py-0.5 rounded text-[10px] ${chaosActive ? 'bg-[#ff3b6b]/30 text-white' : 'bg-[#00ffb2]/15 text-[#00ffb2]'}`}>
                {chaosActive ? 'DR HOT-STANDBY ACTIVE' : 'NOMINAL ERP UPTIME'}
              </span>
            </div>

            {/* Stepper sequence */}
            <div className="space-y-2 pt-2 border-t border-white/10 text-[11px]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-3.5 h-3.5 ${chaosActive ? 'text-[#00ffb2]' : 'text-[#475569]'}`} />
                <span className={chaosActive ? 'text-white font-medium' : 'text-[#94a3b8]'}>
                  T+00:00 - SolarWinds / PRTG monitor detects primary ERP host unreachable.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-3.5 h-3.5 ${chaosActive ? 'text-[#00ffb2]' : 'text-[#475569]'}`} />
                <span className={chaosActive ? 'text-white font-medium' : 'text-[#94a3b8]'}>
                  T+00:15 - Automated failover triggers across redundant Hyper-V hosts & Azure IPsec tunnel.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-3.5 h-3.5 ${chaosActive ? 'text-[#00ffb2]' : 'text-[#475569]'}`} />
                <span className={chaosActive ? 'text-white font-medium' : 'text-[#94a3b8]'}>
                  T+00:45 - DNS failover redirects client traffic to hot-standby DR site in Bengaluru.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-3.5 h-3.5 ${chaosActive ? 'text-[#00ffb2]' : 'text-[#475569]'}`} />
                <span className={chaosActive ? 'text-white font-medium' : 'text-[#94a3b8]'}>
                  T+01:30 - Verified backup restoration state. RTO and RPO targets fully satisfied with zero data loss.
                </span>
              </div>
            </div>
          </div>

          {/* Action Trigger Button */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-mono-tabular text-[#94a3b8]">
              Target: <span className="text-white">Primary ERP DC (Mumbai) & Azure Hybrid Hub</span>
            </span>

            <button
              onClick={() => {
                onToggleChaos();
              }}
              className={`px-5 py-2.5 rounded text-xs font-mono-tabular font-bold flex items-center gap-2 transition-all duration-200 border ${
                chaosActive
                  ? 'bg-[#0078d4] text-white border-white/20 hover:bg-[#0060ab] shadow-[0_0_20px_rgba(0,120,212,0.4)]'
                  : 'bg-[#ff3b6b] text-white border-white/20 hover:bg-[#d92252] shadow-[0_0_20px_rgba(255,59,107,0.5)]'
              }`}
            >
              {chaosActive ? (
                <>
                  <RotateCcw className="w-4 h-4" />
                  <span>RESTORE PRIMARY MUMBAI NODE</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  <span>TRIGGER DR FAILOVER DRILL</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
