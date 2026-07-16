import Reveal from './Reveal.jsx';
import { Phone, MessageCircleMore, Sparkles, HeartPulse, Landmark, CircleDollarSign, Brain, Compass, Gem } from 'lucide-react';
import { services, PHONE, PHONE_INTL } from '../data.js';

export default function Contact({ lang }) {
  const copy = lang === 'mr'
    ? {
      eyebrow: 'संपर्क',
      heading: 'आजच योग्य संधीची सुरुवात करा',
      body: 'आर्थिकदृष्ट्या सुरक्षित भविष्य घडवा — आरोग्य, संपत्ती व मानसिक शांततेसाठी आजच संपर्क साधा.',
      call: 'कॉल करा',
      whatsapp: 'व्हॉट्सअ‍ॅप करा',
      servicesTitle: 'आमच्या सेवा'
    }
    : {
      eyebrow: 'Contact',
      heading: 'Start the right opportunity today',
      body: 'Build a financially secure future — reach out today for wellness, wealth, and mental peace.',
      call: 'Call now',
      whatsapp: 'WhatsApp now',
      servicesTitle: 'Our services'
    };

  const iconMap = {
    health: HeartPulse,
    finance: Landmark,
    numerology: Sparkles,
    crystal: Gem,
    vastu: Compass,
    mind: Brain,
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 py-20 md:py-28">
      <Reveal className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1f2a] shadow-[0_24px_60px_-24px_rgba(11,31,42,0.55)]">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/contact-bg.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,31,42,0.93),rgba(11,31,42,0.78))]" aria-hidden="true" />
        <div className="relative grid gap-8 p-6 md:grid-cols-2 md:p-14 md:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">{copy.eyebrow}</p>
            <h2 className="mb-4 font-display text-3xl text-cream md:text-4xl">{copy.heading}</h2>
            <p className="mb-8 max-w-xl text-cream/75">{copy.body}</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-cream">{PHONE}</p>
                  <p className="text-xs text-cream/50">दिनेश नामदेवराव कोरडे · ME-EXTC</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={`tel:${PHONE_INTL}`} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold text-navy transition-colors hover:bg-[#f3d289] focus-ring sm:w-auto">
                <Phone className="h-5 w-5" /> {copy.call}
              </a>
              <a href={`https://wa.me/91${PHONE}`} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald px-6 py-3.5 font-semibold text-white transition-colors hover:bg-emerald-700 focus-ring sm:w-auto">
                <MessageCircleMore className="h-5 w-5" /> {copy.whatsapp}
              </a>
            </div>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/10 p-6 backdrop-blur-md">
            <p className="mb-4 font-display text-lg text-cream">{copy.servicesTitle}</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {services.map(s => {
                const IconComp = iconMap[s.icon];
                return (
                  <li key={s.icon} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-cream/80">
                    <IconComp className="h-4 w-4 shrink-0 text-gold" /> {s.title[lang]}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
