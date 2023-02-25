import { ButtonLink } from "./Button";
import { H1, Paragraph } from "./Typography";

export default function HeroSection() {
	return (
		<section className="max-w-3xl space-y-6 mx-auto  md:text-center py-32">
			<div className="space-y-4">
				<H1 variant="gradient">
					Obtén tus compras en la puerta de tu casa al mejor precio
				</H1>

				<Paragraph size="large">
					Contamos con tus supermercados y tiendas favoritas, para que
					tengas las mejores ofertas y productos del mercado
				</Paragraph>
			</div>

			<div className="flex flex-col gap-y-2 gap-x-4 md:flex-row md:justify-center">
				<ButtonLink size="large" href="#why">
					Conocer más
				</ButtonLink>

				<ButtonLink size="large" variant="secondary" href="#feature">
					Características
				</ButtonLink>
			</div>
		</section>
	);
}
