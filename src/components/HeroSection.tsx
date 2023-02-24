export default function HeroSection() {
    return (
        <section className="max-w-3xl mx-auto text-center py-32">
            <h2 className="text-gray-900 tracking-tight font-bold text-4xl sm:text-5xl">
                Obten tus compras en la puerta de tu casa al mejor{" "}
                <span className="text-blue-500"> precio</span>
            </h2>

            <p className="text-lg sm:text-xl mt-4 text-slate-600">
                Contamos con tus supermercados y tiendas favoritas, para que
                tengas las mejores ofertas y productos del mercado
            </p>

            <div className="flex justify-center mt-6">
                <a
                    className="block rounded-full px-6 py-3 bg-blue-500 font-medium text-white"
                    href=""
                >
                    Conocer más
                </a>
            </div>
        </section>
    );
}
