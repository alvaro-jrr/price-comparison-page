import { H2, Paragraph } from "./Typography";

interface TestimonialProps {
	fullname: string;
	testimonial: string;
	imageUrl: string;
}

function Testimonial({
	testimonial,
	fullname,
	imageUrl = "",
}: TestimonialProps) {
	return (
		<figure className="p-8 border space-y-6 max-w-2xl shadow-md rounded-md transition-shadow hover:shadow-lg">
			<Paragraph as="blockquote">"{testimonial}"</Paragraph>

			<div className="flex items-center gap-4">
				<img
					className="rounded-full"
					height="40"
					width="40"
					src={imageUrl}
					alt={`Foto de perfil de ${fullname}`}
				/>

				<figcaption className="space-y-1">
					<p className="text-slate-900 font-medium">{fullname}</p>

					<Paragraph size="small">Usuario</Paragraph>
				</figcaption>
			</div>
		</figure>
	);
}

const testimonials = [
	{
		fullname: "Emily Cooper",
		imageUrl: "https://randomuser.me/api/portraits/women/17.jpg",
		testimonial:
			"Nunca había logrado ahorrar tanto en un mes. ShopWisely ha cambiado la forma de comprar, te permite comprar los productos del día a día al mejor precio",
	},
	{
		fullname: "Gavin Harris",
		imageUrl: "https://randomuser.me/api/portraits/men/34.jpg",
		testimonial:
			"La rapidez en la que he hecho mis compras es inigualable. Desde el sofá de mi casa puedo comprar de forma inteligente, ahorrando lo más posible y recibir mis productos sin tener que salir, simplemente increible",
	},
];

export default function TestimonialSection() {
	return (
		<section className="relative grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8 mx-auto max-w-7xl h-auto lg:min-h-[40rem]">
			<div className="col-span-full space-y-6 pt-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5">
				<div className="space-y-4">
					<p className="text-blue-500 font-medium">Testimonios</p>

					<H2>Lo que dicen nuestros usuarios</H2>
				</div>

				<ul className="flex flex-col gap-y-4">
					{testimonials.map((testimonial) => (
						<li key={testimonial.fullname}>
							<Testimonial
								fullname={testimonial.fullname}
								imageUrl={testimonial.imageUrl}
								testimonial={testimonial.testimonial}
							/>
						</li>
					))}
				</ul>
			</div>

			<div className="col-span-full flex items-center justify-center lg:col-span-7 lg:col-start-6">
				<img
					className="h-auto w-full object-contain max-h-[75vh]"
					src="/assets/undraw_with_love.svg"
					alt="Persona sosteniendo un globo en forma de corazón"
				/>
			</div>
		</section>
	);
}
