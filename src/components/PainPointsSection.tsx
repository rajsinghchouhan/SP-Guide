import { AlertTriangle, TrendingDown, Frown, Briefcase, Users2 } from 'lucide-react';

export function PainPointsSection() {
  const painPoints = [
    {
      id: 1,
      title: "हर महीने पैसे खत्म",
      sub: "Salary आते ही खत्म, कोई savings नहीं, emergency में दोस्तों या रिश्तेदारों से loan मांगना पड़ता है।",
      icon: TrendingDown,
      color: "from-rose-500/20 to-rose-900/10 border-rose-500/30 text-rose-400",
      image: "https://massageebooks.github.io/go/indexss_files/ChatGPT-Image-Feb-4-2026-12_25_02-PM-1024x683.png"
    },
    {
      id: 2,
      title: "घर में कोई इज्जत नहीं",
      sub: "Papa हमेशा आर्थिक टेंशन में, Mummy दुखी रहती है, रिश्तेदार ताने मारते पूछते हैं 'बेटा आजकल क्या करते हो?'",
      icon: Frown,
      color: "from-amber-500/20 to-amber-900/10 border-amber-500/30 text-amber-400",
      image: "https://massageebooks.github.io/go/indexss_files/ChatGPT-Image-Feb-4-2026-12_34_07-PM-1024x683.png"
    },
    {
      id: 3,
      title: "Boring Job में फंसे हो",
      sub: "रोज़ Boss की कड़वी डांट, मेहनत के बाद भी Salary नहीं बढ़ती, रोज़ वही 9-to-6 की घिसी-पिटी रूटीन, कोई मज़ा नहीं।",
      icon: Briefcase,
      color: "from-blue-500/20 to-blue-900/10 border-blue-500/30 text-blue-400",
      image: "https://massageebooks.github.io/go/indexss_files/ChatGPT-Image-Feb-4-2026-12_38_04-PM-1024x683.png"
    },
    {
      id: 4,
      title: "दोस्तों से पीछे रह गए हो",
      sub: "दोस्त नई Car और Bikes में घूमते हैं और तुम खचाखच भरी bus में धक्के खाते हो; वो ऐश कर रहे, तुम बस सोचते रह गए।",
      icon: Users2,
      color: "from-purple-500/20 to-purple-900/10 border-purple-500/30 text-purple-400",
      image: "https://massageebooks.github.io/go/indexss_files/ChatGPT-Image-Feb-4-2026-12_44_11-PM-1024x683.png"
    }
  ];

  return (
    <section className="py-16 bg-slate-900/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The Hard Reality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            क्या तुम्हारी भी यही हालत है?
          </h2>
          <p className="text-slate-400 text-base mt-2">
            अगर इनमें से एक भी बात तुम्हारे साथ सच है, तो तुम्हें अपनी दिशा आज ही बदलने की सख्त जरूरत है:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col sm:flex-row group"
              >
                <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto relative overflow-hidden bg-slate-900 shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-950/80 via-transparent to-transparent" />
                </div>

                <div className="p-5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`p-1.5 rounded-lg border bg-gradient-to-br ${item.color}`}>
                      <IconComponent className="w-4 h-4" />
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition statement */}
        <div className="mt-12 text-center bg-gradient-to-r from-slate-900 via-emerald-950/50 to-slate-900 border border-emerald-500/20 rounded-2xl p-6 sm:p-8">
          <p className="text-lg sm:text-xl font-bold text-white">
            3 महीने में... तुम्हारी ज़िन्दगी <span className="text-emerald-400 underline decoration-emerald-500/60">पूरी तरह बदल सकती है</span>।
          </p>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            50,000+ लोगों ने इस आसान सिस्टम से अपनी ज़िन्दगी बदली है। अब अगली बारी तुम्हारी है!
          </p>
        </div>
      </div>
    </section>
  );
}
