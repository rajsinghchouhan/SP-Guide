import { useState, useEffect } from 'react';
import { CheckCircle2, ShoppingBag } from 'lucide-react';
import { LIVE_PURCHASES } from '../data/landingData';

export function RecentSaleNotification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initial delay before showing
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3500);

    // Loop through notifications
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % LIVE_PURCHASES.length);
        setIsVisible(true);
      }, 1000);
    }, 11000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  const current = LIVE_PURCHASES[currentIndex];

  return (
    <div className="fixed bottom-20 left-4 z-40 hidden sm:flex items-center gap-3 bg-slate-900/95 border border-slate-700/80 p-3 rounded-2xl shadow-xl shadow-black/50 backdrop-blur-md max-w-xs transition-all duration-300 animate-slide-in">
      <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
        <ShoppingBag className="w-5 h-5" />
      </div>
      <div className="text-xs">
        <p className="text-white font-semibold flex items-center gap-1">
          <span>{current.name}</span>
          <span className="text-slate-400 font-normal">({current.city})</span>
        </p>
        <p className="text-emerald-400 text-[11px] font-medium flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" />
          <span>Just purchased Guide Bundle</span>
        </p>
        <span className="text-[10px] text-slate-500">{current.time}</span>
      </div>
    </div>
  );
}
