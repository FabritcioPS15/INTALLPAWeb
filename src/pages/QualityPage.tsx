import Banner from '../components/Banner';
import Quality from '../components/Quality';
import { Award, CheckCircle } from 'lucide-react';

export default function QualityPage() {
  const certifications = [
    { title: 'ISO 9001:2015', description: 'Estándar internacional para sistemas de gestión de calidad.' },
    { title: 'HACCP Certificado', description: 'Análisis de Peligros y Puntos Críticos de Control para la inocuidad alimentaria.' },
    { title: 'Global G.A.P.', description: 'Garantizamos prácticas agrícolas sostenibles y responsables a nivel mundial.' },
    { title: 'Certificación Orgánica', description: 'Cumplimos estrictos estándares de producción y manipulación de productos orgánicos.' },
  ];

  return (
    <div>
      <Banner 
        title="Calidad y Certificaciones" 
        subtitle="Nuestro compromiso con la excelencia está respaldado por certificaciones internacionales y rigurosos estándares."
        image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
      />
      
      <Quality />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--primary-green)' }}>
              Nuestras Certificaciones
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--gold-primary)' }}></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mantenemos los más altos estándares en toda nuestra cadena de suministro, desde el campo hasta el producto final.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="p-8 hover:shadow-lg transition-all text-center group" style={{ border: '1px solid var(--primary-green)', borderRadius: '2px' }}>
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 transition-colors group-hover:bg-[var(--primary-green)]" style={{ border: '1px solid var(--gold-primary)', borderRadius: '2px' }}>
                  <Award className="w-8 h-8 text-[var(--gold-primary)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--primary-green)' }}>
                  {cert.title}
                </h3>
                <div className="w-8 h-px mx-auto mb-3" style={{ backgroundColor: 'var(--gold-primary)' }}></div>
                <p className="text-gray-600 text-sm font-light">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--primary-green)' }}>
              Análisis Riguroso de Laboratorio
            </h2>
            <div className="w-16 h-1 mb-6" style={{ backgroundColor: 'var(--gold-primary)' }}></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
              Cada lote de nuestros productos es sometido a pruebas integrales en nuestros laboratorios de vanguardia para garantizar el cumplimiento de nuestros estrictos criterios de calidad e inocuidad.
            </p>
            <ul className="space-y-4">
              {[
                'Análisis microbiológico',
                'Pruebas de residuos de pesticidas',
                'Verificación de perfil nutricional',
                'Pruebas de estabilidad y vida útil'
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0" style={{ border: '1px solid var(--primary-green)', borderRadius: '1px' }}>
                    <CheckCircle className="w-3 h-3 text-[var(--primary-green)]" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1579152276502-7dfb096e5f0a?auto=format&fit=crop&q=80" 
              alt="Laboratory testing" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
