import { Key, MapPin, CheckCircle2, Shield, HeartHandshake, Zap, Building2, UserCheck } from 'lucide-react';

interface HomeServiceModelSectionProps {
  onOpenCheckout: () => void;
}

export function HomeServiceModelSection({ onOpenCheckout }: HomeServiceModelSectionProps) {
  return (
    <section className="py-16 bg-slate-900/80 border-t border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
            <Key className="w-3.5 h-3.5 text-emerald-400" />
            <span>The Hidden Opportunity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            तो क्या है ये Secret? Home Service Model
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-2">
            महिलाएं स्ट्रेस, बॉडी पेन और रिलैक्सेशन के लिए घर पर ही मसाज चाहती हैं
          </p>
        </div>

        {/* 3 Core Drivers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">भारी डिमांड, कम सप्लाई</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              लग्जरी स्पा ₹5000-₹8000 चार्ज करते हैं और जाना भी झंझट भरा होता है। महिलाएं अपने ही घर के कम्फर्ट में रिलायबल होम सर्विस ढूंढ रही हैं।
            </p>
          </div>

          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Zero Office, Zero Rent</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              कोई दुकान, किराया, डेकोरेशन या कर्मचारियों की जरूरत नहीं। 100% प्रॉफिट सीधे आपकी जेब में आता है।
            </p>
          </div>

          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 hover:border-teal-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">पूरी आजादी, अपने खुद के बॉस</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              पार्ट-टाइम करो या फुल-टाइम। जब मूड हो तब क्लाइंट लो, जब आराम करना हो तब छुट्टी मनाओ। कोई टोकने वाला बॉस नहीं।
            </p>
          </div>
        </div>

        {/* Location & Perfection Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl">
          {/* Left: Location doubts solved */}
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
              <MapPin className="w-4 h-4" />
              <span>लोकेशन की बिल्कुल चिंता न करें</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              ग्राहक आपके आसपास ही मिल जाएंगे
            </h3>
            <p className="text-slate-300 text-sm mb-6">
              चाहे आप मुंबई-दिल्ली जैसे बड़े महानगर में हों या नासिक, जयपुर, इंदौर जैसे छोटे शहर में — हर जगह महिलाएं बॉडी पेन और स्ट्रेस रिलीफ चाहती हैं।
            </p>

            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>अपनी सोसाइटी, अपार्टमेंट या 2-3 किमी की दूरी से शुरू करो</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>एक संतुष्ट महिला कम से कम 2-3 सहेलियों को खुद रेफर करती है</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>छोटे शहरों में कम्पीटिशन लगभग ZERO है — आप अकेले किंग बन सकते हो</span>
              </li>
            </ul>
          </div>

          {/* Right: Why perfect for you */}
          <div className="bg-slate-900/90 border border-slate-700/60 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-amber-400" />
              क्यों यह काम आपके लिए 100% परफेक्ट है?
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="bg-slate-800/60 border border-slate-700/40 p-3 rounded-xl flex items-center gap-2 text-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>कोई बड़ा निवेश नहीं</span>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/40 p-3 rounded-xl flex items-center gap-2 text-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>कोई दुकान की जरूरत नहीं</span>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/40 p-3 rounded-xl flex items-center gap-2 text-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>कोई बॉस नहीं - खुद मालिक</span>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/40 p-3 rounded-xl flex items-center gap-2 text-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>डिग्री की कोई जरूरत नहीं</span>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
              <span className="text-amber-300 font-semibold text-xs sm:text-sm">
                पार्ट-टाइम या फुल-टाइम — जैसी तुम्हारी मर्जी!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
