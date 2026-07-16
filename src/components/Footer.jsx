import { PHONE, PHONE_INTL } from '../data.js';

export default function Footer({ lang }) {
  const copy = lang === 'mr'
    ? '© 2026 DINAKO Multi Solutions — उद्याच्या चांगल्या काळासाठी स्मार्ट उपाय'
    : '© 2026 DINAKO Multi Solutions — Smart solutions for a better tomorrow';

  return (
    <footer className="border-t border-white/10 bg-navy-800 text-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm md:flex-row md:items-center md:justify-between">
        <a href="#top" className="flex items-center gap-2 rounded focus-ring">
          <svg width="34" height="34" viewBox="0 0 100 100" aria-hidden="true">
            <rect width="100" height="100" rx="20" fill="#C9A24B" />
            <path d="M50 72 C28 61 28 34 50 22 C72 34 72 61 50 72Z" fill="#0B1F2A" />
          </svg>
          <span className="font-display text-xl leading-none text-gold">
            DINAKO <span className="block text-[10px] font-body tracking-[0.3em] text-cream/70">MULTI SOLUTIONS</span>
          </span>
        </a>

        <p className="text-center leading-6 md:flex-1 md:text-center">{copy}</p>

        <a href={`tel:${PHONE_INTL}`} className="inline-flex items-center justify-center rounded-full border border-gold/20 bg-gold/10 px-4 py-2 font-medium text-gold transition-colors hover:bg-gold/20 hover:text-[#f7d371] focus-ring">
          {PHONE}
        </a>
      </div>
    </footer>
  );
}
