import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Store, Globe, Building2, Truck } from 'lucide-react';

interface UseCasesProps {
  isDark: boolean;
}

const useCases = [
  {
    icon: Store,
    title: 'Comercios Fisicos',
    description:
      'Tiendas, restaurantes y negocios locales que necesitan automatizar inventario, atencion al cliente y gestion de pedidos.',
    tag: 'Retail',
  },
  {
    icon: Globe,
    title: 'Negocios Digitales',
    description:
      'E-commerce, SaaS y startups que requieren escalar operaciones, gestionar clientes y optimizar procesos sin aumentar el equipo.',
    tag: 'Digital',
  },
  {
    icon: Building2,
    title: 'Empresas Corporativas',
    description:
      'Organizaciones medianas y grandes que buscan integrar sistemas, automatizar reportes y mejorar la productividad interna.',
    tag: 'Enterprise',
  },
  {
    icon: Truck,
    title: 'Logistica y Distribucion',
    description:
      'Empresas de envio y distribucion que necesitan rastreo en tiempo real, optimizacion de rutas y comunicacion automatizada.',
    tag: 'Logistics',
  },
];

export default function UseCases({ isDark }: UseCasesProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="use-cases" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
            style={{ color: isDark ? '#737373' : '#a3a3a3' }}
          >
            Casos de Uso
          </span>
          <h2
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: isDark ? '#fafafa' : '#0a0a0a' }}
          >
            Adaptado a cada tipo de negocio
          </h2>
          <p
            className="mx-auto max-w-xl text-base"
            style={{ color: isDark ? '#737373' : '#737373' }}
          >
            Desde un pequeno comercio local hasta una empresa multinacional, MoreEazy se adapta a tus necesidades especificas.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {useCases.map((useCase, index) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, margin: '-50px' });

            return (
              <motion.div
                key={useCase.title}
                ref={cardRef}
                className="group relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 sm:p-8"
                style={{
                  borderColor: isDark ? '#1a1a1a' : '#f0f0f0',
                  backgroundColor: isDark ? '#0f0f0f' : '#fafafa',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  borderColor: isDark ? '#333' : '#d4d4d4',
                  transition: { duration: 0.2 },
                }}
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div
                      className="inline-flex rounded-xl p-3"
                      style={{
                        backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
                      }}
                    >
                      <useCase.icon
                        size={22}
                        strokeWidth={1.5}
                        style={{ color: isDark ? '#fafafa' : '#0a0a0a' }}
                      />
                    </div>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
                        color: isDark ? '#a3a3a3' : '#737373',
                      }}
                    >
                      {useCase.tag}
                    </span>
                  </div>

                  <h3
                    className="mb-3 text-xl font-semibold tracking-tight"
                    style={{ color: isDark ? '#fafafa' : '#0a0a0a' }}
                  >
                    {useCase.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: isDark ? '#737373' : '#737373' }}
                  >
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
