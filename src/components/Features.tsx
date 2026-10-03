import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Package,
  MessageSquare,
  Workflow,
  BarChart3,
  Bot,
  Shield,
} from 'lucide-react';

interface FeaturesProps {
  isDark: boolean;
}

const features = [
  {
    icon: Package,
    title: 'Gestion de Inventario y Ventas',
    description:
      'Controla tu stock en tiempo real, gestiona pedidos y optimiza tu cadena de suministro con alertas inteligentes y reportes automaticos.',
  },
  {
    icon: MessageSquare,
    title: 'Automatizacion de Clientes',
    description:
      'Responde consultas, procesa solicitudes y ofrece soporte 24/7 con respuestas contextuales que mantienen la calidad de atencion.',
  },
  {
    icon: Workflow,
    title: 'Integracion Multisistema',
    description:
      'Conecta tus herramientas existentes: CRM, ERP, plataformas de pago, redes sociales y mas, todo desde un unico punto de control.',
  },
  {
    icon: BarChart3,
    title: 'Analisis de Datos en Tiempo Real',
    description:
      'Obten insights accionables con dashboards interactivos, metricas de rendimiento y predicciones basadas en datos historicos.',
  },
  {
    icon: Bot,
    title: 'Asistente Inteligente',
    description:
      'Un asistente que aprende de tu negocio, entiende el contexto y ejecuta tareas complejas de forma autonoma con supervision minima.',
  },
  {
    icon: Shield,
    title: 'Seguridad y Cumplimiento',
    description:
      'Proteccion de datos empresarial con encriptacion de extremo a extremo, auditorias automaticas y cumplimiento normativo integrado.',
  },
];

function FeatureCard({ feature, index, isDark }: { feature: typeof features[0]; index: number; isDark: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="group relative rounded-2xl border p-6 transition-all duration-300 sm:p-8"
      style={{
        borderColor: isDark ? '#1a1a1a' : '#f0f0f0',
        backgroundColor: isDark ? '#0f0f0f' : '#fafafa',
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -4,
        borderColor: isDark ? '#333' : '#d4d4d4',
        transition: { duration: 0.2 },
      }}
    >
      <div
        className="mb-5 inline-flex rounded-xl p-3"
        style={{
          backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
        }}
      >
        <feature.icon
          size={22}
          strokeWidth={1.5}
          style={{ color: isDark ? '#fafafa' : '#0a0a0a' }}
        />
      </div>

      <h3
        className="mb-3 text-lg font-semibold tracking-tight"
        style={{ color: isDark ? '#fafafa' : '#0a0a0a' }}
      >
        {feature.title}
      </h3>

      <p
        className="text-sm leading-relaxed"
        style={{ color: isDark ? '#737373' : '#737373' }}
      >
        {feature.description}
      </p>

      {/* Hover indicator */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: isDark ? '#2563eb' : '#2563eb' }}
      />
    </motion.div>
  );
}

export default function Features({ isDark }: FeaturesProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="features" className="px-6 py-24 sm:py-32">
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
            Capacidades
          </span>
          <h2
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: isDark ? '#fafafa' : '#0a0a0a' }}
          >
            Todo lo que necesitas, en un solo lugar
          </h2>
          <p
            className="mx-auto max-w-xl text-base"
            style={{ color: isDark ? '#737373' : '#737373' }}
          >
            MoreEazy integra todas las herramientas que tu negocio necesita para operar de manera eficiente y escalable.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
}
