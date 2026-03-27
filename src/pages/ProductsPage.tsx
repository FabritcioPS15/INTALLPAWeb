import { Leaf, Apple, Coffee, Sprout, Check, ArrowRight } from 'lucide-react';
import Banner from '../components/Banner';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import VinesDecoration from '../components/common/VinesDecoration';
import PremiumButton from '../components/common/PremiumButton';

const productDetails = [
  {
    id: 'cacao',
    icon: Leaf,
    name: 'Cacao de origen orgánico',
    description: 'Nuestro cacao orgánico de origen certificado es cultivado en condiciones óptimas, respetando prácticas sostenibles y garantizando un sabor auténtico. Ideal para la industria alimentaria, chocolatería y exportación.',
    image: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Cultivo 100% orgánico certificado',
      'Perfil de sabor y aroma excepcional',
      'Libre de pesticidas y químicos',
      'Comercio justo',
    ],
  },
  {
    id: 'cafe',
    icon: Coffee,
    name: 'Café verde de alta calidad',
    description: 'Seleccionamos cuidadosamente granos de café verde, asegurando estándares internacionales en cada etapa del proceso. Perfecto para tostadores, distribuidores y mercados exigentes.',
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Selección manual de granos',
      'Estándares internacionales (SCA)',
      'Trazabilidad total',
      'Exportación global',
    ],
  },
  {
    id: 'maca',
    icon: Sprout,
    name: 'Harina de maca gelatinizada',
    description: 'Nuestra harina de maca gelatinizada es un superalimento altamente nutritivo, fácil de digerir y rico en energía natural. Ideal para suplementos, industria alimentaria y productos saludables.',
    image: 'https://images.unsplash.com/photo-1606915152864-44ed4d38ecbf?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Alta biodisponibilidad',
      'Fuente natural de energía',
      'Rica en minerales y vitaminas',
      'Proceso sin químicos',
    ],
  },
  {
    id: 'frutas',
    icon: Apple,
    name: 'Frutas deshidratadas naturales',
    description: 'Ofrecemos frutas deshidratadas cuidadosamente seleccionadas, procesadas para conservar su sabor, textura y valor nutricional. Perfectas para snacks saludables y productos industriales.',
    image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80&w=1200',
    features: [
      '100% fruta natural',
      'Alta retención de nutrientes',
      'Larga vida útil',
      'Sin azúcares añadidos',
    ],
  },
];

export default function ProductsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[var(--bg-light)]">
      <Banner 
        title="Nuestro Catálogo de Productos" 
        subtitle="Agroindustria de precisión con calidad de exportación superior."
        image="https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80"
      />
      
      <section className="py-24 px-4 relative overflow-hidden bg-white">
        <VinesDecoration className="top-1/4 -left-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          {productDetails.map((product, index) => {
            const Icon = product.icon;
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="mb-32 last:mb-0">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-cols-2 direction-rtl' : ''}`}>
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'} p-4`}
                  >
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
                    </svg>
                    <div className="shadow-lg relative z-0 aspect-[4/3]" style={{ border: '1px solid var(--primary-green)', borderRadius: '2px' }}>
                      <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        variants={{
                          visible: { scale: 1, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } }
                        }}
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={isEven ? 'lg:order-2' : 'lg:order-1'}
                  >
                    <div className="w-16 h-16 flex items-center justify-center mb-6 shadow-sm relative group cursor-pointer" 
                         style={{ backgroundColor: 'white', border: '1px solid var(--primary-green)', borderRadius: '2px' }}
                         onClick={() => navigate(`/products/${product.id}`)}>
                      <div className="absolute inset-1 bg-[var(--bg-light)] -z-10 group-hover:scale-105 transition-transform duration-300"></div>
                      <Icon className="w-8 h-8 text-[var(--primary-green)]" />
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-4 cursor-pointer hover:underline decoration-[var(--gold-primary)] underline-offset-8 transition-all" style={{ color: 'var(--primary-green)' }} onClick={() => navigate(`/products/${product.id}`)}>
                      {product.name}
                    </h2>
                    
                    <div className="w-16 h-1 mb-6" style={{ backgroundColor: 'var(--gold-primary)' }}></div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light text-justify">
                      {product.description}
                    </p>

                    <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--primary-green)' }}>
                      Características Clave
                    </h3>
                    
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-5 h-5 flex items-center justify-center" style={{ backgroundColor: 'var(--bg-light)', border: '1px solid var(--primary-green)', borderRadius: '1px' }}>
                            <Check className="w-3 h-3 text-[var(--primary-green)]" />
                          </div>
                          <span className="text-gray-700 font-medium font-light">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <button 
                      onClick={() => navigate(`/products/${product.id}`)}
                      className="flex items-center space-x-2 text-[var(--gold-primary)] hover:text-[var(--gold-dark)] transition-colors font-bold uppercase tracking-wider text-sm mt-4 group"
                    >
                      <span>Ver Detalles del Producto</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>

                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 px-4 relative overflow-hidden bg-[var(--bg-light)]">
        <VinesDecoration className="bottom-0 right-0 rotate-180" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--primary-green)' }}>
            Soluciones Personalizadas
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: 'var(--gold-primary)' }}></div>
          <p className="text-xl text-gray-700 mx-auto mb-10 leading-relaxed font-light">
            Entendemos que cada cliente tiene necesidades únicas para su industria. Nuestro equipo se especializa en crear soluciones agroindustriales a medida, incluyendo empaques personalizados, formulaciones específicas y opciones de procesamiento escalable.
          </p>
          <div className="flex justify-center">
             <PremiumButton label="CONTÁCTANOS HOY" onClick={() => navigate('/contact')} />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
