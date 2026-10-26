import { useState } from 'react';
import { MessageSquare, Clock, Sun, Sparkles, Heart, IndianRupee, CheckCheck, Play, Pause, Volume2, ShieldCheck } from 'lucide-react';

interface DayInTheLifeSectionProps {
  onOpenCheckout: () => void;
}

export function DayInTheLifeSection({ onOpenCheckout }: DayInTheLifeSectionProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleAudio = () => {
    setIsPlayingAudio((prev) => !prev);
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } catch {
      // AudioContext fallback
    }
  };

  return (
    <section className="py-16 bg-slate-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Real Life Transformation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Imagine करो... तुम्हारी नई लाइफ
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-2 font-medium">
            अलार्म की चीख-पुकार नहीं, बॉस की डांट नहीं — अपनी शर्तों पर शान से जीना!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Timeline Story on Left */}
          <div className="lg:col-span-7 space-y-4">
            {/* Step 1 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4.5 flex gap-4 items-start hover:border-amber-500/30 transition-all shadow-md">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">10:00 AM • No 7 AM Alarm!</span>
                <h3 className="text-base font-bold text-white mt-0.5">सुबह 10 बजे सुकून से उठते हो</h3>
                <p className="text-slate-300 text-sm mt-1">
                  कोई हड़बड़ी नहीं, कोई खचाखच भरी बस की भागदौड़ नहीं। बालकनी में आराम से चाय पीते हुए WhatsApp खोलते हो।
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4.5 flex gap-4 items-start hover:border-emerald-500/30 transition-all shadow-md">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <IndianRupee className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">12:00 PM • First Client Visit</span>
                <h3 className="text-base font-bold text-white mt-0.5">बड़ा सा घर, Full AC रूम और ₹3000 Cash</h3>
                <p className="text-slate-300 text-sm mt-1">
                  1 घंटा प्रोफेशनल फुल बॉडी मसाज। क्लाइंट को अद्भुत रिलैक्सेशन मिलता है। सेशन खत्म होते ही ₹3,000 cash हाथ में!
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4.5 flex gap-4 items-start hover:border-blue-500/30 transition-all shadow-md">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">02:30 PM • Lunch & Relax</span>
                <h3 className="text-base font-bold text-white mt-0.5">घर जाकर आराम से लंच और दोपहर का रेस्ट</h3>
                <p className="text-slate-300 text-sm mt-1">
                  शाम को 4:30 बजे फिर दूसरी सोसाइटी से कॉल आता है: "भैया 5 बजे आ सकते हो? बैक पेन है, ₹2500 दूंगी।"
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-r from-emerald-950/70 via-slate-900 to-amber-950/40 border-2 border-emerald-500/40 rounded-2xl p-4.5 flex gap-4 items-start shadow-xl shadow-emerald-950/30">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 fill-emerald-400/40" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wide">08:00 PM • Pure Happiness & Pride</span>
                <h3 className="text-base font-bold text-white mt-0.5">एक दिन की ₹5,500 कमाई मम्मी के हाथ में!</h3>
                <p className="text-slate-200 text-sm mt-1">
                  डिनर के वक्त घर पहुंचते हो। ₹5,500 आज की कमाई मम्मी को देते हो और उनके चेहरे पर गर्व भरी मुस्कान देखते हो!
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Mockup Phone */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-[34px] border-4 border-slate-700 bg-slate-950 p-2.5 shadow-2xl shadow-emerald-900/30">
              {/* Phone Header */}
              <div className="bg-[#128c7e] text-white rounded-t-2xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-800 flex items-center justify-center font-bold text-sm text-white ring-2 ring-emerald-400/50">
                    P
                  </div>
                  <div>
                    <h4 className="text-xs font-bold leading-tight">Mrs. Pooja (Tower B, 804)</h4>
                    <span className="text-[10px] text-emerald-100 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 inline-block animate-pulse" /> Online
                    </span>
                  </div>
                </div>
                <MessageSquare className="w-4 h-4 text-emerald-100" />
              </div>

              {/* Chat Body */}
              <div className="bg-[#0b141a] p-3 space-y-3 min-h-[340px] text-xs font-sans rounded-b-2xl">
                {/* Voice Note Simulation */}
                <div className="bg-[#202c33] text-slate-100 p-2.5 rounded-xl rounded-tl-none max-w-[90%] space-y-2 border border-slate-700/40">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleAudio}
                      className="w-7 h-7 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center cursor-pointer shrink-0 transition-transform active:scale-95"
                      title="Play simulated voice note"
                    >
                      {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                    </button>
                    <div className="flex-1">
                      <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                        <div className={`bg-emerald-400 h-full rounded-full transition-all duration-300 ${isPlayingAudio ? 'w-3/4' : 'w-1/4'}`} />
                      </div>
                      <div className="flex justify-between text-[9px] text-slate-400 mt-1">
                        <span>Voice Note (0:14)</span>
                        <span>10:14 AM</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-300 border-t border-slate-700/60 pt-1.5">
                    "Bhaiya 12 baje free ho? 1 ghanta full body massage chahiye, ₹3000 cash dungi. Body bohot stiff ho rahi hai."
                  </p>
                </div>

                {/* Masseur Reply */}
                <div className="bg-[#005c4b] text-slate-100 p-2.5 rounded-xl rounded-tr-none ml-auto max-w-[85%] space-y-1">
                  <p className="text-[11px]">Ji ma'am, bilkul. Main 12 baje exact time par pahunch raha hoon with essential aromatic oils.</p>
                  <div className="flex items-center justify-end gap-1 text-[9px] text-emerald-200">
                    <span>10:16 AM</span>
                    <CheckCheck className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                </div>

                {/* Client Review Message Post-Massage */}
                <div className="bg-[#202c33] text-slate-100 p-2.5 rounded-xl rounded-tl-none max-w-[90%] space-y-1 border border-slate-700/40">
                  <p className="text-[11px] text-emerald-300 font-semibold">
                    "Thank you so much bhaiya! Boht relief mila pain se, hands magic hain aapke. Maine ₹3,000 cash de diye hain. Next week fir se aana!"
                  </p>
                  <span className="text-[9px] text-slate-400 block text-right">01:15 PM</span>
                </div>

                {/* Evening Booking Alert */}
                <div className="bg-[#202c33] text-slate-100 p-2.5 rounded-xl rounded-tl-none max-w-[90%] space-y-1 border border-slate-700/40">
                  <span className="text-[10px] text-amber-300 font-bold block">New Booking (Tower A, 402):</span>
                  <p className="text-[11px]">"Bhaiya 5 baje aa sakte ho? Neck pain hai, massage chahiye. ₹2500 dungi."</p>
                  <span className="text-[9px] text-slate-400 block text-right">04:30 PM</span>
                </div>

                {/* Total Counter Card */}
                <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-amber-950/80 border border-amber-500/50 text-amber-300 p-2.5 rounded-xl text-center text-xs font-bold shadow-lg">
                  🔥 Today's Cash Earned: ₹5,500 in Hand!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Prompt */}
        <div className="mt-12 text-center">
          <p className="text-slate-300 text-base mb-4 font-medium">
            यही तो चाहिए था ना? यह बिल्कुल सच हो सकता है — बस सही स्टेप्स फॉलो करो।
          </p>
          <button
            onClick={onOpenCheckout}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-base py-3.5 px-8 rounded-full shadow-xl shadow-emerald-500/30 transition-all transform hover:scale-105 cursor-pointer"
          >
            हाँ, मुझे यह लाइफस्टाइल चाहिए (सिर्फ ₹199)
          </button>
        </div>
      </div>
    </section>
  );
}
