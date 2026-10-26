import { useState } from 'react';
import { BookOpen, Gift, CheckCircle, ShieldCheck, Sparkles, Layers, FileText } from 'lucide-react';
import { MODULES, BONUSES } from '../data/landingData';

interface CurriculumSectionProps {
  onOpenCheckout: () => void;
}

export function CurriculumSection({ onOpenCheckout }: CurriculumSectionProps) {
  const [activeTab, setActiveTab] = useState<'modules' | 'bonuses'>('modules');

  const totalBonusValue = BONUSES.reduce((acc, b) => acc + b.value, 0);

  return (
    <section id="curriculum" className="py-16 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>Complete Course Breakdown</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            ₹199 में तुम्हें EXACTLY क्या मिलेगा?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-2">
            4 PDFs बंडल | 150+ पेजेस | हिंदी + इंग्लिश | 5 एक्सक्लूसिव फ्री बोनसेज
          </p>

          {/* Interactive Tab Switcher */}
          <div className="inline-flex p-1.5 bg-slate-900 border border-slate-800 rounded-2xl mt-6 shadow-inner">
            <button
              onClick={() => setActiveTab('modules')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                activeTab === 'modules'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>5 Core Modules</span>
            </button>
            <button
              onClick={() => setActiveTab('bonuses')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                activeTab === 'bonuses'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Gift className="w-4 h-4" />
              <span>5 Free Bonuses (Worth ₹{totalBonusValue})</span>
            </button>
          </div>
        </div>

        {/* Modules Content */}
        {activeTab === 'modules' && (
          <div className="space-y-4 max-w-4xl mx-auto">
            {MODULES.map((module) => (
              <div
                key={module.number}
                className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-md group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-extrabold flex items-center justify-center text-sm shrink-0">
                      M{module.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {module.title}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400 bg-slate-800/70 px-2.5 py-1 rounded-full self-start sm:self-auto border border-slate-700/50">
                    Step-by-Step Practical
                  </span>
                </div>

                <p className="text-sm text-slate-300 mb-4">{module.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {module.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bonuses Content */}
        {activeTab === 'bonuses' && (
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 text-center mb-6">
              <span className="text-amber-400 font-bold text-sm sm:text-base">
                🎁 स्पेशल लिमिटेड टाइम ऑफर: आज ₹199 में जॉइन करने पर पूरे ₹{totalBonusValue} के 5 बोनसेज 100% FREE!
              </span>
            </div>

            {BONUSES.map((bonus) => (
              <div
                key={bonus.number}
                className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-md group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 font-extrabold flex items-center justify-center text-sm shrink-0">
                      B{bonus.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {bonus.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="text-xs text-slate-400 line-through">Value: ₹{bonus.value}</span>
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                      100% FREE
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {bonus.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <Gift className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA banner */}
        <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-emerald-950 via-slate-900 to-amber-950/70 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 text-center shadow-xl">
          <h4 className="text-xl sm:text-2xl font-bold text-white">
            ये सब कुछ (4 PDFs + 5 बोनसेज) सिर्फ ₹199 में!
          </h4>
          <p className="text-slate-300 text-sm mt-1 mb-5">
            100 कॉपियों के बाद कीमत बढ़कर ₹499 हो जाएगी। मौका न चूकें।
          </p>

          <button
            onClick={onOpenCheckout}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-base py-3 px-8 rounded-full shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-105 cursor-pointer"
          >
            Claim Complete Bundle for ₹199
          </button>
        </div>
      </div>
    </section>
  );
}
