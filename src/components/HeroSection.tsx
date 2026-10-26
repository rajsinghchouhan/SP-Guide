import { Star, CheckCircle, ShieldCheck, Download, Sparkles, BookOpen, Users, IndianRupee } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export function HeroSection({ onOpenCheckout }: HeroSectionProps) {
  return (
    <section className="relative pt-6 pb-16 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background ambient decorative glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-amber-500/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Badges & Social Proof */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold text-emerald-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>High-Demand Home Business Model</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-rose-500/15 border border-rose-500/30 px-3 py-1 rounded-full text-xs font-semibold text-rose-300 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            <span>342 लोग अभी इस पेज पर हैं</span>
          </div>

          <div className="inline-flex items-center gap-1 bg-amber-500/15 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-semibold text-amber-300">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>4.9/5 Rating (40,210+ Reviews)</span>
          </div>
        </div>

        {/* Main Power Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-tight">
            <span className="text-pink-400 uppercase tracking-wide block sm:inline">LADIES</span> अपने घर बुला रही हैं{' '}
            <span className="text-amber-400 uppercase tracking-wide block sm:inline">MALE MASSAGER</span> को और Pay कर रही हैं{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent block mt-2 sm:mt-1">
              ₹2000 - ₹5000 PER SESSION
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-xl text-slate-300 font-medium max-w-2xl mx-auto">
            (और तुम बस <span className="text-rose-400 font-bold underline decoration-rose-500/50">₹15,000 की Boring Job</span> में फंसे हो... क्यों?)
          </p>
        </div>

        {/* Hero Visual Card & Quick Feature Highlights */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Key Visual Presentation */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-gradient-to-br from-slate-900 to-slate-950 p-2 shadow-2xl shadow-emerald-950/30 group">
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-800">
                <img
                  src="https://massageebooks.github.io/go/indexss_files/download-1-1024x687.jpg"
                  alt="Ladies Home Massage Business"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                {/* Floating Badge on Image */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-2.5 rounded-lg text-xs text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-semibold text-emerald-300">Complete 4-PDF Digital Guide</span>
                  </div>
                  <span className="text-slate-300">150+ Pages • Hindi + English</span>
                </div>
              </div>

              {/* Bottom Quick Feature Tags */}
              <div className="grid grid-cols-3 gap-2 mt-2 pt-1 text-center text-xs">
                <div className="bg-slate-800/60 border border-slate-700/40 rounded-lg p-2 text-slate-300">
                  <span className="text-emerald-400 font-bold block text-sm">₹0</span>
                  Investment
                </div>
                <div className="bg-slate-800/60 border border-slate-700/40 rounded-lg p-2 text-slate-300">
                  <span className="text-amber-400 font-bold block text-sm">2 Weeks</span>
                  Learning Time
                </div>
                <div className="bg-slate-800/60 border border-slate-700/40 rounded-lg p-2 text-slate-300">
                  <span className="text-teal-400 font-bold block text-sm">₹40k-₹60k</span>
                  Monthly Target
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Problem Hook & CTA Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl relative backdrop-blur-md">
              <div className="inline-block bg-rose-500/15 border border-rose-500/30 text-rose-300 font-bold text-xs uppercase px-2.5 py-1 rounded-md mb-3">
                Reality Check
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                क्या तुम भी ₹10k - ₹15k में जी रहे हो?
              </h2>
              <p className="text-slate-300 text-sm mb-4">
                घर का खर्चा भी मुश्किल से चलता है? तो सुनो... यह एक ऐसा काम है जो:
              </p>

              {/* 4 Core Pillars */}
              <div className="space-y-2.5 mb-6">
                <div className="flex items-start gap-2.5 text-slate-200 text-sm bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/40">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>शुरू करने में ₹0 Investment:</strong> कोई दुकान या ऑफिस नहीं।</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-200 text-sm bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/40">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>सीखने में सिर्फ 2 हफ्ते:</strong> सिंपल स्टेप-बाय-स्टेप फोटो गाइड।</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-200 text-sm bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/40">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>कमाने में ₹40,000 - ₹60,000/Month:</strong> हर सेशन ₹2000-₹5000।</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-200 text-sm bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/40">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>और सबसे important:</strong> पूरे आदर, मज़े और स्वतंत्रता वाला काम!</span>
                </div>
              </div>

              {/* Price Box & CTA */}
              <div className="bg-gradient-to-br from-slate-950 to-slate-900 border border-amber-500/30 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">₹199</span>
                  <span className="text-lg text-slate-400 line-through decoration-rose-500 decoration-2">₹1,999</span>
                  <span className="bg-emerald-500/20 text-emerald-400 font-extrabold text-xs px-2 py-0.5 rounded-full border border-emerald-500/30">
                    90% OFF
                  </span>
                </div>
                <p className="text-xs text-amber-300 font-medium mt-1">
                  ⚡ Special Launch Price • 4 PDFs + 5 Free Bonuses
                </p>

                <div className="mt-4 space-y-2">
                  <button
                    onClick={onOpenCheckout}
                    className="w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold text-base sm:text-lg py-3 px-6 rounded-xl shadow-lg shadow-emerald-600/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-5 h-5 fill-slate-950" />
                    GET YOUR COPY NOW (₹199)
                  </button>

                  <a
                    href={CHECKOUT_URL}
                    className="text-xs text-slate-400 hover:text-emerald-400 underline block transition-colors"
                  >
                    Direct Checkout on Superprofile →
                  </a>
                </div>

                <div className="flex items-center justify-center gap-4 text-slate-400 text-xs mt-3 pt-3 border-t border-slate-800">
                  <span className="flex items-center gap-1">
                    <Download className="w-3.5 h-3.5 text-emerald-400" /> Instant PDF
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Secure
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-amber-400" /> 50k+ Students
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
