import { XCircle, CheckCircle, Clock, Award, Shield, ArrowRight, Sparkles } from 'lucide-react';

interface ComparisonSectionProps {
  onOpenCheckout: () => void;
}

export function ComparisonSection({ onOpenCheckout }: ComparisonSectionProps) {
  return (
    <section className="py-16 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            तुम्हारे पास सिर्फ 2 Options हैं...
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-2">
            फैसला तुम्हारा है: वही पुरानी तकलीफों वाली जिंदगी या सम्मान और दौलत से भरी नई शुरुआत?
          </p>
        </div>

        {/* 2 Options Cards Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Option A: WITHOUT Guide */}
          <div className="bg-slate-900/60 border border-rose-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-rose-500/20 mb-6">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                  Option 1
                </span>
                <span className="text-rose-400 text-sm font-semibold">Status Quo</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-rose-500 shrink-0" />
                WITHOUT This Guide
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                वही पुरानी दिनचर्या और हर दिन का समझौता:
              </p>

              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>₹10k - ₹15k जॉब में फंसे:</strong> महीने के 20 तारीख को जेब खाली।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>बॉस की डांट सुनते रहो:</strong> 10 मिनट लेट होने पर भी बेइज्जती।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Fixed Timings, No Freedom:</strong> छुट्टी मांगने पर भी नखरे।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Boring Routine, कोई मज़ा नहीं:</strong> रोज़ सुबह वही बस और वही थकान।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>No Growth, कोई Future नहीं:</strong> 5 साल बाद भी वही हाल रहेगा।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>घर में हमेशा आर्थिक Tension:</strong> हर जरूरत के लिए सोचना पड़ता है।</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 text-center text-xs text-slate-500">
              रिजल्ट: वही निराशा और समझौते भरी जिंदगी
            </div>
          </div>

          {/* Option B: WITH Guide */}
          <div className="bg-gradient-to-br from-emerald-950/60 via-slate-900 to-slate-900 border-2 border-emerald-500/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-emerald-950/40 relative">
            <div className="absolute -top-3 right-6 bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-extrabold text-xs px-3.5 py-1 rounded-full shadow-md uppercase tracking-wide">
              ★ Recommended Choice
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20 mb-6">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  Option 2
                </span>
                <span className="text-emerald-400 text-sm font-semibold">Transformative</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0" />
                WITH This Guide
              </h3>
              <p className="text-emerald-300 text-sm mb-6 font-medium">
                सिर्फ ₹199 की गाइड से अपनी तकदीर खुद लिखो:
              </p>

              <ul className="space-y-3.5 text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>₹40k - ₹60k महीने की कमाई:</strong> हर सेशन का सीधा ₹2000-₹5000 कैश।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>अपने बॉस खुद:</strong> किसी की कोई डांट नहीं, अपने नियम और समय।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Full Freedom:</strong> जब मन करे तब काम करो, जब चाहो तब छुट्टी।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>डेली नए क्लाइंट्स व पूरा मज़ा:</strong> VIP सोसायटियों में सम्मान।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>कमाने की कोई लिमिट नहीं:</strong> जितने सेशन्स, उतना ज्यादा मुनाफा।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>परिवार और समाज में सच्चा सम्मान:</strong> माता-पिता को तुम पर गर्व!</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-500/20">
              <button
                onClick={onOpenCheckout}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                यह विकल्प चुनो — सिर्फ ₹199 में Join करो
              </button>
            </div>
          </div>
        </div>

        {/* 6 Months Later Roadmap */}
        <div className="border-t border-slate-800 pt-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-8">
            6 महीने बाद: तुम्हारी नई हकीकत
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/40 transition-all">
              <span className="text-2xl mb-2 block">💰</span>
              <h4 className="font-bold text-white text-base mb-1">आर्थिक स्वतंत्रता</h4>
              <p className="text-xs text-slate-300">
                अब पैसों की कोई चिंता नहीं। महीने में ₹40k-₹60k हाथ में, अच्छी बचत और खुशहाल जिंदगी।
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-amber-500/40 transition-all">
              <span className="text-2xl mb-2 block">👑</span>
              <h4 className="font-bold text-white text-base mb-1">परिवार में सम्मान</h4>
              <p className="text-xs text-slate-300">
                पिताजी को तुम पर गर्व है, माँ खुश रहती हैं, और जो रिश्तेदार ताने मारते थे अब तारीफ करते हैं।
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-blue-500/40 transition-all">
              <span className="text-2xl mb-2 block">⏰</span>
              <h4 className="font-bold text-white text-base mb-1">समय की आजादी</h4>
              <p className="text-xs text-slate-300">
                सुबह 7 बजे उठने की कोई जरूरत नहीं। वीकेंड में ज्यादा कमाई और परिवार के साथ भरपूर सुकून।
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-purple-500/40 transition-all">
              <span className="text-2xl mb-2 block">🚗</span>
              <h4 className="font-bold text-white text-base mb-1">बेहतर जीवनशैली</h4>
              <p className="text-xs text-slate-300">
                दोस्तों के साथ बिंदास घूम सकते हो, अपनी पसंद की चीजें खरीद सकते हो और शान से जी सकते हो।
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <span className="text-xl sm:text-2xl font-black text-amber-400 uppercase tracking-widest">
              CHOICE तुम्हारी है!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
