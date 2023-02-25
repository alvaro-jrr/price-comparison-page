import { H1, Paragraph } from "./Typography";

export default function HeroSection() {
	return (
		<section className="max-w-3xl space-y-6 mx-auto  md:text-center py-32">
			<div className="space-y-4">
				<H1>
					Obten tus compras en la puerta de tu casa al mejor{" "}
					<span className="text-blue-500"> precio</span>
				</H1>

				<Paragraph size="large">
					Contamos con tus supermercados y tiendas favoritas, para que
					tengas las mejores ofertas y productos del mercado
				</Paragraph>
			</div>

			<div className="flex gap-x-4 md:justify-center">
				<a
					className="block rounded-full px-6 py-3 bg-blue-500 font-medium text-white"
					href="#why"
				>
					Conocer más
				</a>

				<a
					className="block rounded-full px-6 py-3 border font-medium border-blue-200 text-blue-500"
					href="#feature"
				>
					Caracteristicas
				</a>
			</div>
		</section>
	);
}
