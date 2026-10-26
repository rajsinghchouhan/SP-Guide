import { useState } from 'react';
import { BookOpen, Sparkles, CheckCircle2, ArrowRight, Eye, Layers } from 'lucide-react';
import { EBOOK_PREVIEWS, EbookPreview } from '../data/landingData';

interface BookPreviewSectionProps {
  onOpenCheckout: () => void;
}

export function BookPreviewSection({ onOpenCheckout }: BookPreviewSectionProps) {
  const [selectedPdf, setSelectedPdf] = useState<EbookPreview>(EBOOK_PREVIEWS[0]);

  return (
    <section className="py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
            <Eye className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Sneak Peek</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            चारों E-Books के अंदर क्या मिलेगा?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-2">
            नीचे किसी भी PDF पर क्लिक करके देखें कि उसमें क्या सिखाया गया है:
          </p>
        </div>

        {/* PDF Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {EBOOK_PREVIEWS.map((pdf) => {
            const isSelected = selectedPdf.id === pdf.id;
            return (
              <button
                key={pdf.id}
                onClick={() => setSelectedPdf(pdf)}
                className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-gradient-to-br from-emerald-950/80 to-slate-900 border-emerald-400 shadow-lg shadow-emerald-950/40'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                  }`}>
                    PDF #{pdf.pdfNum}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">{pdf.pages}</span>
                </div>
                <h3 className={`text-xs sm:text-sm font-bold line-clamp-2 ${
                  isSelected ? 'text-white' : 'text-slate-300'
                }`}>
                  {pdf.hindiTitle}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Selected PDF Feature Showcase Card */}
        <div className="bg-slate-950 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-950/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image visual on Left */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 relative bg-slate-900 group shadow-xl">
              <img
                src={selectedPdf.sampleImage}
                alt={selectedPdf.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-amber-300 border border-amber-500/30">
                ⭐ {selectedPdf.badge}
              </div>
            </div>
          </div>

          {/* Text Breakdown on Right */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 font-extrabold flex items-center justify-center text-xs border border-emerald-500/30">
                  #{selectedPdf.pdfNum}
                </span>
                <span className="text-xs font-semibold text-slate-400">{selectedPdf.title}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                {selectedPdf.hindiTitle}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-5 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                {selectedPdf.summary}
              </p>

              <div className="space-y-2.5 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                  इस PDF के मुख्य चैप्टर्स:
                </span>
                {selectedPdf.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                <span>फॉर्मेट: <strong>High-Res PDF</strong></span> • <span>भाषा: <strong>हिंदी + English</strong></span>
              </div>
              <button
                onClick={onOpenCheckout}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-emerald-500/20 flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>अभी डाउनलोड करो (₹199)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
