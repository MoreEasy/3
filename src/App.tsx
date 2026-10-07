import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: isDark ? '#0a0a0a' : '#ffffff',
        color: isDark ? '#fafafa' : '#0a0a0a',
      }}
    >
      <Header isDark={isDark} />
      <main>
        <Hero isDark={isDark} />
        <Features isDark={isDark} />
        <UseCases isDark={isDark} />
        <Contact isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  );
}
