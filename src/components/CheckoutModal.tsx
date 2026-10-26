import { X, ShieldCheck, Check, ExternalLink, Download, Lock } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  if (!isOpen) return null;

  const handleProceed = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    // Redirect directly to the checkout URL
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative max-h-[94vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5">
          <span className="inline-block bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase px-3.5 py-1 rounded-full mb-2">
            ⚡ Instant WhatsApp & PDF Access
          </span>
          <h3 className="text-2xl font-black text-white">
            कंफर्म करें और तुरंत E-Book पाएं
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            ₹199 का पेमेंट पूरा होते ही 4 PDFs और 5 बोनसेज तुरंत डाउनलोड हो जाएंगे
          </p>
        </div>

        {/* Order Summary Box */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 mb-5 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h4 className="font-bold text-white text-sm">Ladies Massage Business Complete Bundle</h4>
              <p className="text-[11px] text-slate-400">4 PDF Guides (150+ Pages) • Hindi & English</p>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-slate-200">₹199</span>
              <span className="text-[10px] text-slate-500 line-through block">₹1,999</span>
            </div>
          </div>

          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="flex items-center justify-between text-emerald-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> 5 Exclusive Business Bonuses (Worth ₹4,395)
              </span>
              <span className="font-bold uppercase text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded">FREE</span>
            </div>
            <div className="flex items-center justify-between text-emerald-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> Lifetime Community WhatsApp Access
              </span>
              <span className="font-bold uppercase text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded">FREE</span>
            </div>
            <div className="flex items-center justify-between text-emerald-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> Mobile & Tablet Friendly Format
              </span>
              <span className="font-bold uppercase text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded">INCLUDED</span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="font-bold text-white text-base">Total Payable Today:</span>
            <div className="text-right">
              <span className="text-2xl font-black text-emerald-400 font-mono">₹199</span>
              <span className="text-[10px] text-slate-400 block line-through">Reg ₹1,999 (90% OFF)</span>
            </div>
          </div>
        </div>

        {/* Supported Payment Logos / Pills */}
        <div className="flex items-center justify-center gap-2 mb-4 text-[11px] text-slate-300">
          <span className="bg-slate-800 px-2 py-0.5 rounded font-bold text-[#4285F4]">GPay</span>
          <span className="bg-slate-800 px-2 py-0.5 rounded font-bold text-[#5f259f]">PhonePe</span>
          <span className="bg-slate-800 px-2 py-0.5 rounded font-bold text-[#00baf2]">Paytm</span>
          <span className="bg-slate-800 px-2 py-0.5 rounded font-bold text-[#00833e]">BHIM UPI</span>
          <span className="bg-slate-800 px-2 py-0.5 rounded font-bold text-slate-300">Cards</span>
        </div>

        {/* Action Button */}
        <button
          onClick={handleProceed}
          className="w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-base py-3.5 px-6 rounded-2xl shadow-xl shadow-emerald-500/30 transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
        >
          <Lock className="w-4 h-4 fill-slate-950" />
          <span>Pay ₹199 & Get Instant Download</span>
          <ExternalLink className="w-4 h-4" />
        </button>

        {/* Trust Badges */}
        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-center gap-4 text-[11px] text-slate-400">
          <span className="flex items-center gap-1 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Encrypted & Safe
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1 text-slate-300">
            <Download className="w-3.5 h-3.5 text-emerald-400" /> Instant PDF Delivery
          </span>
        </div>
      </div>
    </div>
  );
}
