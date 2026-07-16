import Reveal from './Reveal.jsx';
import Icon from './Icon.jsx';
import { services } from '../data.js';

export default function About({ lang }) {
  const copy = lang === 'mr'
    ? {
        eyebrow: 'आमच्याबद्दल',
        heading: 'दिनेश नामदेवराव कोर्डे',
        intro: 'अभियांत्रिकी पार्श्वभूमी (ME-EXTC) आणि सर्वांगीण जीवन-मार्गदर्शनाची आवड यातून DINAKO Multi Solutions ची सुरुवात झाली. आरोग्य, अर्थकारण आणि मानसिक स्वास्थ्य हे एकमेकांशी जोडलेले आहेत — हाच विचार आमच्या प्रत्येक सेवेच्या केंद्रस्थानी आहे.',
        body: 'शास्त्रशुद्ध विश्लेषण आणि पारंपरिक ज्ञान यांची सांगड घालून, प्रत्येक व्यक्तीसाठी वैयक्तिक व व्यावहारिक उपाय दिले जातात — मोठे दावे नाही, फक्त प्रामाणिक मार्गदर्शन.',
        highlights: ['विश्वासार्ह मार्गदर्शन', 'वैयक्तिक दृष्टिकोन', 'पारदर्शक प्रक्रिया']
      }
    : {
        eyebrow: 'About us',
        heading: 'Dinesh Namdeorao Korde',
        intro: 'DINAKO Multi Solutions began from a blend of engineering roots (ME-EXTC) and a deep love for holistic life guidance. Health, wealth, and mental wellbeing are closely connected — this belief sits at the heart of every service we offer.',
        body: 'By combining scientific analysis with traditional wisdom, we offer practical and personalized solutions for each person — no exaggerated claims, only honest guidance.',
        highlights: ['Reliable guidance', 'Personal perspective', 'Transparent process']
      };

  return (
    <section id="about" className="bg-navy-800 text-cream">
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-28 grid gap-8 md:grid-cols-[40%_60%] md:gap-10 items-center">
        <Reveal>
          <p className="text-gold font-semibold uppercase tracking-[0.3em] text-xs mb-3">{copy.eyebrow}</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-4xl mb-6">{copy.heading} <span className="text-gold text-xl align-middle">(ME-EXTC)</span></h2>
          <p className="text-cream/75 leading-relaxed mb-4">{copy.intro}</p>
          <p className="text-cream/75 leading-relaxed">{copy.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {copy.highlights.map(t => (
              <span key={t} className="text-xs bg-white/5 border border-gold/25 text-gold px-3 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
        </Reveal>
        <Reveal className="relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0b1f2a] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0b1f2a] to-transparent z-10" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map(s => {
            const IconComp = Icon[s.icon];
            return (
              <div
                key={s.icon}
                className="about-card group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/10 p-0 shadow-[0_16px_36px_-24px_rgba(0,0,0,0.6)] backdrop-blur-sm"
              >
                <div
                  className="about-card__media relative mx-2.5 mt-2.5 h-28 overflow-hidden rounded-[16px]"
                  style={{ backgroundImage: `url('/${s.bgImage}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f2a]/90 via-[#0b1f2a]/20 to-transparent" />
                  <div className="about-card__icon absolute left-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-xl border border-gold/30 bg-[#0b1f2a]/80 text-gold shadow-lg shadow-gold/10">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold/80">{s.tag[lang]}</p>
                    <p className="mt-1 text-xs font-semibold leading-snug text-cream">{s.title[lang]}</p>
                  </div>
                </div>
                <div className="px-3 pb-3 pt-2.5">
                  <p className="text-[13px] leading-relaxed text-cream/75">{s.desc[lang]}</p>
                  <div className="mt-3 inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.25em] text-gold transition-transform duration-300 group-hover:translate-x-1">
                    Explore
                    <span className="ml-2 text-base">→</span>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
