import { Shield, Smartphone, Zap, Mail, BookOpen, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-12 border-t border-slate-900 pb-28 md:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-slate-850">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">100% Secure Payment</h4>
              <p className="text-slate-400 text-xs">256-Bit SSL Encrypted checkout via Superprofile</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Instant Digital Access</h4>
              <p className="text-slate-400 text-xs">पेमेंट होते ही तुरंत डाउनलोड लिंक उपलब्ध</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-teal-400 flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Mobile Friendly E-Book</h4>
              <p className="text-slate-400 text-xs">किसी भी स्मार्टफोन या लैपटॉप पर आसानी से पढ़ें</p>
            </div>
          </div>
        </div>

        {/* Brand & Support */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-base mb-1">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              <span>Ladies Massage Guide E-Book</span>
            </div>
            <p className="text-slate-400 max-w-md">
              Helping you learn professional massage skills and build a high-earning independent career.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl text-center md:text-right">
            <span className="text-slate-400 block text-xs">Customer Support:</span>
            <a
              href="mailto:support@massage.school.com"
              className="text-emerald-400 font-semibold hover:underline flex items-center justify-center md:justify-end gap-1.5 mt-0.5"
            >
              <Mail className="w-3.5 h-3.5" />
              support@massage.school.com
            </a>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-slate-400 space-y-2">
          <p className="text-[11px] max-w-3xl mx-auto text-slate-400">
            Disclaimer: Results may vary depending upon individual dedication, effort, and application of techniques. This guide provides educational wellness principles, business frameworks, and safety guidelines.
          </p>
          <p className="text-xs">
            © 2026 All Rights Reserved | Ladies Massage Guide E-Book
          </p>
        </div>
      </div>
    </footer>
  );
}
