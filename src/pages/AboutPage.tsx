import { Target, Eye, Award, CheckCircle, Users, Zap } from 'lucide-react';
import Banner from '../components/Banner';
import { motion } from 'framer-motion';
import NumberCounter from '../components/common/NumberCounter';
import VinesDecoration from '../components/common/VinesDecoration';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Misión',
      description: 'Proveer productos agroindustriales de calidad superior que cumplan estándares internacionales, promoviendo prácticas agrícolas sostenibles y contribuyendo a la seguridad alimentaria global.',
    },
    {
      icon: Eye,
      title: 'Visión',
      description: 'Ser un líder reconocido mundialmente en el sector agroindustrial, destacando por nuestra calidad, sostenibilidad, innovación y compromiso inquebrantable con el cliente.',
    },
    {
      icon: Award,
      title: 'Valores',
      description: 'Calidad, sostenibilidad, confiabilidad, satisfacción del cliente e integridad son el núcleo central de todo lo que hacemos.',
    },
  ];

  const highlights = [
    { icon: Users, label: 'Expertos', value: 200, suffix: '+' },
    { icon: Zap, label: 'Años de Experiencia', value: 25, suffix: '+' },
    { icon: CheckCircle, label: 'Certificaciones', value: 15, suffix: '+' },
  ];



  return (
    <div>
      <Banner
        title="Acerca de INTALLPA FOODS"
        subtitle="Agroindustria líder comprometida con la excelencia, la naturaleza y la sostenibilidad."
        image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80"
      />

      <section className="py-24 px-4 bg-[var(--bg-light)] relative overflow-hidden">
        <VinesDecoration className="top-0 left-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white p-10 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-2 relative"
                  style={{ borderRadius: '2px', border: '1px solid var(--gold-primary)' }}
                >
                  <div className="w-16 h-16 rounded-none flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform shadow-sm" style={{ border: '1px solid var(--primary-green)', backgroundColor: 'transparent' }}>
                    <Icon className="w-8 h-8 text-[var(--primary-green)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4" style={{ color: 'var(--primary-green)' }}>
                    {value.title}
                  </h3>
                  <div className="w-12 h-0.5 mx-auto mb-6" style={{ backgroundColor: 'var(--gold-primary)' }}></div>
                  <p className="text-gray-600 text-center leading-relaxed font-light">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <VinesDecoration className="bottom-0 right-0 rotate-180" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4" style={{ color: 'var(--primary-green)' }}>
              Nuestra Historia y Logros
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--gold-primary)' }}></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
                  className="text-center p-12 relative overflow-hidden group hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: 'white', borderRadius: '2px', border: '1px solid var(--primary-green)' }}
                >
                  <div className="absolute inset-0 bg-[var(--bg-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-none flex items-center justify-center mx-auto mb-6 group-hover:-translate-y-2 transition-transform" style={{ border: '1px solid var(--gold-primary)', backgroundColor: 'transparent' }}>
                      <Icon className="w-8 h-8 text-[var(--gold-primary)]" />
                    </div>
                    <h3 className="text-5xl font-bold mb-4" style={{ color: 'var(--primary-green)' }}>
                      <NumberCounter value={item.value} suffix={item.suffix} />
                    </h3>
                    <div className="w-8 h-0.5 mx-auto mb-4" style={{ backgroundColor: 'var(--accent-green)' }}></div>
                    <p className="text-gray-600 font-semibold uppercase tracking-wider text-sm">{item.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg px-4 max-w-3xl mx-auto"
          >
            <p className="text-gray-600 leading-relaxed mb-6 font-light text-lg text-justify">
              <span className="text-4xl font-serif text-[var(--gold-primary)] pr-2">I</span>NTALLPA FOODS fue fundada con una visión simple pero poderosa: revolucionar el sector agroindustrial mediante la combinación de procesos tradicionales con tecnología moderna y sostenible.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 font-light text-lg text-justify">
              A lo largo de los años, hemos forjado una reputación ejemplar en términos de excelencia, confianza e innovación. Nuestro compromiso nos ha otorgado numerosas certificaciones internacionales y el respeto en el mercado global.
            </p>
            <p className="text-gray-600 leading-relaxed font-light text-lg text-justify">
              Seguimos rompiendo barreras desarrollando soluciones sostenibles que benefician a nuestros colaboradores, comunidades y clientes alrededor del mundo entero, guiando al sector hacia el futuro.
            </p>
          </motion.div>
        </div>
      </section>


    </div>
  );
}



