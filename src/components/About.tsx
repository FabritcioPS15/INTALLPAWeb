import { Target, Eye, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    icon: Target,
    title: 'Nuestra Misión',
    description: 'Proveer productos agroindustriales superiores que cumplan con estándares internacionales, promoviendo prácticas agrícolas sostenibles.',
    accent: 'var(--accent-green)',
  },
  {
    icon: Eye,
    title: 'Nuestra Visión',
    description: 'Ser una empresa reconocida globalmente en el sector agroindustrial, destacada por calidad, sostenibilidad e innovación.',
    accent: 'var(--gold-primary)',
  },
  {
    icon: Award,
    title: 'Nuestros Valores',
    description: 'Calidad, sostenibilidad, confiabilidad y satisfacción del cliente son el pilar de todo lo que hacemos.',
    accent: 'var(--secondary-green)',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--primary-green)' }}>
            Sobre INTALLPA FOODS
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--gold-primary)' }}></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Somos una empresa agroindustrial líder dedicada a producir y distribuir productos agrícolas de alta calidad.
            Con años de experiencia y un compromiso con la sostenibilidad, atendemos mercados globales con excelencia e integridad.
          </p>
        </motion.div>

        {/* Unified connected cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 overflow-hidden shadow-xl"
          style={{ borderRadius: '2px', border: '1px solid #e0e0e0' }}
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="group relative p-10 md:p-12 text-center cursor-default transition-all duration-500 bg-[#f5f5f5] hover:bg-white"
                style={{
                  borderRight: index < cards.length - 1 ? '1px solid #e0e0e0' : 'none',
                }}
              >
                {/* Top accent bar — hidden by default, slides in on hover */}
                <div
                  className="absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: card.accent }}
                />

                {/* Icon */}
                <div
                  className="w-16 h-16 mx-auto mb-8 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:border-[var(--primary-green)] group-hover:bg-white"
                  style={{
                    borderRadius: '2px',
                    border: '1px solid #d0d0d0',
                    backgroundColor: '#f0f0f0',
                  }}
                >
                  <Icon
                    className="w-7 h-7 text-gray-400 group-hover:text-[var(--primary-green)] transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-3 transition-colors duration-500 text-gray-400 group-hover:text-[var(--primary-green)]"
                >
                  {card.title}
                </h3>

                {/* Divider */}
                <div
                  className="w-8 h-px mx-auto mb-4 transition-all duration-500 group-hover:w-12"
                  style={{ backgroundColor: '#ccc' }}
                />

                {/* Description */}
                <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-600 transition-colors duration-500">
                  {card.description}
                </p>

                {/* Bottom subtle glow on hover */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-2xl pointer-events-none"
                  style={{ backgroundColor: card.accent }}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
