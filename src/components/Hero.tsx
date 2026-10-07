import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
          style={{
            borderColor: isDark ? '#262626' : '#e5e5e5',
            backgroundColor: isDark ? 'rgba(23, 23, 23, 0.5)' : 'rgba(245, 245, 245, 0.8)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Sparkles size={14} style={{ color: isDark ? '#a3a3a3' : '#737373' }} />
          <span className="text-xs font-medium" style={{ color: isDark ? '#a3a3a3' : '#737373' }}>
            Asistencia Digital Inteligente
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ color: isDark ? '#fafafa' : '#0a0a0a' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          La evolucion en asistencia digital para tu negocio
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed sm:text-lg"
          style={{ color: isDark ? '#a3a3a3' : '#737373' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          MoreEazy es tu asistente digital con inteligencia artificial disenado para delegar tareas complejas, 
          automatizar la atencion al cliente, gestionar operaciones y optimizar el flujo de trabajo. 
          Potencia tanto empresas en linea como comercios fisicos con tecnologia de vanguardia.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <a
            href="https://wa.me/8495815493"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: isDark ? '#fafafa' : '#0a0a0a',
              color: isDark ? '#0a0a0a' : '#fafafa',
            }}
          >
            Comenzar ahora
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:opacity-70"
            style={{
              borderColor: isDark ? '#262626' : '#e5e5e5',
              color: isDark ? '#fafafa' : '#0a0a0a',
            }}
          >
            Ver capacidades
          </a>
        </motion.div>

        {/* Development Status Badges */}
        <div className="mx-auto mt-8 flex flex-col items-center gap-3">
          <motion.div
            className="inline-flex items-center gap-2.5 rounded-full border px-4 py-2"
            style={{
              borderColor: isDark ? '#262626' : '#e5e5e5',
              backgroundColor: isDark ? 'rgba(23, 23, 23, 0.6)' : 'rgba(245, 245, 245, 0.6)',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ backgroundColor: '#f97316' }}
              />
              <span
                className="relative inline-flex h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: '#f97316' }}
              />
            </span>
            <span
              className="text-xs font-medium tracking-wide"
              style={{ color: isDark ? '#a3a3a3' : '#737373' }}
            >
              Aún En Desarrollo
            </span>
          </motion.div>

          <motion.div
            className="inline-flex items-center gap-2.5 rounded-full border px-4 py-2"
            style={{
              borderColor: isDark ? '#262626' : '#e5e5e5',
              backgroundColor: isDark ? 'rgba(23, 23, 23, 0.6)' : 'rgba(245, 245, 245, 0.6)',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.95 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ backgroundColor: '#3b82f6' }}
              />
              <span
                className="relative inline-flex h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: '#3b82f6' }}
              />
            </span>
            <span
              className="text-xs font-medium tracking-wide"
              style={{ color: isDark ? '#a3a3a3' : '#737373' }}
            >
              Asistente Personal En Desarrollo
            </span>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-3 gap-8 border-t pt-10"
          style={{ borderColor: isDark ? '#1a1a1a' : '#f0f0f0' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[
            { value: '24/7', label: 'Disponibilidad' },
            { value: '99.9%', label: 'Precision' },
            { value: '<1s', label: 'Respuesta' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold sm:text-3xl" style={{ color: isDark ? '#fafafa' : '#0a0a0a' }}>
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium sm:text-sm" style={{ color: isDark ? '#737373' : '#a3a3a3' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
