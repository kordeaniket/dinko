import Icon from './Icon.jsx';
import { PHONE, PHONE_INTL } from '../data.js';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href={`https://wa.me/91${PHONE}`} target="_blank" rel="noopener noreferrer" aria-label="व्हॉट्सअ‍ॅप करा" className="w-14 h-14 rounded-full bg-emerald text-white flex items-center justify-center shadow-lg shadow-emerald-700/30 hover:scale-105 transition-transform focus-ring">
        <Icon.whatsapp className="w-6 h-6" />
      </a>
      <a href={`tel:${PHONE_INTL}`} aria-label="कॉल करा" className="w-14 h-14 rounded-full bg-gold text-navy flex items-center justify-center shadow-lg shadow-gold/30 hover:scale-105 transition-transform focus-ring">
        <Icon.phone className="w-6 h-6" />
      </a>
    </div>
  );
}
