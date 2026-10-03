import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Phone, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
}

export default function Contact({ isDark }: ContactProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={sectionRef}
          className="relative overflow-hidden rounded-3xl border p-8 sm:p-12 md:p-16"
          style={{
            borderColor: isDark ? '#1a1a1a' : '#f0f0f0',
            backgroundColor: isDark ? '#0f0f0f' : '#fafafa',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Background decoration */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-10 blur-3xl"
            style={{
              background: isDark
                ? 'radial-gradient(circle, #2563eb, transparent)'
                : 'radial-gradient(circle, #2563eb, transparent)',
            }}
          />

          <div className="relative z-10 flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
            {/* Left Content */}
            <div className="max-w-lg">
              <span
                className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest"
                style={{ color: isDark ? '#737373' : '#a3a3a3' }}
              >
                Contacto
              </span>
              <h2
                className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: isDark ? '#fafafa' : '#0a0a0a' }}
              >
                Conecta con el creador
              </h2>
              <p
                className="mb-8 text-base leading-relaxed"
                style={{ color: isDark ? '#737373' : '#737373' }}
              >
                Estas listo para transformar tu negocio con MoreEazy? Contacta directamente con el equipo de desarrollo 
                para conocer como podemos implementar esta solucion en tu empresa.
              </p>

              {/* Creator Info */}
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold"
                  style={{
                    backgroundColor: isDark ? '#1a1a1a' : '#f0f0f0',
                    color: isDark ? '#fafafa' : '#0a0a0a',
                  }}
                >
                  B
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: isDark ? '#fafafa' : '#0a0a0a' }}
                  >
                    baxzzz
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: isDark ? '#737373' : '#a3a3a3' }}
                  >
                    Creador y Desarrollador
                  </p>
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex w-full flex-col gap-3 md:w-auto">
              <a
                href="https://wa.me/8495815493"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-4 rounded-xl border px-6 py-4 transition-all duration-300 hover:shadow-md"
                style={{
                  borderColor: isDark ? '#262626' : '#e5e5e5',
                  backgroundColor: isDark ? '#141414' : '#ffffff',
                }}
              >
                <div className="flex items-center gap-3">
                  <MessageCircle size={18} strokeWidth={1.5} style={{ color: isDark ? '#fafafa' : '#0a0a0a' }} />
                  <div>
                    <p className="text-sm font-medium" style={{ color: isDark ? '#fafafa' : '#0a0a0a' }}>
                      WhatsApp
                    </p>
                    <p className="text-xs" style={{ color: isDark ? '#737373' : '#a3a3a3' }}>
                      (849) 581-5493
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: isDark ? '#737373' : '#a3a3a3' }}
                />
              </a>

              <a
                href="tel:8495815493"
                className="group inline-flex items-center justify-between gap-4 rounded-xl border px-6 py-4 transition-all duration-300 hover:shadow-md"
                style={{
                  borderColor: isDark ? '#262626' : '#e5e5e5',
                  backgroundColor: isDark ? '#141414' : '#ffffff',
                }}
              >
                <div className="flex items-center gap-3">
                  <Phone size={18} strokeWidth={1.5} style={{ color: isDark ? '#fafafa' : '#0a0a0a' }} />
                  <div>
                    <p className="text-sm font-medium" style={{ color: isDark ? '#fafafa' : '#0a0a0a' }}>
                      Llamar
                    </p>
                    <p className="text-xs" style={{ color: isDark ? '#737373' : '#a3a3a3' }}>
                      (849) 581-5493
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: isDark ? '#737373' : '#a3a3a3' }}
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
