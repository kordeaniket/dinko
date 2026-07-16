import Reveal from './Reveal.jsx';
import Icon from './Icon.jsx';
import { CalendarDays, Handshake, Check, MessageCircle } from 'lucide-react';
import { audience, features, PHONE } from '../data.js';

export default function Opportunity({ lang }) {
  const copy = lang === 'mr'
    ? {
        eyebrow: 'करिअर संधी',
        heading: 'Financial Planner बना, स्वतःचा यशस्वी करिअर घडवा',
        intro: 'तुमच्या ओळखीत अशी एखादी व्यक्ती आहे का, जी चांगल्या करिअरच्या संधी, लवचिक वेळ आणि उत्पन्नाच्या संधीच्या शोधात आहे? सर्व प्रोफेशनल्ससाठी ही संधी खुली आहे.',
        featuresHeading: 'या संधीची वैशिष्ट्ये',
        freeSession: {
          eyebrow: 'मोफत माहिती सत्र',
          title: 'फक्त 20 मिनिटे द्या आणि जाणून घ्या',
          points: ['Financial Planner कसे बनावे?', 'कामाची पद्धत आणि संधी', 'प्रशिक्षण, सपोर्ट आणि करिअर ग्रोथ', 'उत्पन्नाची रचना (परफॉर्मन्स आधारित)'],
          note: 'कोणतेही बंधन नाही — फक्त माहिती घ्या आणि निर्णय घ्या!'
        },
        referral: {
          eyebrow: 'तुमची एक छोटीशी मदत',
          title: 'एखाद्याला रेफर करा, संधीचा लाभ द्या',
          body: 'आपल्या ओळखीतील अशा व्यक्तीला या संधीचा लाभ घेता येईल — त्यांच्यापर्यंत आमचा संपर्क क्रमांक किंवा हा संदेश शेअर करा. तुमची शिफारस कोणाचातरी करिअर बदलू शकते!',
          button: 'व्हॉट्सअ‍ॅपवर शेअर करा'
        }
      }
    : {
        eyebrow: 'Career opportunity',
        heading: 'Become a Financial Planner and build a successful career',
        intro: 'Is there someone in your circle looking for a promising career path, flexible timing, and strong earning potential? This opportunity is open to professionals from all backgrounds.',
        featuresHeading: 'What makes this opportunity special',
        freeSession: {
          eyebrow: 'Free information session',
          title: 'Spend just 20 minutes and learn more',
          points: ['How to become a Financial Planner?', 'Work process and opportunity structure', 'Training, support, and career growth', 'Income model based on performance'],
          note: 'No obligation — just learn and decide.'
        },
        referral: {
          eyebrow: 'A small way to help',
          title: 'Refer someone and open the door to opportunity',
          body: 'Someone in your network can benefit from this opportunity — share our contact details or this message with them. Your recommendation could change someone’s career.',
          button: 'Share on WhatsApp'
        }
      };

  return (
    <section id="opportunity" className="max-w-6xl mx-auto px-5 py-20 md:py-28">
      <Reveal className="max-w-3xl">
        <p className="text-emerald font-semibold uppercase tracking-[0.3em] text-xs mb-3">{copy.eyebrow}</p>
        <h2 className="font-display text-3xl md:text-4xl text-navy">{copy.heading}</h2>
        <p className="mt-4 text-ink/65">{copy.intro}</p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {audience.map(a => {
          const IconComp = Icon[a.icon];
          return (
            <Reveal key={a.title[lang]} className="group">
              <div className="opportunity-card group h-full overflow-hidden rounded-[24px] border border-[#d8b56a]/25 bg-[linear-gradient(145deg,#fffdf8_0%,#f7efe0_100%)] shadow-[0_16px_36px_-24px_rgba(11,31,42,0.45)]">
                <div className="opportunity-card__media relative h-32 sm:h-36" style={{ backgroundImage: `url('/${a.bgImage}')` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f2a]/95 via-[#0b1f2a]/25 to-transparent" />
                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-cream shadow-lg shadow-[#0b1f2a]/20">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f4d88d]">{copy.eyebrow}</p>
                    <h3 className="mt-1 font-display text-lg leading-tight text-white">{a.title[lang]}</h3>
                  </div>
                </div>
                <div className="opportunity-card__body px-5 pb-5 pt-4">
                  <div className="mb-3 flex items-center gap-3 rounded-full bg-[#f9f1d9] px-3 py-2 text-sm font-semibold text-[#2b3a42] shadow-sm shadow-[#0b1f2a]/8">
                    <CalendarDays className="h-4 w-4 text-[#ae8d3b]" />
                    {lang === 'mr' ? 'फक्त 20 मिनिटांत माहिती' : 'Only 20 minutes info'}
                  </div>
                  <ul className="space-y-2.5 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {a.points.map(p => (
                      <li key={p[lang]} className="flex gap-2 text-sm leading-relaxed text-ink/70"><Check className="w-4 h-4 text-emerald shrink-0 mt-0.5" /><span>{p[lang]}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-16">
        <h3 className="font-display text-2xl text-navy text-center mb-10">{copy.featuresHeading}</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => {
            const IconComp = Icon[f.icon];
            return (
              <div key={f.icon} className="feature-card flex gap-4 p-5 rounded-[22px] border border-[#d8b56a]/25 bg-[linear-gradient(135deg,#fffdf8_0%,#f6ebd8_100%)] shadow-[0_12px_30px_-24px_rgba(11,31,42,0.35)]">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#14313d]/10 text-[#14313d] flex items-center justify-center"><IconComp className="w-5 h-5" /></div>
                <div>
                  <p className="font-semibold text-[#14313d]">{f.title[lang]}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#4f5b63]">{f.desc[lang]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal className="mt-14 grid md:grid-cols-2 gap-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy p-8 shadow-[0_24px_60px_-32px_rgba(11,31,42,0.45)]">
          <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/3 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
          <div className="absolute left-0 top-0 h-24 w-24 -translate-x-1/4 -translate-y-1/4 rounded-full bg-[#4f9a85]/15 blur-3xl" aria-hidden="true" />
          <div className="relative mb-6 flex items-center gap-3 rounded-full border border-emerald/20 bg-white/10 px-4 py-3 text-sm text-cream shadow-sm shadow-emerald/10">
            <CalendarDays className="h-5 w-5 text-gold" />
            <span>{lang === 'mr' ? 'मोफत माहिती सत्र' : 'Free information session'}</span>
          </div>
          <p className="text-gold font-semibold uppercase tracking-[0.25em] text-xs mb-3">{copy.freeSession.eyebrow}</p>
          <h4 className="font-display text-xl mb-4 text-cream">{copy.freeSession.title}</h4>
          <ul className="space-y-3 text-cream/80 text-sm">
            {copy.freeSession.points.map(i => (
              <li key={i} className="flex items-start gap-3"><Check className="mt-1 h-4 w-4 text-emerald" />{i}</li>
            ))}
          </ul>
          <p className="mt-5 text-gold text-sm font-medium">{copy.freeSession.note}</p>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-emerald/20 bg-emerald/10 p-8 shadow-[0_24px_60px_-32px_rgba(11,31,42,0.34)]">
          <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
          <div className="relative mb-6 flex items-center gap-3 rounded-full border border-white/20 bg-white/15 px-4 py-3 text-sm text-navy shadow-sm shadow-emerald/10">
            <Handshake className="h-5 w-5 text-emerald" />
            <span>{lang === 'mr' ? 'तुमची एक छोटीशी मदत' : 'A small way to help'}</span>
          </div>
          <p className="text-emerald font-semibold uppercase tracking-[0.25em] text-xs mb-3">{copy.referral.eyebrow}</p>
          <h4 className="font-display text-xl text-navy mb-4">{copy.referral.title}</h4>
          <p className="text-ink/70 text-sm leading-relaxed">{copy.referral.body}</p>
          <a href={`https://wa.me/91${PHONE}?text=${encodeURIComponent(lang === 'mr' ? 'DINAKO Multi Solutions - Financial Planner संधीबद्दल माहिती हवी आहे.' : 'DINAKO Multi Solutions - I would like to know more about the Financial Planner opportunity.')}`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-emerald text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors focus-ring">
            <MessageCircle className="w-4 h-4" /> {copy.referral.button}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
