import { motion } from 'framer-motion';

interface HeroVisualProps {
  isDark: boolean;
}

export default function HeroVisual({ isDark }: HeroVisualProps) {
  return (
    <div className="relative mt-16 flex items-center justify-center">
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-30 blur-3xl"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
      />

      {/* Main image container */}
      <motion.div
        className="relative overflow-hidden rounded-2xl border shadow-2xl"
        style={{
          borderColor: isDark ? '#1a1a1a' : '#e5e5e5',
          backgroundColor: isDark ? '#0f0f0f' : '#fafafa',
        }}
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Floating animation wrapper */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img
            src="https://image.qwenlm.ai/generated-images/815297a8-46e7-4bcb-ac59-b5024095cc8e/_result.png"
            alt="MoreEazy AI Assistant Interface"
            className="block h-auto w-full max-w-3xl"
            style={{
              filter: isDark ? 'brightness(0.95)' : 'brightness(1)',
            }}
          />
        </motion.div>

        {/* Overlay gradient for depth */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background: isDark
              ? 'linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.1) 100%)'
              : 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.05) 100%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -left-8 top-1/4 h-2 w-2 rounded-full"
        style={{ backgroundColor: '#3b82f6' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />
      <motion.div
        className="absolute -right-12 top-1/3 h-3 w-3 rounded-full"
        style={{ backgroundColor: '#f97316' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      />
      <motion.div
        className="absolute -bottom-6 left-1/4 h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: '#8b5cf6' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      />
    </div>
  );
}
