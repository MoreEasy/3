interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  return (
    <footer
      className="border-t px-6 py-8"
      style={{
        borderColor: isDark ? '#1a1a1a' : '#f0f0f0',
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p
          className="text-xs font-medium"
          style={{ color: isDark ? '#737373' : '#a3a3a3' }}
        >
          MoreEazy. Todos los derechos reservados.
        </p>
        <p
          className="text-xs"
          style={{ color: isDark ? '#525252' : '#d4d4d4' }}
        >
          Desarrollado por baxzzz
        </p>
      </div>
    </footer>
  );
}
