import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#09342b] text-gray-100">
      <div className="container mx-auto px-4 py-6 md:px-6 md:py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-medium">
            Jaci
          </Link>
          <nav className="flex space-x-4">
            <Link href="/" className="text-base">
              Início
            </Link>
            <Link href="/prevention" className="text-base">
              Prevenção
            </Link>
            <Link href="/symptoms" className="text-base">
              Sintomas
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
