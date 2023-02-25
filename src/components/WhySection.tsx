import { H2, Paragraph } from "./Typography";

export default function WhySection() {
	return (
		<section className="relative grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8 mx-auto max-w-7xl h-auto lg:min-h-[40rem]">
			<div className="col-span-full space-y-6 pt-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5">
				<H2 id="why">¿Por qué ShopWisely?</H2>

				<div className="space-y-4">
					<Paragraph>
						Sabemos que las personas desean ahorrar más dinero al
						realizar sus compras y <em>evitar</em> largas. Se hace
						muy costoso y se pierde mucho tiempo ir a cada
						supermercado y tienda de la ciudad para saber en donde
						están los mejores precios.
					</Paragraph>

					<Paragraph>
						Así es como nace ShopWisely, una aplicación que te
						conecta con las diversas tiendas y te permite comparar
						los precios de un mismo producto y así elegir el mejor,
						pero no nos conformamos con eso.
					</Paragraph>

					<Paragraph>
						Para brindarte la <em>mejor</em> experiencia, ofrecemos
						un servicio de entrega rápida que hace llegar los
						productos que pediste en cuestión de minutos.
					</Paragraph>
				</div>
			</div>

			<div className="col-span-full flex items-center justify-center lg:col-span-7 lg:col-start-6">
				<img
					className="h-auto w-full object-contain max-h-[75vh]"
					src="/assets/undraw_shopping.svg"
				/>
			</div>
		</section>
	);
}
