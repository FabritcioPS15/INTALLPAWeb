import { useState, useEffect } from 'react';
import { Menu, X, Leaf, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
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
      {isOpen && (
        <div className="md:hidden bg-white border-t animate-in slide-in-from-top duration-300 shadow-xl">
          <div className="px-4 py-6 space-y-2">
            {[
              { name: 'Inicio', href: '/' },
              { name: 'Nosotros', href: '/about' },
              { name: 'Todos los Productos', href: '/products' },
              ...productLinks,
              { name: 'Calidad', href: '/quality' },
              { name: 'Contacto', href: '/contact' },
            ].map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-lg font-bold rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-[var(--bg-light)] text-[var(--primary-green)]' 
                      : 'text-gray-800 hover:bg-gray-50 hover:text-[var(--primary-green)]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

