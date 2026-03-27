import { CheckCircle, Shield, Microscope, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import VinesDecoration from './common/VinesDecoration';

export default function Quality() {
  const qualityPoints = [
    {
      icon: CheckCircle,
      title: 'Control de Calidad',
      description: 'Pruebas rigurosas en cada etapa de producción garantizan una excelencia consistente.',
    },
    {
      icon: Shield,
      title: 'Estándares certificados',
      description: 'Todos nuestros productos cumplen con las certificaciones y normas de seguridad internacionales.',
    },
    {
      icon: Microscope,
      title: 'Análisis de laboratorio',
      description: 'Instalaciones de vanguardia para el análisis integral y detallado de cada producto.',
    },
    {
      icon: TrendingUp,
      title: 'Mejora continua',
      description: 'Innovación constante y optimización de procesos para alcanzar siempre mejores resultados.',
    },
  ];

  return (
    <section id="quality" className="py-24 px-4 overflow-hidden relative" style={{ backgroundColor: 'white' }}>
      <VinesDecoration className="top-0 right-0 rotate-180" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--primary-green)' }}>
              Excelencia Productiva y Control de Calidad
            </h2>
            <div className="w-24 h-1 mb-8" style={{ backgroundColor: 'var(--gold-primary)' }}></div>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed font-light">
              Nuestro compromiso con la calidad comienza en el origen y se mantiene en cada etapa del proceso productivo.
              Empleamos la más avanzada tecnología y mejores prácticas para garantizar que nuestros productos superen todas las expectativas.
            </p>

            <div className="space-y-10">
              {qualityPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="flex items-start gap-6 group p-5 hover:shadow-sm transition-all border border-transparent hover:border-gray-100"
                    style={{ borderRadius: '2px' }}
                  >
                    <div className="w-14 h-14 rounded-none flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative" style={{ border: '1px solid var(--primary-green)' }}>
                      <div className="absolute inset-1 bg-[var(--bg-light)] -z-10 transition-colors group-hover:bg-[var(--accent-green)]"></div>
                      <Icon className="w-6 h-6 text-[var(--primary-green)] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--primary-green)' }}>
                        {point.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-light">{point.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative mt-12 lg:mt-0 p-8"
          >
            {/* SVG Path Animation */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
              <motion.rect
                width="100%"
                height="100%"
                fill="transparent"
                stroke="var(--gold-primary)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                variants={{
                  visible: { pathLength: 1, transition: { duration: 2, type: "tween", ease: "easeInOut" } }
                }}
              />
              <motion.rect
                x="4%"
                y="4%"
                width="92%"
                height="92%"
                fill="transparent"
                stroke="var(--primary-green)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                variants={{
                  visible: { pathLength: 1, transition: { duration: 2, delay: 0.5, type: "tween", ease: "easeInOut" } }
                }}
              />
            </svg>

            <div className="relative z-0 overflow-hidden shadow-xl" style={{ borderRadius: '2px' }}>
              <motion.img
                initial={{ scale: 1.2, opacity: 0 }}
                variants={{
                  visible: { scale: 1, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } }
                }}
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1200"
                alt="Control de Calidad"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              variants={{ visible: { opacity: 0.2, scale: 1, transition: { duration: 1, delay: 0.5 } } }}
              className="absolute -bottom-8 -left-8 w-40 h-40 -z-10" 
              style={{ border: '1px solid var(--gold-primary)', backgroundColor: 'transparent' }} 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              variants={{ visible: { opacity: 0.2, scale: 1, transition: { duration: 1, delay: 0.7 } } }}
              className="absolute -top-8 -right-8 w-40 h-40 -z-10 border" 
              style={{ border: '1px solid var(--primary-green)' }} 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

