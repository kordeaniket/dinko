import { useState } from 'react';
import Icon from './Icon.jsx';
import { PHONE, PHONE_INTL } from '../data.js';

export default function Nav({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const links = lang === 'mr'
    ? [["सेवा", "#services"], ["आमच्याबद्दल", "#about"], ["संधी", "#opportunity"], ["प्रश्न", "#faq"], ["संपर्क", "#contact"]]
    : [["Services", "#services"], ["About", "#about"], ["Opportunity", "#opportunity"], ["FAQ", "#faq"], ["Contact", "#contact"]];

  const toggleLabel = lang === 'mr' ? 'EN' : 'मराठी';
  const toggleAria = lang === 'mr' ? 'Switch to English' : 'मराठीत बदल करा';
  const tagline = lang === 'mr'
    ? 'योग्य संधीची सुरुवात आजच करा – आर्थिकदृष्ट्या सुरक्षित भविष्य घडवा!'
    : 'Start the right opportunity today — build a financially secure future!';

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur border-b border-gold/20">
      <div className="overflow-hidden border-b border-gold/15 bg-[#07161e]">
        <div className="relative whitespace-nowrap py-2">
          <div className="animate-marquee flex items-center gap-8 px-4 text-[11px] uppercase tracking-[0.22em] text-cream/75 sm:px-6 sm:text-[13px]">
            <span>{tagline}</span>
            <span>{tagline}</span>
            <span>{tagline}</span>
          </div>
        </div>
      </div>
      <nav className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 px-5 py-3">
        <a href="#top" className="flex items-center gap-2 rounded focus-ring">
          <svg width="34" height="34" viewBox="0 0 100 100" aria-hidden="true"><rect width="100" height="100" rx="20" fill="#C9A24B"/><path d="M50 72 C28 61 28 34 50 22 C72 34 72 61 50 72Z" fill="#0B1F2A"/></svg>
          <span className="font-display text-gold text-xl leading-none">DINAKO <span className="block text-[10px] tracking-[0.3em] text-cream/70 font-body">MULTI SOLUTIONS</span></span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-cream/90 font-medium">
          {links.map(([label, href]) => (
            <li key={href}><a href={href} className="hover:text-gold transition-colors focus-ring rounded">{label}</a></li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <button type="button" aria-label={toggleAria} onClick={() => setLang(lang === 'mr' ? 'en' : 'mr')} className="lang-switch rounded-full border border-gold/40 px-3 py-1.5 text-sm text-gold hover:bg-gold/10 transition-colors">
            {toggleLabel}
          </button>
          <a href={`tel:${PHONE_INTL}`} className="nav-action inline-flex items-center gap-2 bg-gold text-navy font-semibold px-4 py-2 rounded-full hover:bg-gold-300 transition-colors focus-ring">
            <Icon.phone className="w-4 h-4" /> {PHONE}
          </a>
        </div>
        <button aria-label={lang === 'mr' ? 'मेनू उघडा' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)} className="md:hidden text-gold focus-ring rounded p-2">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-navy-800 border-t border-gold/20 px-5 py-4">
          <ul className="flex flex-col gap-4 text-cream">
            {links.map(([label, href]) => (
              <li key={href}><a href={href} onClick={() => setOpen(false)} className="block py-1 focus-ring rounded">{label}</a></li>
            ))}
            <li>
              <button type="button" aria-label={toggleAria} onClick={() => { setLang(lang === 'mr' ? 'en' : 'mr'); setOpen(false); }} className="lang-switch rounded-full border border-gold/40 px-3 py-1.5 text-sm text-gold mt-1">
                {toggleLabel}
              </button>
            </li>
            <li><a href={`tel:${PHONE_INTL}`} className="nav-action inline-flex items-center gap-2 bg-gold text-navy font-semibold px-4 py-2 rounded-full mt-1"><Icon.phone className="w-4 h-4" /> {PHONE}</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
