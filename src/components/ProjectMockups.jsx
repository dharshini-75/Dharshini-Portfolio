import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Database, 
  ShieldAlert, 
  Cpu, 
  Smartphone, 
  CheckCircle, 
  Layers, 
  Search, 
  AlertTriangle,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

export function BigMartMockup() {
  const [activeTab, setActiveTab] = useState('executive');

  return (
    <div className="w-full bg-[#0A0D14] rounded-xl border border-white/[0.08] p-3 sm:p-4 text-xs font-sans overflow-hidden shadow-2xl">
      {/* Power BI Mock Header */}
      <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/[0.08] gap-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-amber-500/80" />
          <span className="font-mono text-[11px] text-neutral-300 font-semibold tracking-wider uppercase">
            Power BI // BigMart Sales Dashboard
          </span>
        </div>
        
        {/* Interactive Tabs inside mockup */}
        <div className="flex items-center gap-1 bg-[#12151E] p-1 rounded-lg border border-white/[0.06]">
          <button
            onClick={() => setActiveTab('executive')}
            className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
              activeTab === 'executive' 
                ? 'bg-orange-500 text-white' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Executive Overview
          </button>
          <button
            onClick={() => setActiveTab('outlet')}
            className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
              activeTab === 'outlet' 
                ? 'bg-orange-500 text-white' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Outlet Analysis
          </button>
          <button
            onClick={() => setActiveTab('product')}
            className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
              activeTab === 'product' 
                ? 'bg-orange-500 text-white' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Product Deep Dive
          </button>
        </div>
      </div>

      {activeTab === 'executive' && (
        <div className="mt-3 space-y-3">
          {/* KPI Cards */}
          <div className="grid grid-cols-4 gap-2">
            <div className="p-2 rounded-lg bg-[#141824] border border-white/[0.05]">
              <span className="text-[10px] text-neutral-400 block font-mono">Total Sales</span>
              <span className="text-white font-mono font-bold text-xs sm:text-sm">$18.59M</span>
            </div>
            <div className="p-2 rounded-lg bg-[#141824] border border-white/[0.05]">
              <span className="text-[10px] text-neutral-400 block font-mono">Avg Ticket</span>
              <span className="text-orange-400 font-mono font-bold text-xs sm:text-sm">$2,181</span>
            </div>
            <div className="p-2 rounded-lg bg-[#141824] border border-white/[0.05]">
              <span className="text-[10px] text-neutral-400 block font-mono">Total Outlets</span>
              <span className="text-white font-mono font-bold text-xs sm:text-sm">10 Stores</span>
            </div>
            <div className="p-2 rounded-lg bg-[#141824] border border-white/[0.05]">
              <span className="text-[10px] text-neutral-400 block font-mono">Records</span>
              <span className="text-white font-mono font-bold text-xs sm:text-sm">8,523</span>
            </div>
          </div>

          {/* Bar & Category Distribution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="p-2.5 rounded-lg bg-[#121520] border border-white/[0.05]">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[10px] text-neutral-300 font-medium">Sales by Outlet Type</span>
                <span className="text-[9px] font-mono text-orange-400">MySQL Aggregated</span>
              </div>
              <div className="space-y-1.5">
                <div>
                  <div className="flex justify-between text-[10px] text-neutral-400 mb-0.5">
                    <span>Supermarket Type 1</span>
                    <span className="font-mono text-neutral-200">65.4%</span>
                  </div>
                  <div className="w-full bg-[#1C2030] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full rounded-full" style={{ width: '65.4%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] text-neutral-400 mb-0.5">
                    <span>Supermarket Type 3</span>
                    <span className="font-mono text-neutral-200">18.2%</span>
                  </div>
                  <div className="w-full bg-[#1C2030] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-amber-400 h-full rounded-full" style={{ width: '18.2%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] text-neutral-400 mb-0.5">
                    <span>Grocery Store</span>
                    <span className="font-mono text-neutral-200">10.3%</span>
                  </div>
                  <div className="w-full bg-[#1C2030] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-neutral-500 h-full rounded-full" style={{ width: '10.3%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#121520] border border-white/[0.05] flex flex-col justify-between">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-neutral-300 font-medium">Location Tier Share</span>
                <span className="text-[9px] font-mono text-neutral-500">Tier 1-3</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-center my-auto">
                <div className="p-1.5 bg-[#171B28] rounded border border-white/[0.04]">
                  <span className="text-[10px] text-neutral-400 block font-mono">Tier 3</span>
                  <span className="text-orange-400 font-bold font-mono text-xs">39.4%</span>
                </div>
                <div className="p-1.5 bg-[#171B28] rounded border border-white/[0.04]">
                  <span className="text-[10px] text-neutral-400 block font-mono">Tier 2</span>
                  <span className="text-white font-bold font-mono text-xs">32.2%</span>
                </div>
                <div className="p-1.5 bg-[#171B28] rounded border border-white/[0.04]">
                  <span className="text-[10px] text-neutral-400 block font-mono">Tier 1</span>
                  <span className="text-white font-bold font-mono text-xs">28.4%</span>
                </div>
              </div>
              <span className="text-[9px] text-neutral-400 text-center font-mono mt-1">
                Tier 3 outlets lead in gross volume revenue.
              </span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'outlet' && (
        <div className="mt-3 space-y-2">
          <div className="p-3 bg-[#121520] rounded-lg border border-white/[0.05]">
            <span className="text-[10px] text-neutral-300 font-semibold uppercase font-mono block mb-2">
              Outlet Size vs Sales Performance (SQL Cross-Tab)
            </span>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 bg-[#171B28] rounded border border-white/[0.04]">
                <span className="text-[10px] text-neutral-400 block">Medium Outlets</span>
                <span className="text-white font-mono font-bold">$7.49M</span>
                <span className="text-[9px] text-emerald-400 block mt-0.5">Top Performer</span>
              </div>
              <div className="p-2 bg-[#171B28] rounded border border-white/[0.04]">
                <span className="text-[10px] text-neutral-400 block">Small Outlets</span>
                <span className="text-white font-mono font-bold">$4.98M</span>
                <span className="text-[9px] text-neutral-400 block mt-0.5">Consistent</span>
              </div>
              <div className="p-2 bg-[#171B28] rounded border border-white/[0.04]">
                <span className="text-[10px] text-neutral-400 block">High Outlets</span>
                <span className="text-white font-mono font-bold">$2.14M</span>
                <span className="text-[9px] text-amber-400 block mt-0.5">Select Footprint</span>
              </div>
            </div>
          </div>
          <div className="p-2 bg-[#121520] rounded text-[10px] text-neutral-400 font-mono flex items-center justify-between">
            <span>Query: `Outlet_Analysis.sql`</span>
            <span className="text-orange-400">Indexed by Outlet_Identifier</span>
          </div>
        </div>
      )}

      {activeTab === 'product' && (
        <div className="mt-3 space-y-2">
          <div className="p-3 bg-[#121520] rounded-lg border border-white/[0.05]">
            <span className="text-[10px] text-neutral-300 font-semibold uppercase font-mono block mb-2">
              Visibility vs MRP Correlation Breakdown
            </span>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-neutral-300">Fruits &amp; Vegetables (Top Volume)</span>
                <span className="font-mono text-orange-400 font-semibold">$2.82M</span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-neutral-300">Snack Foods (High Turnover)</span>
                <span className="font-mono text-orange-400 font-semibold">$2.73M</span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-neutral-300">Household &amp; Frozen Foods</span>
                <span className="font-mono text-neutral-300 font-semibold">$2.06M</span>
              </div>
            </div>
          </div>
          <div className="p-2 bg-[#121520] rounded text-[10px] text-neutral-400 font-mono flex items-center justify-between">
            <span>Query: `Price_Visibility_Analysis.sql`</span>
            <span className="text-emerald-400">Visibility &gt; 0.08 Threshold Filtered</span>
          </div>
        </div>
      )}
    </div>
  );
}

export function FinGuardMockup() {
  return (
    <div className="w-full bg-[#090C12] rounded-xl border border-white/[0.08] p-3 sm:p-4 text-xs font-sans overflow-hidden shadow-2xl">
      {/* FinGuard Terminal Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
          </span>
          <span className="font-mono text-[11px] text-neutral-200 font-semibold uppercase tracking-wider">
            FinGuard AI // Controller Console
          </span>
        </div>
        <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-[10px]">
          Vectorized Engine: 0.12s
        </span>
      </div>

      <div className="mt-3 space-y-2.5">
        {/* Status pipeline */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 rounded-lg bg-[#111520] border border-white/[0.04]">
            <span className="text-[10px] text-neutral-400 block font-mono">Matched Clean</span>
            <span className="text-emerald-400 font-mono font-bold text-xs">94.8% Auto</span>
          </div>
          <div className="p-2 rounded-lg bg-[#111520] border border-white/[0.04]">
            <span className="text-[10px] text-neutral-400 block font-mono">Fee Spikes</span>
            <span className="text-amber-400 font-mono font-bold text-xs">1 Anomaly</span>
          </div>
          <div className="p-2 rounded-lg bg-[#111520] border border-white/[0.04]">
            <span className="text-[10px] text-neutral-400 block font-mono">Safety Hold</span>
            <span className="text-orange-400 font-mono font-bold text-xs">Human Review</span>
          </div>
        </div>

        {/* Gemini Investigation Audit Trail Box */}
        <div className="p-3 rounded-lg bg-[#131724] border border-orange-500/30">
          <div className="flex items-center gap-2 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span className="font-mono text-[10px] text-orange-400 font-bold uppercase tracking-wider">
              Gemini AI Grounded Audit Trail
            </span>
          </div>
          <p className="text-[11px] text-neutral-200 leading-relaxed font-sans">
            "Batch settlement mismatch detected for TXN-7819. Bank deducted ₹42.50 fee vs contract baseline of ₹25.00 (+70% spike). Cause: International card currency conversion surcharge not flagged in payment feed."
          </p>
          <div className="mt-2.5 flex flex-wrap items-center gap-2 font-mono text-[10px]">
            <span className="px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-red-400">
              Risk: Medium
            </span>
            <span className="px-2 py-0.5 rounded bg-white/[0.05] text-neutral-300">
              Action: Escalate to Gateway Rep
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
              Safety Guard Active
            </span>
          </div>
        </div>

        {/* Schema Adapter Tag */}
        <div className="p-2 rounded bg-[#0E121C] border border-white/[0.04] flex items-center justify-between font-mono text-[10px] text-neutral-400">
          <span>Adapter: Multi-currency (₹ / $ / €) parsed</span>
          <span className="text-neutral-500">Pydantic Schema Validated</span>
        </div>
      </div>
    </div>
  );
}

export function SHEmpowerMockup() {
  return (
    <div className="w-full bg-[#0A0D14] rounded-xl border border-white/[0.08] p-3 sm:p-4 text-xs font-sans overflow-hidden shadow-2xl">
      {/* Mobile App Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-pink-500/80" />
          <span className="font-mono text-[11px] text-neutral-200 font-semibold uppercase tracking-wider">
            SHEmpower // SHG Mobile Portal
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-[10px]">
            தமிழ் Enabled
          </span>
          <span className="text-[10px] text-neutral-400 font-mono">Role: Leader</span>
        </div>
      </div>

      <div className="mt-3 space-y-2.5">
        {/* Passbook Overview */}
        <div className="p-3 rounded-lg bg-gradient-to-br from-[#151926] to-[#12151E] border border-white/[0.06]">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] text-neutral-400 font-mono block">Group Savings Pool</span>
              <span className="text-lg font-mono font-bold text-white mt-0.5 block">₹1,45,000</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
              20 Members Active
            </span>
          </div>
          <div className="mt-2 pt-2 border-t border-white/[0.05] flex justify-between text-[10px] text-neutral-400 font-mono">
            <span>Monthly Passbook: Complete</span>
            <span className="text-white">Next Meeting: 25th</span>
          </div>
        </div>

        {/* Loan & Repayment Card */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-lg bg-[#111520] border border-white/[0.05]">
            <span className="text-[10px] text-neutral-400 block font-mono">Reducing Interest</span>
            <span className="text-white font-mono font-bold text-xs mt-0.5 block">1.0% / month</span>
            <span className="text-[9px] text-neutral-500 block mt-1">Formula Auto-calculated</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#111520] border border-white/[0.05]">
            <span className="text-[10px] text-neutral-400 block font-mono">UPI Verification</span>
            <span className="text-emerald-400 font-mono font-bold text-xs mt-0.5 block">Screenshot Proof</span>
            <span className="text-[9px] text-neutral-500 block mt-1">UTR Verification Log</span>
          </div>
        </div>

        {/* Security & Access */}
        <div className="p-2 rounded bg-[#0E121C] border border-white/[0.04] flex items-center justify-between font-mono text-[10px] text-neutral-400">
          <span>Auth: Mobile No + 4-Digit Secure PIN</span>
          <span className="text-orange-400">Capacitor Mobile Hybrid</span>
        </div>
      </div>
    </div>
  );
}
