import { useEffect, useRef } from 'react';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el); } });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export default function Reveal({ children, className = "", as: Tag = "div" }) {
  const ref = useReveal();
  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>;
}
