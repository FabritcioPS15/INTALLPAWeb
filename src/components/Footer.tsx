import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-12 px-4 mt-auto" style={{ backgroundColor: 'var(--primary-green)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-48 h-48 flex items-center justify-center overflow-hidden">
                <img src="/images/LogoIntallpa.png" alt="INTALLPA Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Empresa agroindustrial líder, comprometida con la calidad, la sostenibilidad y la excelencia.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {[
                { name: 'Inicio', href: '/' },
                { name: 'Nosotros', href: '/about' },
                { name: 'Productos', href: '/products' },
                { name: 'Calidad', href: '/quality' },
                { name: 'Contacto', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/80 hover:text-white transition-colors text-sm flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--gold-soft)] transition-all mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>info@intallpafoods.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Industrial Park</li>
              <li>Agriculture Zone</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'var(--gold-primary)' }}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'var(--gold-primary)' }}
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'var(--gold-primary)' }}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'var(--gold-primary)' }}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/70 text-sm">
            © {currentYear} INTALLPA FOODS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
