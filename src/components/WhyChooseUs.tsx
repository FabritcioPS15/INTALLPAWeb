import { Star, Users, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import PremiumButton from './common/PremiumButton';
import { useNavigate } from 'react-router-dom';
import VinesDecoration from './common/VinesDecoration';

const reasons = [
  {
    icon: Leaf,
    title: 'Producción 100% Natural',
    description: 'Nuestros productos son cultivados sin el uso de químicos agresivos, respetando el equilibrio natural del ecosistema.',
  },
  {
    icon: Star,
    title: 'Certificación y estándares internacionales',
    description: 'Cumplimos con exigencias de calidad para mercados globales, garantizando confianza en cada producto.',
  },
  {
    icon: Users,
    title: 'Comercio justo y desarrollo local',
    description: 'Apoyamos a comunidades agrícolas, promoviendo crecimiento económico sostenible.',
  },
];

export default function WhyChooseUs() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 bg-white overflow-hidden relative">
      <VinesDecoration className="top-10 left-0" />
      <VinesDecoration className="bottom-10 right-0 rotate-180" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--primary-green)' }}>
            ¿Por qué elegirnos?
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: 'var(--gold-primary)' }}></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            En INTALLPA FOODS, trabajamos directamente con agricultores locales, promoviendo prácticas sostenibles y comercio justo. Nuestro compromiso es ofrecer productos agroindustriales que cumplan con los más altos estándares de calidad y responsabilidad ambiental.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group relative"
                style={{ backgroundColor: 'white', borderRadius: '2px', border: '1px solid var(--primary-green)' }}
              >
                <div className="absolute inset-0 bg-[var(--bg-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative z-10">
                  <div className="relative w-20 h-20 mx-auto mb-8">
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                      <motion.rect
                        width="100%"
                        height="100%"
                        fill="transparent"
                        stroke="var(--gold-primary)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: index * 0.2 + 0.5, type: "tween", ease: "easeInOut" }}
                      />
                    </svg>
                    <div className="w-16 h-16 flex items-center justify-center mx-auto absolute inset-2 bg-transparent group-hover:scale-110 transition-transform duration-300 z-0 shadow-sm" style={{ border: '1px solid var(--primary-green)' }}>
                      <Icon className="w-8 h-8 text-[var(--primary-green)]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--primary-green)' }}>
                    {reason.title}
                  </h3>
                  <div className="w-12 h-px mx-auto mb-4" style={{ backgroundColor: 'var(--gold-primary)' }}></div>
                  <p className="text-gray-600 leading-relaxed font-light">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 p-16 text-center relative overflow-hidden group border border-[var(--gold-primary)]" 
          style={{ background: 'var(--bg-light)', borderRadius: '2px' }}
        >
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6" style={{ color: 'var(--primary-green)' }}>
              ¿Buscas un proveedor confiable de productos agroindustriales?
            </h3>
            <p className="text-gray-700 text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Contáctanos y descubre cómo podemos ayudarte a llevar calidad natural a tu negocio.
            </p>
            <div className="flex justify-center">
              <PremiumButton label="CONTÁCTANOS" onClick={() => navigate('/contact')} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


