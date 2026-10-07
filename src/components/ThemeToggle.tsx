import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function ThemeToggle({ isDark, toggleTheme }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full border px-4 py-2.5 backdrop-blur-md shadow-lg"
      style={{
        backgroundColor: isDark ? 'rgba(38, 38, 38, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        borderColor: isDark ? '#262626' : '#e5e5e5',
        color: isDark ? '#fafafa' : '#0a0a0a',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
    >
      <motion.div
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}
      </motion.div>
      <span className="text-xs font-medium tracking-wide">
        {isDark ? 'Claro' : 'Oscuro'}
      </span>
    </motion.button>
  );
}
