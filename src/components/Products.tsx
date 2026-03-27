import { Leaf, Apple, Coffee, Sprout, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PremiumButton from './common/PremiumButton';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

const products = [
  {
    id: 'cacao',
    icon: Leaf,
    name: 'Cacao orgánico',
    label: 'Exportación certificada',
    description: 'Cultivado en condiciones óptimas, respetando prácticas sostenibles y garantizando un sabor auténtico para chocolatería premium.',
    image: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=1200&auto=format&fit=crop&q=80',
    color: 'from-[#2d5016]/90',
  },
  {
    id: 'cafe',
    icon: Coffee,
    name: 'Café verde',
    label: 'Estándares internacionales',
    description: 'Seleccionamos cuidadosamente granos de café verde, garantizando calidad superior para tostadores especializados y mercados exigentes.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&auto=format&fit=crop&q=80',
    color: 'from-[#3b1f0a]/90',
  },
  {
    id: 'maca',
    icon: Sprout,
    name: 'Maca gelatinizada',
    label: 'Superalimento natural',
    description: 'Superalimento altamente nutritivo y de alta biodisponibilidad, rico en energía natural. Ideal para suplementos y formulaciones saludables.',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&auto=format&fit=crop&q=80',
    color: 'from-[#1a3a1a]/90',
  },
  {
    id: 'frutas',
    icon: Apple,
    name: 'Frutas deshidratadas',
    label: '100% natural, sin azúcar',
    description: 'Procesadas cuidadosamente para conservar su sabor, textura y valor nutricional. Perfectas para snacks saludables y uso industrial.',
    image: 'https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?w=1200&auto=format&fit=crop&q=80',
    color: 'from-[#5c1f0a]/90',
  },
];

export default function Products() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive((idx + products.length) % products.length);
  }, [active]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const product = products[active];
  const Icon = product.icon;

  return (
    <section id="products" className="py-24 px-4 overflow-hidden relative" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--primary-green)' }}>
            Nuestros Productos
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: 'var(--gold-primary)' }}></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Ofrecemos productos agroindustriales premium que cumplen con estándares de calidad internacionales.
          </p>
        </motion.div>

        {/* Carousel with external arrows */}
        <div
          className="flex items-center gap-4 md:gap-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left arrow */}
          <button
            onClick={() => { go(active - 1); setPaused(true); }}
            className="hidden md:flex flex-shrink-0 w-14 h-14 items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
            style={{
              borderRadius: '2px',
              border: '2px solid var(--primary-green)',
              backgroundColor: 'white',
              color: 'var(--primary-green)',
            }}
          >
            <ChevronLeft className="w-7 h-7" strokeWidth={2} />
          </button>

          {/* Carousel body */}
          <div
            className="relative flex-1 shadow-2xl"
            style={{ height: '520px', borderRadius: '2px', overflow: 'hidden' }}
          >
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute inset-0 w-full"
                style={{ height: '520px' }}
              >
                {/* Background image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&auto=format&fit=crop&q=80';
                  }}
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${product.color} via-black/50 to-transparent`}></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center p-10 md:p-20 max-w-xl" style={{ height: '520px' }}>
                  {/* Tag */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center space-x-2 mb-6"
                  >
                    <div className="w-8 h-px" style={{ backgroundColor: 'var(--gold-primary)' }}></div>
                    <span className="text-xs uppercase tracking-widest font-bold" style={{ color: 'var(--gold-primary)' }}>
                      {product.label}
                    </span>
                  </motion.div>

                  {/* Icon & Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center space-x-4 mb-4"
                  >
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ border: '1px solid var(--gold-primary)', borderRadius: '2px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight">
                      {product.name}
                    </h3>
                  </motion.div>

                  {/* Gold divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
                    className="w-16 h-0.5 mb-6 origin-left"
                    style={{ backgroundColor: 'var(--gold-primary)' }}
                  ></motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-white text-base md:text-lg leading-relaxed font-light mb-8"
                  >
                    {product.description}
                  </motion.p>

                  {/* CTA */}
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    onClick={() => navigate(`/products/${product.id}`)}
                    className="flex items-center space-x-2 group w-fit"
                    style={{ color: 'var(--gold-primary)' }}
                  >
                    <span className="text-sm font-bold uppercase tracking-widest group-hover:underline">
                      Ver producto
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile-only arrows inside the image */}
            <button
              onClick={() => { go(active - 1); setPaused(true); }}
              className="md:hidden absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center text-white"
              style={{ borderRadius: '2px', border: '1px solid rgba(255,255,255,0.5)', backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => { go(active + 1); setPaused(true); }}
              className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center text-white"
              style={{ borderRadius: '2px', border: '1px solid rgba(255,255,255,0.5)', backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Product icon dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-6 z-20 flex items-center space-x-3">
              {products.map((p, i) => {
                const PIcon = p.icon;
                return (
                  <button
                    key={i}
                    onClick={() => { go(i); setPaused(true); }}
                    className={`flex items-center justify-center w-9 h-9 transition-all duration-300 ${
                      i === active ? 'scale-110' : 'opacity-50 hover:opacity-80'
                    }`}
                    style={{
                      borderRadius: '2px',
                      border: i === active ? '2px solid var(--gold-primary)' : '1px solid rgba(255,255,255,0.4)',
                      backgroundColor: i === active ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.3)',
                    }}
                  >
                    <PIcon className="w-4 h-4 text-white" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => { go(active + 1); setPaused(true); }}
            className="hidden md:flex flex-shrink-0 w-14 h-14 items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
            style={{
              borderRadius: '2px',
              border: '2px solid var(--primary-green)',
              backgroundColor: 'white',
              color: 'var(--primary-green)',
            }}
          >
            <ChevronRight className="w-7 h-7" strokeWidth={2} />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-24"
        >
          <PremiumButton
            label="Ver todos los productos"
            onClick={() => navigate('/products')}
          />
        </motion.div>
      </div>
    </section>
  );
}
