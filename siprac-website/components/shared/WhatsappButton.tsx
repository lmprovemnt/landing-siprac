import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
    return (
        <Link
            href="https://wa.me/573000000000" // Placeholder number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 hover:scale-110 duration-300"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
        </Link>
    );
}
