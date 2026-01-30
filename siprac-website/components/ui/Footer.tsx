export default function Footer() {
    return (
        <footer className="bg-gray-100 py-6 mt-10">
            <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} Siprac. Todos los derechos reservados.
            </div>
        </footer>
    );
}
