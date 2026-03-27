import Banner from '../components/Banner';
import Contact from '../components/Contact';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const contactDetails = [
    { icon: Phone, title: 'Llámanos', detail: '+51 (1) 234-5678' },
    { icon: Mail, title: 'Escríbenos', detail: 'info@intallpafoods.com' },
    { icon: MapPin, title: 'Visítanos', detail: 'Av. Agroindustrial 123, Lima, Perú' },
    { icon: Clock, title: 'Horario de atención', detail: 'Lun - Vie: 9am - 6pm' },
  ];

  return (
    <div>
      <Banner 
        title="Contáctanos" 
        subtitle="Estamos aquí para ayudarte. Comunícate con nosotros para obtener más información sobre nuestros productos."
        image="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?auto=format&fit=crop&q=80"
      />
      
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactDetails.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-8 bg-[var(--bg-light)] rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                  <item.icon className="w-8 h-8 text-[var(--primary-green)]" />
                </div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide text-gray-500 text-sm">
                  {item.title}
                </h3>
                <p className="text-xl font-bold" style={{ color: 'var(--primary-green)' }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      {/* Map Section */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--primary-green)' }}>
            Encuéntranos en el Mapa
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--gold-primary)' }}></div>
        </div>
        <div className="max-w-7xl mx-auto h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15606.326260275815!2d-77.042793!3d-12.046374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x1407613768ce465c!2sLima%2C%20Peru!5e0!3m2!1sen!2sus!4v1711200000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
