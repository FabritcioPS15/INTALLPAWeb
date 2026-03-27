import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'dark' | 'outline';
}

const PremiumButton = ({ label, onClick, className = '', type = 'button', variant = 'dark' }: ButtonProps) => {
  const isDark = variant === 'dark';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group relative inline-flex items-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 ${
        isDark
          ? 'bg-[var(--primary-green)] text-white hover:bg-[var(--accent-green)]'
          : 'bg-transparent text-[var(--primary-green)] border border-[var(--primary-green)] hover:bg-[var(--primary-green)] hover:text-white'
      } ${className}`}
      style={{ borderRadius: '2px' }}
    >
      {/* Shine sweep on hover */}
      <span
        className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
          pointerEvents: 'none',
        }}
      />
      <span className="relative z-10">{label}</span>
      <ArrowRight
        className="relative z-10 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
        strokeWidth={2}
      />
    </button>
  );
};

export default PremiumButton;
