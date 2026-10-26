import { useState } from 'react';
import { Calculator, TrendingUp, Sparkles, Check, ArrowRight } from 'lucide-react';
import { calculateMonthlyIncome, formatINR } from '../utils/calculator';

interface EarningsCalculatorProps {
  onOpenCheckout: () => void;
}

export function EarningsCalculator({ onOpenCheckout }: EarningsCalculatorProps) {
  const [sessionsPerWeek, setSessionsPerWeek] = useState(5);
  const [pricePerSession, setPricePerSession] = useState(2500);

  const monthlyIncome = calculateMonthlyIncome(sessionsPerWeek, pricePerSession);
  const weeklyIncome = sessionsPerWeek * pricePerSession;
  const regularSalary = 15000;
  const extraMultiple = (monthlyIncome / regularSalary).toFixed(1);

  return (
    <section className="py-14 bg-slate-950 border-y border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Income Simulator</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            अपनी संभावित कमाई खुद कैलकुलेट करो
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            हफ्ते में सिर्फ कुछ सेशन्स करके तुम कितना कमा सकते हो? नीचे स्लाइडर्स हिलाकर देखो:
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-emerald-950/20">
          {/* Quick Presets */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 pb-6 border-b border-slate-800">
            <span className="text-xs text-slate-400 font-semibold mr-1">Quick Presets:</span>
            <button
              onClick={() => { setSessionsPerWeek(3); setPricePerSession(2500); }}
              className={`text-xs px-3 py-1 rounded-full border transition-all cursor-pointer ${
                sessionsPerWeek === 3 && pricePerSession === 2500
                  ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600'
              }`}
            >
              Weekend Only (3/week)
            </button>
            <button
              onClick={() => { setSessionsPerWeek(6); setPricePerSession(2500); }}
              className={`text-xs px-3 py-1 rounded-full border transition-all cursor-pointer ${
                sessionsPerWeek === 6 && pricePerSession === 2500
                  ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600'
              }`}
            >
              Part-Time (6/week)
            </button>
            <button
              onClick={() => { setSessionsPerWeek(12); setPricePerSession(3000); }}
              className={`text-xs px-3 py-1 rounded-full border transition-all cursor-pointer ${
                sessionsPerWeek === 12 && pricePerSession === 3000
                  ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600'
              }`}
            >
              Full-Time Pro (12/week)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Sliders Column */}
            <div className="space-y-6">
              {/* Slider 1: Sessions */}
              <div>
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <span className="text-slate-300">Sessions Per Week:</span>
                  <span className="text-emerald-400 font-mono text-base bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                    {sessionsPerWeek} Sessions ({sessionsPerWeek * 1} hrs total)
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={sessionsPerWeek}
                  onChange={(e) => setSessionsPerWeek(Number(e.target.value))}
                  className="w-full accent-emerald-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>1 Session / wk</span>
                  <span>10 Sessions / wk</span>
                  <span>20 Sessions / wk</span>
                </div>
              </div>

              {/* Slider 2: Rate */}
              <div>
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <span className="text-slate-300">Charge Per Session:</span>
                  <span className="text-amber-400 font-mono text-base bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                    {formatINR(pricePerSession)} / Session
                  </span>
                </div>
                <input
                  type="range"
                  min="1500"
                  max="5000"
                  step="250"
                  value={pricePerSession}
                  onChange={(e) => setPricePerSession(Number(e.target.value))}
                  className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>₹1,500 (Basic)</span>
                  <span>₹3,000 (Standard)</span>
                  <span>₹5,000 (VIP / Luxury)</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="text-xs text-slate-400 space-y-1.5 pt-2">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>दिन में सिर्फ 1-2 घंटे काम, बाकी पूरा दिन आपकी मर्जी</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>पेमेंट हर सेशन के बाद सीधे 100% Cash / UPI आपके हाथ में</span>
                </div>
              </div>
            </div>

            {/* Income Display Column */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 text-center flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Projected Monthly Earnings
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 my-2 font-mono">
                  {formatINR(monthlyIncome)}
                </div>
                <span className="text-xs text-slate-400">
                  (~{formatINR(weeklyIncome)} / week)
                </span>
              </div>

              <div className="my-4 py-3 border-y border-slate-800/80 bg-slate-900/40 rounded-lg text-xs text-slate-300 flex items-center justify-around">
                <div>
                  <span className="text-slate-500 block">Boring Job Salary</span>
                  <span className="text-rose-400 font-bold line-through">₹15,000 / mo</span>
                </div>
                <div className="h-6 w-px bg-slate-800" />
                <div>
                  <span className="text-slate-500 block">Growth Multiplier</span>
                  <span className="text-emerald-400 font-bold text-sm">
                    {extraMultiple}x मोर इनकम!
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenCheckout}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold py-2.5 px-4 rounded-lg text-sm transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                सीखना शुरू करो सिर्फ ₹199 में
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
