import { useState } from 'react';
import { Star, ShieldCheck, ThumbsUp, Quote, Award, Sparkles, Filter } from 'lucide-react';
import { STUDENT_STORIES, REVIEWS } from '../data/landingData';

interface TestimonialsSectionProps {
  onOpenCheckout: () => void;
}

export function TestimonialsSection({ onOpenCheckout }: TestimonialsSectionProps) {
  const [filterRating, setFilterRating] = useState<number | null>(null);

  const filteredReviews = filterRating
    ? REVIEWS.filter(r => r.rating === filterRating)
    : REVIEWS;

  return (
    <section id="reviews" className="py-16 bg-slate-900/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>Proven Student Success</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            मेरे जैसे लोगों ने किया... तुम भी कर सकते हो!
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-2">
            हमारे स्टूडेंट्स की असली कहानियां — कैसे शून्य से शुरू करके बदली उनकी ज़िन्दगी
          </p>
        </div>

        {/* 3 Deep Case Studies (Rahul, Amit, Sanjay) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {STUDENT_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-slate-950 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none" />

              <div>
                {/* Header with avatar */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-400/50 bg-slate-800 shrink-0">
                    <img
                      src={story.avatar}
                      alt={story.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                      {story.name}
                      <span className="text-xs font-normal text-slate-400">({story.age} साल)</span>
                    </h3>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 block mt-0.5">
                      {story.tagline}
                    </span>
                  </div>
                </div>

                {/* Salary comparison chip */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 mb-4 text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400">पहले:</span>
                    <span className="text-rose-400 font-semibold">{story.prevSalary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">अब:</span>
                    <span className="text-emerald-300 font-bold">{story.currentSalary}</span>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="w-6 h-6 text-slate-700 absolute -top-1 -left-1 opacity-50" />
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-4 italic">
                    "{story.quote}"
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Verified Story
                </span>
                <span className="text-amber-400 font-semibold">⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          ))}
        </div>

        {/* Real Reviews Section Header with Rating Filter */}
        <div className="border-t border-slate-800 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
                Real Reviews
                <span className="text-xs font-normal text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700">
                  40,210+ Ratings
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                सभी रिव्यू उन छात्रों द्वारा पोस्ट किए गए हैं जिन्होंने E-Book डाउनलोड की है
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Filter:
              </span>
              <button
                onClick={() => setFilterRating(null)}
                className={`text-xs px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                  filterRating === null
                    ? 'bg-slate-700 text-white border-slate-600 font-bold'
                    : 'bg-slate-800 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterRating(5)}
                className={`text-xs px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                  filterRating === 5
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                    : 'bg-slate-800 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                ★★★★★ (5 Stars)
              </button>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-950/80 border border-slate-800 rounded-xl p-4.5 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-500">{rev.date}</span>
                  </div>

                  <h4 className="font-bold text-sm text-white">{rev.name}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 mb-2">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified Buyer • {rev.location}</span>
                  </div>

                  {rev.highlight && (
                    <p className="text-xs font-semibold text-amber-300 mb-2 bg-amber-500/10 p-1.5 rounded border border-amber-500/20">
                      "{rev.highlight}"
                    </p>
                  )}

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {rev.story}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-slate-500">
                  {rev.product}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <p className="text-slate-300 text-sm mb-3">
            50,000+ लोग अपनी किस्मत बदल चुके हैं। अब तुम्हारी बारी है!
          </p>
          <button
            onClick={onOpenCheckout}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-base py-3 px-8 rounded-full shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-105 cursor-pointer"
          >
            Start Your Journey for ₹199
          </button>
        </div>
      </div>
    </section>
  );
}
