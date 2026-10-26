export interface Review {
  id: string;
  name: string;
  location?: string;
  date: string;
  rating: number;
  verified: boolean;
  product: string;
  story: string;
  highlight?: string;
}

export interface StudentStory {
  id: string;
  name: string;
  age: number;
  tagline: string;
  avatar: string;
  prevSalary: string;
  currentSalary: string;
  quote: string;
}

export interface ModuleItem {
  number: number;
  title: string;
  description: string;
  bullets: string[];
  duration?: string;
}

export interface BonusItem {
  number: number;
  title: string;
  bullets: string[];
  value: number;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const CHECKOUT_URL = "https://superprofile.bio/vp/diusahfuds55?checkout=true";

export interface EbookPreview {
  id: string;
  pdfNum: number;
  title: string;
  hindiTitle: string;
  pages: string;
  badge: string;
  summary: string;
  highlights: string[];
  sampleImage: string;
}

export const EBOOK_PREVIEWS: EbookPreview[] = [
  {
    id: "pdf1",
    pdfNum: 1,
    title: "Core Anatomy & Massage Postures",
    hindiTitle: "प्रोफेशनल मसाज पोश्चर व पेन-रिलीफ टेक्निक्स",
    pages: "48 Pages",
    badge: "Foundation Guide",
    summary: "महिलाओं में सबसे कॉमन बैक पेन, लोअर स्पाइन स्टिफनेस और सर्वाइकल नेक पेन को 20 मिनट में जड़ से रिलैक्स करने की सीक्रेट जापानी व स्वीडिश टेक्निक्स।",
    highlights: [
      "स्पाइन और शोल्डर ब्लेड्स के 12 प्राइमरी प्रेशर पॉइंट्स",
      "बिना खुद थके लगातार 60 मिनट तक स्मूद मसाज देने का पोश्चर",
      "थकावट, स्ट्रेस और माइग्रेन दूर करने वाला हेड मसाज फ्लो"
    ],
    sampleImage: "https://massageebooks.github.io/go/indexss_files/download-3-1024x687.jpg"
  },
  {
    id: "pdf2",
    pdfNum: 2,
    title: "Client Attraction & WhatsApp Closing",
    hindiTitle: "हाई-पेइंग लेडीज़ क्लाइंट्स पाने का सीक्रेट फॉर्मूला",
    pages: "36 Pages",
    badge: "Client Magnet",
    summary: "बिना किसी को सीधे कॉल किए, अपनी नजदीकी पॉश सोसायटियों और अपार्टमेंट्स में सही क्लाइंट्स ढूंढने और उन्हें तुरंत बुक करने की 100% टेस्टेड WhatsApp स्क्रिप्ट्स।",
    highlights: [
      "कॉपी-पेस्ट WhatsApp ग्रीटिंग्स (हिंदी + इंग्लिश)",
      "फोन पर बात करते समय प्रोफेशनल और जेंटल टोन कैसे रखें",
      "पहली ही विजिट में ₹2500 - ₹3500 चार्ज करने का कॉन्फिडेंस"
    ],
    sampleImage: "https://massageebooks.github.io/go/indexss_files/download-6-1024x687.jpg"
  },
  {
    id: "pdf3",
    pdfNum: 3,
    title: "Home Visit Safety & 5-Star Spa Kit",
    hindiTitle: "सेफ्टी प्रोटोकॉल, प्राइवेसी और प्रोफेशनल स्पा किट",
    pages: "38 Pages",
    badge: "Safety & Ethics",
    summary: "महिलाओं के घर 100% सुरक्षित और आदर के साथ जाने के नियम। कौन से एसेंशियल ऑयल्स खरीदने हैं, टॉवेल्स और एम्बियंस कैसे तैयार करना है जिससे क्लाइंट इम्प्रेस हो जाए।",
    highlights: [
      "सिर्फ ₹400 में बनने वाली प्रोफेशनल मोबाइल स्पा किट",
      "क्लाइंट वेरिफिकेशन और स्ट्रिक्ट प्रोफेशनल बाउंड्रीज",
      "5-स्टार लग्जरी स्पा जैसी खुशबू और कम्फर्ट देने के सीक्रेट्स"
    ],
    sampleImage: "https://massageebooks.github.io/go/indexss_files/download-7-1024x687.jpg"
  },
  {
    id: "pdf4",
    pdfNum: 4,
    title: "Scaling to ₹60,000+ & Repeat Referrals",
    hindiTitle: "1 क्लाइंट से 10 क्लाइंट्स बनाने का रेफरल इंजन",
    pages: "32 Pages",
    badge: "Income Scaler",
    summary: "एक बार जाने के बाद क्लाइंट आपको हर हफ्ते खुद फोन करके बुलाएगी। अपने एरिया में बिना किसी कंपटीशन के महीने के ₹50,000 - ₹60,000+ कमाने का एक्शन प्लान।",
    highlights: [
      "मंथली वीकली पैकेज (₹8,000 से ₹15,000/क्लाइंट एडवांस)",
      "वर्ड-ऑफ-माउथ: सहेलियों को रेफर करवाने का जादुई तरीका",
      "पार्ट-टाइम से फुल-टाइम हाई-इनकम करियर में अपग्रेड"
    ],
    sampleImage: "https://massageebooks.github.io/go/indexss_files/download-8-1024x687.jpg"
  }
];

export const STUDENT_STORIES: StudentStory[] = [
  {
    id: "rahul",
    name: "RAHUL",
    age: 26,
    tagline: "Security Guard → Home Masseur",
    avatar: "https://massageebooks.github.io/go/indexss_files/my_image1762836438-2025-11-11-04-47-20-100x100.webp",
    prevSalary: "₹11,000 / month (Night Duty)",
    currentSalary: "₹20,000 - ₹25,000 Extra (Weekends)",
    quote: "भाई मैं security guard था। ₹11,000 salary, रात की 12 घंटे duty, कोई respect नहीं। इस guide से सीखा। पहले अपनी society की aunties को professional pain-relief service दी। वो इतनी खुश हुईं कि आगे 4 लोगों को refer किया। अब 6 regular clients हैं, सिर्फ weekend पर ₹25,000 extra कमाता हूँ। Guard की नौकरी छोड़ने का time आ गया है!"
  },
  {
    id: "amit",
    name: "AMIT",
    age: 24,
    tagline: "Unemployed → Full-time Home Service",
    avatar: "https://massageebooks.github.io/go/indexss_files/my_image1762836548-2025-11-11-04-49-9-100x100.webp",
    prevSalary: "₹0 (2 साल बेरोज़गार)",
    currentSalary: "₹50,000+ / month (12 Regular Clients)",
    quote: "2 महीने तक घर बैठा था। हर job interview से rejection, पापा का गुस्सा और मम्मी की टेंशन। ₹199 में ये गाइड ली सोचा कुछ तो नया ट्राई करें। 2 हफ्ते दिल लगाके सीखा। पहली client मिली ₹800! हाथ कांप रहे थे। लेकिन गाइड की टिप्स फॉलो की। आज 3 महीने बाद 12 regular clients हैं और ₹50,000+ मंथली इनकम आ रही है!"
  },
  {
    id: "sanjay",
    name: "SANJAY",
    age: 29,
    tagline: "Delivery Boy → Premium Masseur",
    avatar: "https://massageebooks.github.io/go/indexss_files/my_image1762836500-2025-11-11-04-48-23-1-100x100.webp",
    prevSalary: "₹15,000 / month (धूप और बारिश में)",
    currentSalary: "₹65,000+ / month (Self Boss)",
    quote: "Swiggy पर delivery करता था। चिलचिलाती धूप, बारिश और भारी ट्रैफिक। ₹15,000 में कमर टूट जाती थी। गाइड देखी, ₹199 था तो रिस्क लिया। 1 महीना प्रैक्टिस की और गाइड के प्रीमियम अप्रोच से high-society एरियाज को target किया। अब delivery छोड़ दी है, 8-10 VIP clients हैं और महीने का ₹60,000+ घर बैठे कमा रहा हूँ।"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Amit S.",
    location: "Delhi NCR",
    date: "May 2, 2025",
    rating: 5,
    verified: true,
    product: "Male Therapist Business Ebook",
    highlight: "1 साल से बेरोजगार था, अब ₹50k+ monthly आ रहा है!",
    story: "1 साल से बेरोजगार था। हर जगह rejection। Confidence टूट गया था। Papa disappointed। Mummy रोती थीं। Friend ने यह गाइड recommend की। बोला '₹199 ही तो हैं, try kar।' Best decision ever! 2 महीने में setup हो गया। अब 10+ clients हैं। ₹50k+ monthly आ रहा है। Papa अब गर्व से सबको बताते हैं!"
  },
  {
    id: "r2",
    name: "Rohit K.",
    location: "Mumbai",
    date: "April 18, 2025",
    rating: 5,
    verified: true,
    product: "Male Therapist Business Ebook",
    highlight: "₹12k की जॉब छोड़ दी, अब 9-12 रेगुलर क्लाइंट्स हैं",
    story: "मैं ₹12k की जॉब में था। रोज़ बॉस की डांट। कोई रिस्पेक्ट नहीं। Life में कोई एक्साइटमेंट नहीं। ₹199 का रिस्क लिया। गाइड पढ़ी। 1 महीना प्रैक्टिस किया। पहली क्लाइंट से ₹800 मिले। फिर रेफरल से 2 और। अब 4 महीने हो गए, जॉब छोड़ दी। 9-12 रेगुलर क्लाइंट्स हैं और ₹48k-₹55k मंथली कमा रहा हूँ।"
  },
  {
    id: "r3",
    name: "Sunil P.",
    location: "Bangalore",
    date: "March 29, 2025",
    rating: 5,
    verified: true,
    product: "Male Therapist Business Ebook",
    highlight: "कॉलेज के साथ Saturday-Sunday करके ₹35k-₹40k",
    story: "College में हूं, final year। Papa का प्रेशर था 'पढ़ाई के साथ कुछ करो।' यह गाइड ली। सिर्फ Saturday-Sunday करता हूं। 3-4 क्लाइंट्स हैं। ₹35k-₹40k महीने के आसानी से निकल आते हैं। Pocket money के लिए अब Papa से नहीं मांगना पड़ता।"
  },
  {
    id: "r4",
    name: "Vikas T.",
    location: "Nashik",
    date: "April 7, 2025",
    rating: 5,
    verified: true,
    product: "Male Therapist Business Ebook",
    highlight: "छोटे शहर में Zero Competition! ₹35k महीना",
    story: "मैं छोटे शहर (नासिक) में हूं। सोचा था 'यहां कौन लेगा मसाज?' मैं गलत था! गाइड में बताए तरीके से local Facebook group और WhatsApp status से शुरुआत की। 1 हफ्ते में 2 inquiries आईं। अब 5 महीने हो गए। Competition बिल्कुल नहीं। 7-8 रेगुलर clients और ₹35k आराम से।"
  },
  {
    id: "r5",
    name: "Manish R.",
    location: "Pune",
    date: "May 6, 2025",
    rating: 5,
    verified: true,
    product: "Male Therapist Business Ebook",
    highlight: "2 हफ्ते में पहली क्लाइंट मिली, ₹45k-₹50k एक्स्ट्रा",
    story: "गाइड लेने के बस 2 हफ्ते बाद पहली क्लाइंट मिली। अब 3 महीने हो गए, 6 रेगुलर क्लाइंट्स हैं। मेरी जॉब भी चल रही है और वीकेंड में यह करता हूं। हर महीने ₹45k-₹50k एक्स्ट्रा आ रहे हैं। पापा को जब पैसे दिखाए तो बोले 'बेटा सही काम चुना है!'"
  },
  {
    id: "r6",
    name: "Karan D.",
    location: "Jaipur",
    date: "April 25, 2025",
    rating: 5,
    verified: true,
    product: "Male Therapist Business Ebook",
    highlight: "पहली बार जब ₹5000 Papa के हाथ में रखे...",
    story: "मेरी सबसे बड़ी achievement पैसे नहीं - Papa की smile है। पहली बार जब ₹5000 Papa को दिए - बोले 'Beta, तुमने खुद कमाए?' अब हर महीना ₹15k-₹20k घर देता हूं। बाकी मेरे अपने खर्चे के। Papa अब सबको बताते हैं कि 'मेरा बेटा खुद का बिज़नेस चलाता है।'"
  },
  {
    id: "r7",
    name: "Nitin J.",
    location: "Aurangabad",
    date: "May 10, 2025",
    rating: 5,
    verified: true,
    product: "Male Therapist Business Ebook",
    highlight: "Word of mouth से clients multiply हो गए",
    story: "मैं बहुत छोटे शहर (औरंगाबाद) में रहता हूं। सोचा 'यहां कौन जानता है massage के बारे में?' यहां competition zero है। मैं पहला हूं। 1-2 को service दी। उनको बहुत रिलीफ मिला। उन्होंने word-of-mouth फैलाया। ₹40k-₹45k महीने के कमाता हूँ। छोटे शहर में यह बहुत बड़ी बात है!"
  },
  {
    id: "r8",
    name: "Anuj M.",
    location: "Lucknow",
    date: "May 12, 2025",
    rating: 5,
    verified: true,
    product: "Male Therapist Business Ebook",
    highlight: "150+ Pages, full templates & scripts!",
    story: "मुझे बिल्कुल भरोसा नहीं था। '₹199 में क्या मिलेगा? Scam होगा।' बस curiosity में ले लिया। PDF खोली - 150+ pages! Photos, templates, scripts - सब detailed! Building की aunty को free trial service दी, back pain relief मिला। उन्होंने तुरंत ₹1500 दिए और 2 friends को refer किया!"
  }
];

export const MODULES: ModuleItem[] = [
  {
    number: 1,
    title: "प्रोफेशनल मसाज टेक्निक्स",
    description: "स्टेप-बाय-स्टेप फोटोज़ और आसान वीडियो गाइड के साथ फुल ट्रेनिंग",
    bullets: [
      "स्टेप-बाय-स्टेप HD फोटोज़ व पोश्चर गाइड",
      "बैक पेन, नेक स्टीफनेस और शोल्डर रिलीफ टेक्निक्स",
      "फुल बॉडी रिलैक्सेशन और प्रेशर पॉइंट सीक्रेट्स",
      "बिना थके 60 मिनट तक मसाज करने की प्रोफेशनल ट्रिक्स"
    ]
  },
  {
    number: 2,
    title: "होम सर्विस बिजनेस मॉडल",
    description: "शुरुआती क्लाइंट्स कैसे ढूंढें और सही प्राइसिंग कैसे सेट करें",
    bullets: [
      "अपने ही एरिया और सोसाइटी में पहले 5 क्लाइंट्स पाने का रोडमैप",
      "प्राइसिंग स्ट्रैटेजी: प्रति सेशन ₹2,000 से ₹5,000 कैसे चार्ज करें",
      "सही ग्राहकों की पहचान और उन्हें कन्वर्ट करने का तरीका",
      "बिना किसी दुकान या ऑफिस के 100% होम विजिट सेटअप"
    ]
  },
  {
    number: 3,
    title: "सेफ्टी, प्राइवेसी और बाउंड्रीज़",
    description: "महिलाओं के घर 100% सुरक्षित और प्रोफेशनल तरीके से काम करने के नियम",
    bullets: [
      "महिलाओं के घर सुरक्षित और प्रोफेशनल तरीके से विजिट करना",
      "स्ट्रिक्ट प्रोफेशनल बिहेवियर और बॉडी लैंग्वेज एथिक्स",
      "क्लाइंट वेरिफिकेशन और प्राइवेसी प्रोटोकॉल",
      "लीगल फ्रेमवर्क और सेल्फ-प्रोटेक्शन गाइडलाइंस"
    ]
  },
  {
    number: 4,
    title: "क्लाइंट रिटेंशन और रेफरल सिस्टम",
    description: "एक बार आने वाले क्लाइंट को लाइफटाइम मंथली रेगुलर ग्राहक बनाएं",
    bullets: [
      "रेगुलर क्लाइंट्स बनाने का 5-पॉइंट कम्फर्ट फॉर्मूला",
      "वर्ड-ऑफ़-माउथ और रेफरल से बिना किसी विज्ञापन के क्लाइंट्स पाना",
      "WhatsApp पर फॉलो-अप और अपॉइंटमेंट री-बुकिंग सिस्टम",
      "क्लाइंट्स का अटूट विश्वास जीतने के तरीके"
    ]
  },
  {
    number: 5,
    title: "स्केलिंग रोडमैप (0 से ₹60k+/Month)",
    description: "पार्ट-टाइम से शुरू करके फुल-टाइम हाई-इनकम बिज़नेस में अपग्रेड करें",
    bullets: [
      "पहला 30 दिन: 0 से ₹30,000 कमाने का एक्शन प्लान",
      "2-3 महीने में: ₹30k से ₹60,000+ मंथली इनकम स्केलिंग",
      "वीकेंड पार्ट-टाइम मॉडल vs फुल-टाइम 2-3 सेशन्स/दिन मॉडल",
      "खुद की टीम बनाकर बिज़नेस को मल्टीप्लाई करने का ब्लूप्रिंट"
    ]
  }
];

export const BONUSES: BonusItem[] = [
  {
    number: 1,
    title: "कम्पलीट कम्युनिकेशन पैक",
    bullets: [
      "20+ रेडी-टू-यूज़ WhatsApp टेम्पलेट्स (हिंदी + इंग्लिश)",
      "फोन कॉल क्लोजिंग स्क्रिप्ट्स (पहली बार बात करने का तरीका)",
      "प्रोफेशनल इंट्रोडक्शन और सर्विस कैटलॉग मैसेज"
    ],
    value: 599
  },
  {
    number: 2,
    title: "बिजनेस ग्रोथ व इनकम ट्रैकर",
    bullets: [
      "डेली क्लाइंट और सेशन ट्रैकिंग स्प्रेडशीट",
      "मंथली इनकम और प्रॉफिट कैलकुलेटर",
      "ऑयल, इक्विपमेंट एक्सपेंस मैनेजमेंट टेम्पलेट",
      "ग्रोथ एनालिसिस और रेवेन्यू चार्ट"
    ],
    value: 299
  },
  {
    number: 3,
    title: "लोकल क्लाइंट एक्विजिशन चेकलिस्ट",
    bullets: [
      "50+ लोकल मार्केटिंग और आउटरीच आइडियाज",
      "सोसाइटी व अपार्टमेंट अप्रोच स्ट्रैटेजी",
      "ऑनलाइन फ्री लिस्टिंग गाइड (Justdial, Sulekha, Local Ads)",
      "ऑटोमैटिक रेफरल इंसेंटिव सिस्टम"
    ],
    value: 599
  },
  {
    number: 4,
    title: "प्रीमियम सर्विस अपग्रेड गाइड",
    bullets: [
      "ऐड-ऑन सर्विसेज़ (Aromatherapy, Organic Hot Stone, Ayurvedic Oils)",
      "VIP और लक्ज़री क्लाइंट्स के लिए प्रीमियम पैकेज डिज़ाइन",
      "₹3,000+ से ₹5,000+ प्रति सेशन चार्ज करने के सीक्रेट्स",
      "हाइजीन और 5-स्टार स्पा एंबियन्स किट चेकलिस्ट"
    ],
    value: 899
  },
  {
    number: 5,
    title: "लाइफटाइम कम्युनिटी और मेंटरशिप सपोर्ट",
    bullets: [
      "प्राइवेट WhatsApp और टेलीग्राम कम्युनिटी एक्सेस",
      "मंथली Q&A और टिप्स शेयरिंग सेशन्स",
      "सीनियर थेरेपिस्ट्स के साथ नेटवर्किंग और केस स्टडीज",
      "रेगुलर नए टेक्निक्स और क्लाइंट डीलिंग टिप्स"
    ],
    value: 1499
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: "यह मसाज बिजनेस क्या है और इस E-Book में क्या सिखाया जाता है?",
    answer: "यह एक कम्प्लीट डिजिटल गाइड है जिसमें आपको होम मसाज बिजनेस को जीरो से शुरू करने की पूरी स्टेप-बाय-स्टेप जानकारी दी गई है। इसमें प्रोफेशनल मसाज टेक्निक्स (बैक, नेक, शोल्डर, फुल बॉडी), सही क्लाइंट ढूंढने के तरीके, सुरक्षित व प्रोफेशनल तरीके से महिलाओं के घर विजिट करने के नियम और प्रति सेशन ₹2,000-₹5,000 कमाने का पूरा रोडमैप शामिल है।"
  },
  {
    id: 2,
    question: "क्या इस गाइड से सच में ₹40,000 - ₹60,000 महीने की कमाई की जा सकती है?",
    answer: "हाँ! यदि आप सप्ताह में सिर्फ 4 से 5 सेशन्स भी करते हैं और हर सेशन का ₹2,500 लेते हैं, तो आपकी मंथली कमाई ₹50,000 से अधिक हो जाती है। हमारे 50,000+ स्टूडेंट्स में से सैकड़ों लोग पार्ट-टाइम या फुल-टाइम काम करके यह इनकम हासिल कर रहे हैं।"
  },
  {
    id: 3,
    question: "क्या यह बिजनेस पूरी तरह सुरक्षित और लीगल है?",
    answer: "बिल्कुल 100%। गाइड का सबसे बड़ा मॉड्यूल 'Safety, Boundaries & Professional Conduct' पर है। इसमें आपको महिलाओं के घर जाने के एथिक्स, क्लाइंट वेरिफिकेशन, लीगल बाउंड्रीज और प्रोफेशनल व्यवहार के सारे नियम सिखाए जाते हैं ताकि आप सम्मान और सुरक्षा के साथ काम कर सकें।"
  },
  {
    id: 4,
    question: "बिजनेस शुरू करने के लिए कितना पैसा या इन्वेस्टमेंट चाहिए?",
    answer: "शुरुआत करने के लिए ₹0 इन्वेस्टमेंट की जरूरत है! आपको कोई दुकान, ऑफिस या महंगी मशीनरी नहीं चाहिए। बेसिक मसाज ऑयल और टॉवेल्स ₹200-₹300 में आ जाते हैं। आप अपने घर से, अपने मोबाइल से अपने एरिया में ही सर्विस दे सकते हैं।"
  },
  {
    id: 5,
    question: "मुझे E-Book कब और कैसे मिलेगी?",
    answer: "पेमेंट पूरा होते ही (मात्र ₹199) स्क्रीन पर तुरंत Instant Download लिंक आ जाता है और आपके WhatsApp/Email पर भी चारों PDFs और 5 बोनसेज भेज दिए जाते हैं। आप इसे अपने मोबाइल फोन या लैपटॉप में कभी भी और कितनी भी बार पढ़ सकते हैं।"
  }
];

export const LIVE_PURCHASES = [
  { name: "Rahul S.", city: "Jaipur", time: "2 minutes ago" },
  { name: "Vikram P.", city: "Delhi", time: "4 minutes ago" },
  { name: "Pooja M.", city: "Pune", time: "6 minutes ago" },
  { name: "Suresh K.", city: "Indore", time: "8 minutes ago" },
  { name: "Anil D.", city: "Lucknow", time: "11 minutes ago" },
  { name: "Ramesh T.", city: "Mumbai", time: "14 minutes ago" },
  { name: "Deepak V.", city: "Patna", time: "17 minutes ago" },
];
