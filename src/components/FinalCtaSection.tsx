import { useState, useEffect } from 'react';
import { Flame, Clock, ShieldCheck, Sparkles, Download, CheckCircle, ArrowRight } from 'lucide-react';
import { calculateTimeRemaining } from '../utils/calculator';
import { CHECKOUT_URL } from '../data/landingData';

interface FinalCtaSectionProps {
  onOpenCheckout: () => void;
}

export function FinalCtaSection({ onOpenCheckout }: FinalCtaSectionProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 24, seconds: 58 });

  useEffect(() => {
    const target = Date.now() + (3 * 3600 + 25 * 60) * 1000;
    const interval = setInterval(() => {
      const rem = calculateTimeRemaining(target, Date.now());
      setTimeLeft({ hours: rem.hours, minutes: rem.minutes, seconds: rem.seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Main Box */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border-2 border-amber-500/50 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-center">
          {/* Top urgency banner */}
          <div className="inline-flex items-center gap-2 bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs sm:text-sm font-extrabold uppercase px-4 py-1.5 rounded-full mb-4 animate-pulse">
            <Flame className="w-4 h-4 fill-rose-400" />
            <span>Price बढ़ने वाली है • Abhi ₹199 में है, जल्द ही ₹499 हो जाएगी!</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Start Your Ladies Massage Business
          </h2>
          <p className="text-amber-400 font-bold text-lg sm:text-xl mt-1">
            Special Launch Price Offer
          </p>

          {/* Sold Progress Bar */}
          <div className="max-w-md mx-auto my-6 bg-slate-950 border border-slate-800 rounded-2xl p-4">
            <div className="flex justify-between items-center text-xs font-bold mb-2">
              <span className="text-rose-400 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5" /> 86 / 100 SOLD
              </span>
              <span className="text-slate-400">सिर्फ 14 कॉपियां बची हैं!</span>
            </div>
            <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-rose-500 h-full rounded-full transition-all duration-1000 w-[86%]" />
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              100 copies के बाद Price → <strong>₹499</strong> हो जाएगी।
            </p>
          </div>

          {/* Countdown Clock Display */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 my-6">
            <div className="bg-slate-950/90 border border-amber-500/30 rounded-xl p-3 min-w-[70px] sm:min-w-[80px]">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-amber-400">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">Hours</span>
            </div>
            <span className="text-2xl font-bold text-amber-400">:</span>
            <div className="bg-slate-950/90 border border-amber-500/30 rounded-xl p-3 min-w-[70px] sm:min-w-[80px]">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-amber-400">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">Minutes</span>
            </div>
            <span className="text-2xl font-bold text-amber-400">:</span>
            <div className="bg-slate-950/90 border border-amber-500/30 rounded-xl p-3 min-w-[70px] sm:min-w-[80px]">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-amber-400">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">Seconds</span>
            </div>
          </div>

          {/* Pricing Highlight */}
          <div className="my-6">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <span className="text-4xl sm:text-6xl font-black text-white">₹199</span>
              <span className="text-xl sm:text-2xl text-slate-500 line-through decoration-rose-500 decoration-2">
                ₹1,999
              </span>
              <span className="bg-emerald-500/20 text-emerald-400 font-black text-xs sm:text-sm px-3 py-1 rounded-full border border-emerald-500/30">
                90% OFF
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              अभी join करो = <strong className="text-emerald-300">₹199 (Lifetime Access)</strong> • बाद में = ₹499 pay करना पड़ेगा
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="max-w-md mx-auto space-y-3">
            <button
              onClick={onOpenCheckout}
              className="w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-lg sm:text-xl py-4 px-8 rounded-2xl shadow-xl shadow-emerald-600/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 fill-slate-950" />
              GET YOUR COPY NOW FOR ₹199
            </button>

            <a
              href={CHECKOUT_URL}
              className="text-xs text-slate-400 hover:text-emerald-400 underline block"
            >
              Or click here to open Superprofile instant payment page →
            </a>
          </div>

          {/* Value Highlights Pill */}
          <div className="mt-6 pt-5 border-t border-slate-800 text-xs text-slate-300 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Sparkles className="w-4 h-4 fill-emerald-400" /> Instant PDF Download & WhatsApp Access
            </span>
            <span className="text-slate-500">•</span>
            <span>4 PDF’s | 150+ Pages</span>
            <span className="text-slate-500">•</span>
            <span>English / हिंदी</span>
            <span className="text-slate-500">•</span>
            <span className="text-amber-400 font-semibold">57,122+ Students Joined</span>
          </div>
        </div>
      </div>
    </section>
  );
}
