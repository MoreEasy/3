import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  isDark: boolean;
}

export default function Header({ isDark }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Caracteristicas', href: '#features' },
    { label: 'Casos de Uso', href: '#use-cases' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl"
      style={{
        backgroundColor: isDark ? 'rgba(10, 10, 10, 0.85)' : 'rgba(255, 255, 255, 0.85)',
        borderBottom: `1px solid ${isDark ? '#1a1a1a' : '#f0f0f0'}`,
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight" style={{ color: isDark ? '#fafafa' : '#0a0a0a' }}>
          MoreEazy
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
              style={{ color: isDark ? '#a3a3a3' : '#737373' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: isDark ? '#fafafa' : '#0a0a0a',
              color: isDark ? '#0a0a0a' : '#fafafa',
            }}
          >
            Empezar
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: isDark ? '#fafafa' : '#0a0a0a' }}
        >
          {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <motion.div
          className="border-t px-6 py-6 md:hidden"
          style={{
            borderColor: isDark ? '#1a1a1a' : '#f0f0f0',
            backgroundColor: isDark ? '#0a0a0a' : '#ffffff',
          }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium"
                style={{ color: isDark ? '#a3a3a3' : '#737373' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-block rounded-full px-5 py-2.5 text-center text-sm font-medium"
              style={{
                backgroundColor: isDark ? '#fafafa' : '#0a0a0a',
                color: isDark ? '#0a0a0a' : '#fafafa',
              }}
              onClick={() => setMobileOpen(false)}
            >
              Empezar
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
