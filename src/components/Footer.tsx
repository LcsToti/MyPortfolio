export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 py-6 border-t border-neutral-200  dark:border-neutral-700">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © 2024 <span className="font-medium">Lucas Toti | Portfolio</span>.
          Todos os direitos reservados.
        </p>
        <p className="text-sm mt-2 opacity-80">
          Este site foi desenvolvido com{" "}
          <a href="https://react.dev/" className="text-blue-500">
            React
          </a>{" "}
          +{" "}
          <a href="https://vite.dev/" className="text-yellow-500">
            Vite
          </a>
        </p>
        <p>v.1.0.0</p>
      </div>
    </footer>
  );
}
