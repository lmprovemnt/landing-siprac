import Link from "next/link";
import Button from "./Button";

export default function Header() {
    return (
        <header className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-2xl text-blue-600">
                    Siprac
                </Link>
                <nav className="hidden md:flex gap-6 items-center">
                    <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
                        Inicio
                    </Link>
                    <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
                        Nosotros
                    </Link>
                    <Link href="/services" className="text-sm font-medium hover:text-blue-600 transition-colors">
                        Servicios
                    </Link>
                    <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
                        Contacto
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Button href="/contact" variant="primary">
                        Solicitar Asesoría
                    </Button>
                </div>
            </div>
        </header>
    );
}
