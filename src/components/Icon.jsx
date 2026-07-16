const Icon = {
  health: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M12 21s-7.5-4.6-9.6-9.1C1 8.7 2.6 5.5 5.8 5c2-.3 3.4.8 4.2 2 .8-1.2 2.2-2.3 4.2-2 3.2.5 4.8 3.7 3.4 6.9C19.5 16.4 12 21 12 21z"/><path d="M8 12h2l1-2 2 4 1-2h2"/></svg>,
  finance: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/><circle cx="7" cy="15" r="1"/><circle cx="11" cy="10" r="1"/><circle cx="14" cy="13" r="1"/><circle cx="19" cy="6" r="1"/></svg>,
  numerology: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M7 9h.01M12 9h.01M17 9h.01M7 13h.01M12 13h.01M17 13h.01M7 17h.01M12 17h.01M17 17h.01"/></svg>,
  crystal: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M12 2l6 6-6 14L6 8z"/><path d="M6 8h12M9 8l3 14 3-14"/></svg>,
  vastu: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/><path d="M12 3v3"/></svg>,
  mind: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M9 3a5 5 0 00-5 5c0 1.6.7 2.5 1.4 3.3.6.7 1.1 1.3 1.1 2.2V16a2 2 0 002 2h1"/><path d="M15 3a5 5 0 015 5c0 1.6-.7 2.5-1.4 3.3-.6.7-1.1 1.3-1.1 2.2V16a2 2 0 01-2 2h-1"/><path d="M9 21h6M10 18v3M14 18v3"/></svg>,
  phone: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.6c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1z"/></svg>,
  whatsapp: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M20 3.9A10 10 0 003.3 16.4L2 22l5.7-1.5A10 10 0 1020 3.9zM12 20a8 8 0 01-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1112 20zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.2.2-.4.1-.1 0-.3 0-.4-.1-.1-.5-1.3-.7-1.8-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3 1 2.5c.1.1 1.6 2.5 4 3.5.6.2 1 .4 1.3.5.6.2 1 .1 1.4-.1.4-.2 1.4-.6 1.6-1.1.2-.5.2-.9.1-1z"/></svg>,
  check: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M20 6L9 17l-5-5"/></svg>,
  clock: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>,
  trophy: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 01-10 0V4z"/><path d="M7 5H4a3 3 0 003 3M17 5h3a3 3 0 01-3 3"/></svg>,
  shield: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z"/></svg>,
  people: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><circle cx="9" cy="8" r="3"/><path d="M2 20c0-3 3-5 7-5s7 2 7 5"/><circle cx="17" cy="8" r="2.5"/><path d="M22 20c0-2.3-1.7-4-4-4.6"/></svg>,
  chart: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="5" width="3" height="13"/></svg>,
  home: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M3 10.5L12 3l9 7.5"/><path d="M6 9.5V21h12V9.5"/><path d="M10 21v-5h4v5"/></svg>,
  briefcase: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="3" y="7" width="18" height="12" rx="2"/><path d="M8 7V5h8v2"/><path d="M8 12h8"/></svg>,
};

export default Icon;
