"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Quiénes Somos", href: "/about" },
        { name: "Servicios", href: "/#servicios" },
        { name: "Clientes", href: "/#clientes" },
        { name: "Contacto", href: "/contact" },
    ];

    return (
        <header className={`border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12">
                        <img
                            src="/images/logo-siprac.jpg"
                            alt="SIPRAC Logo"
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <span className="font-extrabold text-2xl text-black">SIPRA</span>
                            <span className="font-extrabold text-2xl text-orange-500">C</span>
                        </div>
                        <span className="text-[10px] text-gray-400 font-bold leading-none uppercase tracking-tighter">
                            Prevención de Riesgos & Gestión Integral
                        </span>
                    </div>
                </Link>
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href.startsWith('/#') && pathname === '/');
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-bold transition-all duration-300 hover:text-orange-500 ${isActive ? 'nav-link-active' : 'text-black'}`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
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
