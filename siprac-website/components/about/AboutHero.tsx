export default function AboutHero() {
    return (
        <div className="relative bg-gray-900 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 mix-blend-multiply" />
            </div>
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center">
                    Quiénes Somos
                </h1>
                <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto text-center">
                    Expertos en Sistemas de Gestión Integrados
                </p>
            </div>
        </div>
    );
}
