import { H2, Paragraph } from "./Typography";
import {
	WrenchScrewdriverIcon,
	ChartBarIcon,
	TruckIcon,
} from "@heroicons/react/24/outline";

interface FeatureCardProps {
	title: string;
	description: string;
	Icon: React.ForwardRefExoticComponent<
		React.SVGProps<SVGSVGElement> & {
			title?: string;
			titleId?: string;
		}
	>;
}

function FeatureCard({ title, description, Icon }: FeatureCardProps) {
	return (
		<div className="flex gap-x-4 p-6 border rounded-md h-full shadow-md transition-shadow hover:shadow-lg">
			<Icon className="h-6 w-6 flex-shrink-0 text-blue-500" />

			<div className="flex flex-col gap-y-2">
				<p className="text-gray-900 font-bold">{title}</p>
				<Paragraph>{description}</Paragraph>
			</div>
		</div>
	);
}

const features = [
	{
		title: "Comparador de Precios",
		description:
			"Puedes comparar los precios de los productos que desees y similares, para elegir el que mejor se adecúe a tus necesidades",
		Icon: ChartBarIcon,
	},
	{
		title: "Entrega Rápida",
		description:
			"Haz tu pedido con los productos deseados y lo recibirás de forma rápida en tu hogar",
		Icon: TruckIcon,
	},
	{
		title: "Atención al Cliente",
		description:
			"Ofrecemos atención 24/7 para responder tus dudas y resolver tus problemas en la aplicación",
		Icon: WrenchScrewdriverIcon,
	},
];

export default function FeatureSection() {
	return (
		<section className="max-w-6xl mx-auto space-y-8">
			<div className="max-w-3xl mx-auto lg:text-center space-y-4">
				<H2>Todo lo que necesitas en un solo lugar</H2>

				<Paragraph size="large">
					Ofrecemos todos los servicios que necesites para mejorar tu
					experiencia como comprador y <em>ahorra</em> mucho más
				</Paragraph>
			</div>

			<ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
				{features.map((feature) => (
					<li key={feature.title}>
						<FeatureCard
							title={feature.title}
							description={feature.description}
							Icon={feature.Icon}
						/>
					</li>
				))}
			</ul>
		</section>
	);
}
