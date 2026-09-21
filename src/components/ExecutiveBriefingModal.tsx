import React, { useState } from 'react';
import { X, Send, CheckCircle2, Terminal, Mail, Linkedin, Phone, MapPin } from 'lucide-react';
import { EXECUTIVE_PROFILE } from '../data/infrastructureData';

interface ExecutiveBriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveBriefingModal: React.FC<ExecutiveBriefingModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [topic, setTopic] = useState('IT Infrastructure Management');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050816]/85 backdrop-blur-xl">
      <div className="relative w-full max-w-2xl rounded-xl bg-[#080d22] border border-[#00b7c3]/40 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(0,120,212,0.3)] overflow-hidden font-sans">
        {/* Titlebar */}
        <div className="px-6 py-4 bg-[#0b112c] border-b border-[#00b7c3]/20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#00ffb2]">
            <Terminal className="w-4 h-4 text-[#00ffb2]" />
            <span className="font-bold tracking-wider">CONTACT JANMEJAY MOHAPATRA</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#94a3b8] hover:text-white hover:bg-[#111b44] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[85vh] overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#00e29d]/20 border border-[#00ffb2] mx-auto flex items-center justify-center text-[#00ffb2]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Message Dispatched Successfully
              </h3>
              <p className="text-sm text-[#c0c7d4] max-w-md mx-auto leading-relaxed">
                Thank you, {name}. Your message has been sent directly to Janmejay Mohapatra. He will get back to you via {email || 'your email'}.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-5 py-2 rounded bg-[#0078d4] text-white font-medium hover:bg-[#0060ab]"
              >
                Close Window
              </button>
            </div>
          ) : (
            <>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Connect Regarding Infrastructure & Team Leadership
                </h3>
                <p className="text-xs text-[#94a3b8] mt-1 leading-relaxed">
                  Reach out to discuss IT Infrastructure Management, Hybrid Cloud (Azure), Disaster Recovery Planning, or leadership opportunities.
                </p>
              </div>

              {/* Direct Contact Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-tabular">
                <a
                  href={`tel:${EXECUTIVE_PROFILE.phone}`}
                  className="p-3 rounded-lg bg-[#03050d] border border-[#00b7c3]/25 flex items-center gap-2.5 text-[#00ffb2] hover:border-[#00ffb2]"
                >
                  <Phone className="w-4 h-4 text-[#00ffb2]" />
                  <span>{EXECUTIVE_PROFILE.phone}</span>
                </a>
                <a
                  href={`mailto:${EXECUTIVE_PROFILE.email}`}
                  className="p-3 rounded-lg bg-[#03050d] border border-[#00b7c3]/25 flex items-center gap-2.5 text-[#a3c9ff] hover:border-[#a3c9ff]"
                >
                  <Mail className="w-4 h-4 text-[#a3c9ff]" />
                  <span>{EXECUTIVE_PROFILE.email}</span>
                </a>
                <a
                  href={EXECUTIVE_PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-[#03050d] border border-[#00b7c3]/25 flex items-center gap-2.5 text-[#00b7c3] hover:border-[#00b7c3]"
                >
                  <Linkedin className="w-4 h-4 text-[#0078d4]" />
                  <span className="truncate">{EXECUTIVE_PROFILE.linkedin}</span>
                </a>
                <div className="p-3 rounded-lg bg-[#03050d] border border-[#00b7c3]/25 flex items-center gap-2.5 text-[#c0c7d4]">
                  <MapPin className="w-4 h-4 text-[#ffaa00]" />
                  <span>{EXECUTIVE_PROFILE.location}</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono-tabular text-[#94a3b8] block">Your Name *</label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-3 py-2 rounded bg-[#03050d] border border-[#00b7c3]/30 text-white placeholder-[#475569] focus:outline-none focus:border-[#00b7c3]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono-tabular text-[#94a3b8] block">Corporate Email *</label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. p.sharma@organization.com"
                      className="w-full px-3 py-2 rounded bg-[#03050d] border border-[#00b7c3]/30 text-white placeholder-[#475569] focus:outline-none focus:border-[#00b7c3]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono-tabular text-[#94a3b8] block">Organization</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Enterprise Corp"
                      className="w-full px-3 py-2 rounded bg-[#03050d] border border-[#00b7c3]/30 text-white placeholder-[#475569] focus:outline-none focus:border-[#00b7c3]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono-tabular text-[#94a3b8] block">Inquiry Topic</label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-3 py-2 rounded bg-[#03050d] border border-[#00b7c3]/30 text-white focus:outline-none focus:border-[#00b7c3]"
                    >
                      <option>IT Infrastructure Team Leadership</option>
                      <option>Hybrid Cloud & Azure Active Directory</option>
                      <option>Disaster Recovery & Business Continuity</option>
                      <option>Incident & Problem Management</option>
                      <option>IT Service Delivery & Vendor Management</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-mono-tabular text-[#94a3b8] block">Message / Scope</label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Provide details on your infrastructure requirements or leadership discussion..."
                    className="w-full px-3 py-2 rounded bg-[#03050d] border border-[#00b7c3]/30 text-white placeholder-[#475569] focus:outline-none focus:border-[#00b7c3] focus:ring-1 focus:ring-[#00b7c3]"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-end">
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded bg-[#0078d4] text-white font-semibold hover:bg-[#0060ab] transition-all duration-200 border border-white/20 shadow-[0_0_16px_rgba(0,120,212,0.4)] flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Direct Message</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
