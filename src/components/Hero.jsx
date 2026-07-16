import Reveal from './Reveal.jsx';
import Icon from './Icon.jsx';
import { PHONE_INTL } from '../data.js';

export default function Hero({ lang }) {
  const copy = lang === 'mr'
    ? {
        eyebrow: 'आरोग्य · संपत्ती · मानसिक शांतता',
        title: ['आरोग्य, संपत्ती आणि', 'मानसिक शांततेचा', 'संगम'],
        desc: 'एकाच छताखाली — आरोग्य सल्ला, आर्थिक नियोजन, अंकशास्त्र, क्रिस्टल हीलिंग, वास्तुशास्त्र आणि मानसशास्त्रीय समुपदेशन. दिनेश नामदेवराव कोर्डे यांच्या मार्गदर्शनाखाली तुमच्या आयुष्यातील प्रत्येक पैलू संतुलित करा.',
        cta: 'मोफत सल्ल्यासाठी कॉल करा',
        secondary: 'सर्व सेवा पहा',
        stats: [['6', 'समग्र सेवा'], ['100%', 'वैयक्तिक मार्गदर्शन'], ['20', 'मिनिटे मोफत सत्र']]
      }
    : {
        eyebrow: 'Health · Wealth · Peace of Mind',
        title: ['The meeting point of', 'health, wealth, and', 'inner peace'],
        desc: 'All-in-one guidance for wellness, financial planning, numerology, crystal healing, vastu, and psychological counseling. Let every aspect of your life become balanced under the mentorship of Dinesh Namdeorao Korde.',
        cta: 'Call for free advice',
        secondary: 'Explore all services',
        stats: [['6', 'Holistic services'], ['100%', 'Personal guidance'], ['20', 'minutes free session']]
      };

  return (
    <section id="top" className="relative overflow-hidden bg-navy text-cream">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.svg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/70" aria-hidden="true"></div>
      <div className="absolute inset-0 opacity-[0.06] lotus-divider" aria-hidden="true"></div>
      <div className="hero-ambient absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl" aria-hidden="true"></div>
      <div className="hero-ambient hero-ambient--delay absolute top-16 left-0 w-48 h-48 rounded-full bg-gold/5 blur-3xl" aria-hidden="true"></div>
      <div className="max-w-6xl mx-auto px-5 pt-16 pb-20 md:pt-24 md:pb-28 relative">
        <Reveal>
          <p className="uppercase tracking-[0.35em] text-gold text-xs md:text-sm mb-5">{copy.eyebrow}</p>
        </Reveal>
        <Reveal>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] max-w-full sm:max-w-3xl">
            {copy.title[0]} <span className="text-gold">{copy.title[1]}</span> {copy.title[2]}
          </h1>
        </Reveal>
        <Reveal>
          <p className="mt-6 text-cream/80 text-base sm:text-lg max-w-full sm:max-w-2xl">
            {copy.desc}
          </p>
        </Reveal>
        <Reveal className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a href={`tel:${PHONE_INTL}`} className="hero-cta inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold text-navy transition-colors hover:bg-gold-300 focus-ring sm:w-auto">
            <Icon.phone className="w-5 h-5" /> {copy.cta}
          </a>
          <a href="#services" className="hero-secondary inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/50 px-6 py-3.5 text-cream transition-colors hover:border-gold hover:text-gold focus-ring sm:w-auto">
            {copy.secondary}
          </a>
        </Reveal>
        <Reveal className="mt-14 grid grid-cols-1 gap-4 text-center sm:grid-cols-3 sm:max-w-none">
          {copy.stats.map(([n, l]) => (
            <div key={l} className="stat-card rounded-[24px] border border-white/10 bg-white/5 px-5 py-6 shadow-[0_16px_40px_-28px_rgba(11,31,42,0.4)]">
              <p className="font-display text-3xl text-gold">{n}</p>
              <p className="text-cream/70 text-sm mt-2">{l}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
