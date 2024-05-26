import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-100">
      <div className="container mx-auto px-4 py-6 md:px-6 md:py-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-gray-900"
          >
            Jaci
          </Link>
          <nav className="flex space-x-4">
            <Link
              href="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Início
            </Link>
            <Link
              href="/cases"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Casos
            </Link>
            <Link
              href="/prevention"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Prevenção
            </Link>
            <Link
              href="/symptoms"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sintomas
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
