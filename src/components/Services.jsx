import Reveal from './Reveal.jsx';
import { Brain, Compass, Gem, HeartPulse, Landmark, Sparkles } from 'lucide-react';
import { services } from '../data.js';

const iconMap = {
  health: HeartPulse,
  finance: Landmark,
  numerology: Sparkles,
  crystal: Gem,
  vastu: Compass,
  mind: Brain,
};

function ServiceCard({ s, lang }) {
  const IconComp = iconMap[s.icon];
  return (
    <Reveal className="group">
      <div className="service-card card-hover h-full rounded-[22px] border border-navy/10 bg-white/75 p-4 shadow-[0_12px_40px_-24px_rgba(11,31,42,0.35)] backdrop-blur-sm">
        <div className="relative mb-5 overflow-hidden rounded-[22px] bg-navy/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,162,75,0.25),_transparent_35%)]" />
          <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: `url('/${s.bgImage}')` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f2a]/80 via-transparent to-transparent" />
          <div className="relative flex items-center justify-between p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/85 text-navy shadow-[0_10px_30px_-22px_rgba(11,31,42,0.35)]">
              <IconComp className="h-6 w-6" />
            </div>
            <span className="rounded-full border border-white/30 bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
              {s.tag[lang]}
            </span>
          </div>
        </div>
        <h3 className="font-display text-lg text-navy">{s.title[lang]}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">{s.desc[lang]}</p>
      </div>
    </Reveal>
  );
}

export default function Services({ lang }) {
  const copy = lang === 'mr'
    ? {
        eyebrow: 'आमच्या सेवा',
        heading: 'एकाच ठिकाणी सर्वांगीण समाधान',
        body: 'शरीर, संपत्ती आणि मन — तिन्ही आघाड्यांवर संतुलन राखण्यासाठी सहा तज्ज्ञ सेवा.'
      }
    : {
        eyebrow: 'Our services',
        heading: 'Holistic solutions in one place',
        body: 'Body, wealth, and mind — six specialist services to bring balance across all three areas.'
      };

  return (
    <section id="services" className="max-w-6xl mx-auto px-5 py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald">{copy.eyebrow}</p>
        <h2 className="font-display text-3xl text-navy md:text-4xl">{copy.heading}</h2>
        <p className="mt-4 text-ink/65">{copy.body}</p>
      </Reveal>
      <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((s) => <ServiceCard key={s.icon} s={s} lang={lang} />)}
      </div>
    </section>
  );
}
