import { useState, useEffect } from 'react';
import { Menu, X, Leaf, ChevronDown, ChevronRight, Home, Info, Award, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const productLinks = [
    { name: 'Cacao Orgánico', href: '/products/cacao' },
    { name: 'Café Verde', href: '/products/cafe' },
    { name: 'Maca Gelatinizada', href: '/products/maca' },
    { name: 'Frutas Deshidratadas', href: '/products/frutas' },
  ];

  const isHome = location.pathname === '/';
  const isProductsActive = location.pathname.startsWith('/products');

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-white/80 border-b border-gray-100 shadow-sm py-4' 
          : !isHome 
            ? 'bg-white shadow-sm py-6' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-12 shadow-md" style={{ backgroundColor: 'var(--primary-green)' }}>
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight" style={{ color: isScrolled || !isHome ? 'var(--primary-green)' : 'white' }}>
              INTALLPA FOODS
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-bold uppercase tracking-wider transition-all relative group ${
                location.pathname === '/' 
                  ? (isScrolled ? 'text-[var(--primary-green)]' : 'text-[var(--gold-soft)]')
                  : isScrolled || !isHome ? 'text-gray-700 hover:text-[var(--primary-green)]' : 'text-white hover:text-[var(--gold-soft)]'
              }`}
            >
              Inicio
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
              } ${isScrolled || !isHome ? 'bg-[var(--primary-green)]' : 'bg-[var(--gold-soft)]'}`} />
            </Link>

            <Link
              to="/about"
              className={`text-sm font-bold uppercase tracking-wider transition-all relative group ${
                location.pathname === '/about' 
                  ? 'text-[var(--primary-green)]' 
                  : isScrolled || !isHome ? 'text-gray-700 hover:text-[var(--primary-green)]' : 'text-white hover:text-[var(--gold-soft)]'
              }`}
            >
              Nosotros
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
              } ${isScrolled || !isHome ? 'bg-[var(--primary-green)]' : 'bg-[var(--gold-soft)]'}`} />
            </Link>

            {/* Products Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <Link
                to="/products"
                className={`flex items-center space-x-1 text-sm font-bold uppercase tracking-wider transition-all relative ${
                  isProductsActive 
                    ? 'text-[var(--primary-green)]' 
                    : isScrolled || !isHome ? 'text-gray-700 hover:text-[var(--primary-green)]' : 'text-white hover:text-[var(--gold-soft)]'
                }`}
              >
                <span>Productos</span>
                <ChevronDown className="w-4 h-4" />
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                  isProductsActive ? 'w-full' : 'w-0 group-hover:w-full'
                } ${isScrolled || !isHome ? 'bg-[var(--primary-green)]' : 'bg-[var(--gold-soft)]'}`} />
              </Link>

              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-4 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 transform origin-top ${
                  productsDropdownOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
                }`}
              >
                <div className="py-2">
                  <Link to="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--bg-light)] hover:text-[var(--primary-green)] font-semibold transition-colors">
                    Ver todos
                  </Link>
                  <div className="h-px bg-gray-100 my-1"></div>
                  {productLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        location.pathname === link.href 
                          ? 'bg-[var(--bg-light)] text-[var(--primary-green)] font-bold' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-[var(--primary-green)] font-semibold'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/quality"
              className={`text-sm font-bold uppercase tracking-wider transition-all relative group ${
                location.pathname === '/quality' 
                  ? 'text-[var(--primary-green)]' 
                  : isScrolled || !isHome ? 'text-gray-700 hover:text-[var(--primary-green)]' : 'text-white hover:text-[var(--gold-soft)]'
              }`}
            >
              Calidad
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                location.pathname === '/quality' ? 'w-full' : 'w-0 group-hover:w-full'
              } ${isScrolled || !isHome ? 'bg-[var(--primary-green)]' : 'bg-[var(--gold-soft)]'}`} />
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-bold uppercase tracking-wider transition-all relative group ${
                location.pathname === '/contact' 
                  ? 'text-[var(--primary-green)]' 
                  : isScrolled || !isHome ? 'text-gray-700 hover:text-[var(--primary-green)]' : 'text-white hover:text-[var(--gold-soft)]'
              }`}
            >
              Contacto
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
              } ${isScrolled || !isHome ? 'bg-[var(--primary-green)]' : 'bg-[var(--gold-soft)]'}`} />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled || !isHome ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[60] shadow-2xl md:hidden overflow-y-auto"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--primary-green)] shadow-md">
                      <Leaf className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-[var(--primary-green)]">
                      INTALLPA
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col space-y-2">
                  {[
                    { name: 'Inicio', href: '/', icon: Home },
                    { name: 'Nosotros', href: '/about', icon: Info },
                  ].map((link) => {
                    const isActive = location.pathname === link.href;
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-4 px-4 py-4 rounded-xl font-bold transition-all ${
                          isActive 
                            ? 'bg-[var(--primary-green)] text-white shadow-lg' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                        <span className="text-lg">{link.name}</span>
                      </Link>
                    );
                  })}

                  {/* Products Accordion */}
                  <div className="flex flex-col">
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className={`flex items-center justify-between w-full px-4 py-4 rounded-xl font-bold transition-all ${
                        location.pathname.startsWith('/products') 
                          ? 'bg-[var(--bg-light)] text-[var(--primary-green)]' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <Leaf className={`w-5 h-5 ${location.pathname.startsWith('/products') ? 'text-[var(--primary-green)]' : 'text-gray-400'}`} />
                        <span className="text-lg">Productos</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {mobileProductsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden bg-gray-50 rounded-xl mt-1 ml-4"
                        >
                          <div className="py-2 flex flex-col">
                            <Link
                              to="/products"
                              onClick={() => setIsOpen(false)}
                              className="px-8 py-3 font-bold text-gray-500 hover:text-[var(--primary-green)] flex items-center space-x-2"
                            >
                              <ChevronRight className="w-4 h-4" />
                              <span>Ver todos</span>
                            </Link>
                            {productLinks.map((link) => (
                              <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`px-8 py-3 font-semibold transition-colors flex items-center space-x-2 ${
                                  location.pathname === link.href 
                                    ? 'text-[var(--primary-green)] font-bold' 
                                    : 'text-gray-500 hover:text-[var(--primary-green)]'
                                }`}
                              >
                                <ChevronRight className="w-4 h-4 opacity-50" />
                                <span>{link.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {[
                    { name: 'Calidad', href: '/quality', icon: Award },
                    { name: 'Contacto', href: '/contact', icon: Phone },
                  ].map((link) => {
                    const isActive = location.pathname === link.href;
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-4 px-4 py-4 rounded-xl font-bold transition-all ${
                          isActive 
                            ? 'bg-[var(--primary-green)] text-white shadow-lg' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                        <span className="text-lg">{link.name}</span>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-auto pt-10">
                  <div className="p-6 rounded-2xl bg-[var(--primary-green)] text-white relative overflow-hidden">
                    <div className="relative z-10">
                      <p className="text-sm font-semibold opacity-80 mb-1">Dudas o consultas?</p>
                      <p className="text-xl font-bold mb-4">¡Contáctanos!</p>
                      <Link 
                        to="/contact" 
                        onClick={() => setIsOpen(false)}
                        className="inline-block bg-white text-[var(--primary-green)] px-6 py-2 rounded-lg font-bold text-sm shadow-md active:scale-95 transition-transform"
                      >
                        Ir a contacto
                      </Link>
                    </div>
                    <Leaf className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10 rotate-12" />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

