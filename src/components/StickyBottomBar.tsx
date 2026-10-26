import { Sparkles, ShieldCheck, Flame, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

interface StickyBottomBarProps {
  onOpenCheckout: () => void;
}

export function StickyBottomBar({ onOpenCheckout }: StickyBottomBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-emerald-500/30 p-2.5 sm:p-3 shadow-2xl shadow-black">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Price and Discount */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="leading-tight">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black text-white">₹199</span>
              <span className="text-xs sm:text-sm text-slate-500 line-through">₹1,999</span>
              <span className="bg-emerald-500/20 text-emerald-400 font-bold text-[10px] sm:text-xs px-2 py-0.5 rounded border border-emerald-500/30">
                90% OFF
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-amber-300 font-medium">
              <Flame className="w-3 h-3 text-rose-400 fill-rose-400" />
              <span className="hidden sm:inline">Only 14 Copies Left at ₹199!</span>
              <span className="sm:hidden">Special Launch Price</span>
            </div>
          </div>
        </div>

        {/* Right: CTA Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCheckout}
            className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm sm:text-base py-2.5 px-4 sm:px-6 rounded-xl shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-105 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4 fill-slate-950" />
            <span>BUY NOW (₹199)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
