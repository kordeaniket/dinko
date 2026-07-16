import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Opportunity from './components/Opportunity.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import FloatingCTA from './components/FloatingCTA.jsx';

export default function App() {
  const [lang, setLang] = useState('mr');

  useEffect(() => {
    document.documentElement.lang = lang === 'mr' ? 'mr' : 'en';
  }, [lang]);

  return (
    <>
      <Nav lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <About lang={lang} />
        <Opportunity lang={lang} />
        <FAQ lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingCTA />
    </>
  );
}
