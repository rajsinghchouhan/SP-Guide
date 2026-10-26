import { Award, BookOpen, Users, Star, CheckCircle } from 'lucide-react';

export function AuthorSection() {
  return (
    <section className="py-16 bg-slate-900/90 border-t border-slate-800 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20">
            Why Choose Us? • Meet Your Coach
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            इंडस्ट्री के नंबर 1 एक्सपर्ट से सीखें
          </h2>
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center gap-8">
          {/* Author Portrait */}
          <div className="shrink-0 w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-amber-500/40 relative shadow-xl shadow-amber-950/20 bg-slate-800">
            <img
              src="https://massageebooks.github.io/go/indexss_files/ChatGPT-Image-Feb-3-2026-04_24_48-PM.png"
              alt="डॉ. मनीष श्रीवास्तव"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>

          {/* Author Details */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold bg-amber-500/10 px-2.5 py-1 rounded-md mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Mentor & Wellness Expert</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              डॉ. मनीष श्रीवास्तव
            </h3>
            <p className="text-emerald-400 font-semibold text-sm sm:text-base mt-0.5 mb-4">
              मसाज व्यवसाय कोच | वेलनेस एक्सपर्ट | बेस्टसेलिंग लेखक
            </p>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              डॉ. मुनिश शर्मा वेलनेस और मसाज इंडस्ट्री में एक जाना-माना नाम हैं। अब तक 50,000+ स्टूडेंट्स उनके Step-by-Step सिस्टम को सीखकर अपना मसाज बिज़नेस शुरू कर चुके हैं। इनमें से कई स्टूडेंट्स ने बिलकुल शून्य अनुभव और बहुत कम निवेश से शुरू करके लाखों रुपये का सफल करियर बनाया है।
            </p>

            {/* Quick credentials badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-center">
                <span className="text-amber-400 font-extrabold block text-base">50,000+</span>
                <span className="text-slate-400">सफल स्टूडेंट्स</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-center">
                <span className="text-emerald-400 font-extrabold block text-base">150+ Pages</span>
                <span className="text-slate-400">प्रैक्टिकल गाइड</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-center col-span-2 sm:col-span-1">
                <span className="text-teal-400 font-extrabold block text-base">4.9 / 5</span>
                <span className="text-slate-400">स्टूडेंट रेटिंग</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
