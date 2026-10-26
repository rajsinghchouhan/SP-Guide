import { useState, useEffect } from 'react';
import { Flame, Clock, Sparkles } from 'lucide-react';
import { calculateTimeRemaining } from '../utils/calculator';

interface HeaderBannerProps {
  onOpenCheckout: () => void;
}

export function HeaderBanner({ onOpenCheckout }: HeaderBannerProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 24, seconds: 58 });

  useEffect(() => {
    // Set 3 hours 25 minutes countdown from load
    const target = Date.now() + (3 * 3600 + 25 * 60) * 1000;
    const interval = setInterval(() => {
      const rem = calculateTimeRemaining(target, Date.now());
      setTimeLeft({ hours: rem.hours, minutes: rem.minutes, seconds: rem.seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-amber-950/80 border-b border-emerald-500/30 text-white text-xs sm:text-sm py-2 px-3 sticky top-0 z-40 backdrop-blur-md shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-medium">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 animate-pulse">
            <Flame className="w-3.5 h-3.5 fill-emerald-400" />
          </span>
          <span className="font-semibold text-emerald-300">
            50,000+ लोग सीख चुके हैं
          </span>
          <span className="hidden md:inline text-slate-400">•</span>
          <span className="hidden md:inline text-slate-200">
            अब सिर्फ <strong className="text-amber-400 font-bold">₹199</strong> में Join करो (Original ₹1,999)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-black/40 border border-amber-500/30 px-2.5 py-1 rounded-full text-xs font-mono text-amber-300">
            <Clock className="w-3 h-3 text-amber-400" />
            <span>Offer Ends:</span>
            <span className="font-bold text-white">
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>

          <button
            onClick={onOpenCheckout}
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold px-3 py-1 rounded-full text-xs transition-all transform hover:scale-105 shadow-sm shadow-emerald-500/30 flex items-center gap-1 cursor-pointer"
          >
            <Sparkles className="w-3 h-3" />
            Claim ₹199
          </button>
        </div>
      </div>
    </div>
  );
}
