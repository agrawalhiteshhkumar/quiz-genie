import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Sparkles } from 'lucide-react';

export const AcademicEndorsementSeal: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  return (
    <div className={`bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden ${compact ? 'p-4' : 'p-5 sm:p-6'}`}>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
        
        {/* Academic Leadership Details */}
        <div className="flex items-start sm:items-center gap-4">
          <img
            src="/brightpath-logo.png"
            alt="Bright Path Quiz Genie Logo"
            className="w-12 h-12 rounded-2xl object-contain border border-slate-200/90 shadow-xs bg-white shrink-0 p-1"
          />

          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Quiz Genie Assessment Engine</span>
            </div>
            <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight mt-0.5">
              Dr. Hiteshkumar S. Agrawal
            </h4>
            <div className="text-xs text-slate-600 font-semibold mt-0.5">
              Principal, D. P. Kharde Navjeevan College of Pharmacy
            </div>
          </div>
        </div>

        {/* Digital Verification Seal Container */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3 sm:px-4 sm:py-2.5 flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>VERIFIED ACADEMIC OS</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <div className="text-slate-600 font-medium">
            Faculty AI Genie &amp; Office AI Ecosystem
          </div>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <div className="inline-flex items-center gap-1 font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
            <CheckCircle2 className="w-3 h-3 text-blue-600" />
            <span>Approved for PCI Exit Exam Prep</span>
          </div>
        </div>

      </div>

      {/* Statutory Footnote */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-500">
        <span>
          Independent educational preparation platform aligned with Pharmacy Council of India (PCI) competencies.
        </span>
        <span className="font-mono text-slate-400 font-medium">
          D. P. Kharde Navjeevan College of Pharmacy · Academic Initiative
        </span>
      </div>
    </div>
  );
};
