import { useParams, useNavigate } from 'react-router-dom';
import { Leaf, Apple, Coffee, Sprout, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Banner from '../components/Banner';
import PremiumButton from '../components/common/PremiumButton';
import VinesDecoration from '../components/common/VinesDecoration';
import { useEffect } from 'react';

const productsData = {
  'cacao': {
    name: 'Cacao de origen orgánico',
    subtitle: 'Auténtico sabor y calidad de exportación',
    description: 'Nuestro cacao orgánico de origen certificado es cultivado en condiciones óptimas, respetando prácticas sostenibles y garantizando un sabor auténtico. Seleccionamos rigurosamente cada grano para mantener los niveles más altos de pureza y aroma.',
    benefits: [
      'Cultivo 100% orgánico certificado',
      'Perfil de sabor y aroma excepcional',
      'Libre de pesticidas y químicos',
      'Ideal para la industria chocolatera premium'
    ],
    image: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&q=80&w=1200',
    icon: Leaf
  },
  'cafe': {
    name: 'Café verde de alta calidad',
    subtitle: 'Granos seleccionados para los paladares más exigentes',
    description: 'Seleccionamos cuidadosamente granos de café verde, asegurando estándares internacionales en cada etapa del proceso. Trabajamos directamente con los productores locales para garantizar no solo la calidad, sino también el comercio justo.',
    benefits: [
      'Selección manual de granos',
      'Estándares internacionales de calidad (SCA)',
      'Trazabilidad desde el origen',
      'Perfecto para tostadores especializados'
    ],
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=1200',
    icon: Coffee
  },
  'maca': {
    name: 'Harina de maca gelatinizada',
    subtitle: 'El superalimento milenario de los Andes',
    description: 'Nuestra harina de maca gelatinizada es un superalimento altamente nutritivo, fácil de digerir y rico en energía natural. A través de nuestro proceso de gelatinización, eliminamos los almidones difíciles de digerir conservando intactos sus nutrientes.',
    benefits: [
      'Mayor biodisponibilidad y fácil digestión',
      'Fuente natural de energía y vitalidad',
      'Rica en minerales y vitaminas',
      'Ideal para suplementos e industria alimentaria'
    ],
    image: 'https://images.unsplash.com/photo-1606915152864-44ed4d38ecbf?auto=format&fit=crop&q=80&w=1200',
    icon: Sprout
  },
  'frutas': {
    name: 'Frutas deshidratadas naturales',
    subtitle: 'Sabor natural concentrado sin aditivos',
    description: 'Ofrecemos frutas deshidratadas cuidadosamente seleccionadas, procesadas para conservar su sabor, textura y valor nutricional. Nuestro método de deshidratación a baja temperatura asegura la retención de vitaminas esenciales.',
    benefits: [
      '100% fruta natural sin azúcares añadidos',
      'Alta retención de vitaminas y minerales',
      'Larga vida útil natural',
      'Perfectas para snacks saludables'
    ],
    image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80&w=1200',
    icon: Apple
  }
};

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const productKey = id as keyof typeof productsData;
  const product = productsData[productKey];

  useEffect(() => {
    if (!product) {
      navigate('/products');
    }
  }, [product, navigate]);

  if (!product) return null;

  const Icon = product.icon;

  return (
    <div className="bg-white min-h-screen pb-20">
      <Banner 
        title={product.name}
        subtitle="Calidad de exportación directamente desde su origen."
        image={product.image}
      />

      <section className="py-20 px-4 relative overflow-hidden">
        <VinesDecoration className="top-10 left-0" />
        <VinesDecoration className="bottom-0 right-0 rotate-180" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <button 
            onClick={() => navigate('/products')}
            className="flex items-center space-x-2 text-gray-500 hover:text-[var(--primary-green)] transition-colors mb-12 font-bold uppercase tracking-wider text-sm"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Productos</span>
          </button>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center relative" style={{ border: '1px solid var(--primary-green)', borderRadius: '2px' }}>
                  <div className="absolute inset-1 bg-[var(--bg-light)] -z-10"></div>
                  <Icon className="w-8 h-8 text-[var(--primary-green)]" />
                </div>
                <h2 className="text-4xl font-bold" style={{ color: 'var(--primary-green)' }}>
                  {product.name}
                </h2>
              </div>
              
              <div className="w-24 h-1 mb-8" style={{ backgroundColor: 'var(--gold-primary)' }}></div>
              
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                {product.subtitle}
              </h3>
              
              <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light text-justify">
                {product.description}
              </p>

              <h4 className="text-xl font-bold mb-6" style={{ color: 'var(--primary-green)' }}>
                Beneficios y Características
              </h4>
              <ul className="space-y-4 mb-12 bg-[var(--bg-light)] p-8 border border-gray-100 relative group" style={{ borderRadius: '2px' }}>
                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--gold-primary)] transition-all duration-300 group-hover:w-full group-hover:opacity-10 opacity-100 z-0"></div>
                {product.benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-3 relative z-10"
                  >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--primary-green)' }}></div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <PremiumButton label="Solicitar Cotización" onClick={() => navigate('/contact')} />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative p-6"
            >
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                <motion.rect
                  width="100%"
                  height="100%"
                  fill="transparent"
                  stroke="var(--gold-primary)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, type: "tween", ease: "easeInOut" }}
                />
              </svg>
              
              <div className="relative shadow-xl overflow-hidden aspect-[4/5] z-0" style={{ borderRadius: '2px' }}>
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute -bottom-8 -left-8 w-40 h-40 -z-10" style={{ border: '1px solid var(--gold-primary)' }}></div>
              <div className="absolute -top-8 -right-8 w-40 h-40 -z-10" style={{ border: '1px solid var(--primary-green)' }}></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
