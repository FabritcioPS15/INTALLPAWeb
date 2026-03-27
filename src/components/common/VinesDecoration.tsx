import { motion } from 'framer-motion';

export default function VinesDecoration({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute z-0 opacity-20 ${className}`}>
      <svg width="200" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M100 0C100 50 150 100 150 150C150 200 100 250 100 300C100 350 50 380 50 400"
          stroke="var(--primary-green)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {/* Hojas a lo largo del tallo */}
        <motion.path
          d="M105 20C120 15 130 25 125 35C115 40 105 30 105 20Z"
          fill="var(--accent-green)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
        <motion.path
          d="M135 70C155 60 170 75 160 90C145 100 130 85 135 70Z"
          fill="var(--primary-green)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        <motion.path
          d="M140 120C160 120 170 140 150 155C135 160 130 140 140 120Z"
          fill="var(--gold-primary)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />
        <motion.path
          d="M120 200C110 180 90 185 95 205C100 220 115 215 120 200Z"
          fill="var(--accent-green)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.5 }}
        />
        <motion.path
          d="M105 280C85 270 70 285 80 300C95 310 110 295 105 280Z"
          fill="var(--primary-green)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.5 }}
        />
        <motion.path
          d="M70 340C50 330 35 345 45 360C60 370 75 355 70 340Z"
          fill="var(--gold-primary)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.7, duration: 0.5 }}
        />
      </svg>
    </div>
  );
}
