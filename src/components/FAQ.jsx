import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { faqs } from '../data.js';

export default function FAQ({ lang }) {
  const [openIdx, setOpenIdx] = useState(0);
  const copy = lang === 'mr'
    ? { eyebrow: 'वारंवार विचारले जाणारे प्रश्न', heading: 'तुमच्या शंकांचे निरसन' }
    : { eyebrow: 'Frequently asked questions', heading: 'Answers to your questions' };

  return (
    <section id="faq" className="bg-navy-800 text-cream">
      <div className="max-w-3xl mx-auto px-5 py-16 md:py-24">
        <Reveal className="text-center mb-12">
          <p className="text-gold font-semibold uppercase tracking-[0.3em] text-xs mb-3">{copy.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl">{copy.heading}</h2>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <Reveal key={f.q[lang]} className="overflow-hidden rounded-[20px] border border-white/10 bg-white/5 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.55)]">
                <button className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors duration-300 hover:bg-white/10 focus-ring" onClick={() => setOpenIdx(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  <span className="font-medium text-cream">{f.q[lang]}</span>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-lg text-gold transition-all duration-300 ${isOpen ? 'rotate-45 bg-gold/20' : ''}`}>
                    +
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-cream/75">{f.a[lang]}</div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
