import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const LINKS = [
	{ name: "¿Por qué?", to: "#why" },
	{ name: "Características", to: "#feature" },
	{ name: "Testimonios", to: "#testimonials" },
];

function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				aria-controls="mobile-navigation"
				aria-expanded={isOpen}
				className="relative z-10 p-2 text-slate-900"
				onClick={() => setIsOpen((isOpen) => !isOpen)}
			>
				{isOpen ? (
					<XMarkIcon className="h-6 w-6" />
				) : (
					<Bars3BottomRightIcon className="h-6 w-6" />
				)}

				<span className="sr-only">Menu</span>
			</button>

			<ul
				className="fixed inset-0 translate-x-full divide-y bg-gray-50 py-16 px-8 transition-transform data-[visible=true]:translate-x-0"
				data-visible={isOpen}
				id="mobile-navigation"
			>
				{LINKS.map((link) => (
					<li key={link.to}>
						<a
							href={link.to}
							className="block px-2 py-4 font-medium text-slate-500"
						>
							{link.name}
						</a>
					</li>
				))}
			</ul>
		</>
	);
}

export default function NavBar() {
	return (
		<header className="px-[5vw] relative top-0 bg-white z-10 py-8">
			<div className="flex justify-between">
				<img
					alt="Logo de ShopWisely"
					src="/assets/logo.svg"
					className="h-10"
				/>

				<nav>
					<ul className="hidden gap-x-2 lg:flex">
						{LINKS.map((link) => (
							<li key={link.to}>
								<a
									href={link.to}
									className="block px-5 py-2 font-medium text-slate-500 transition-colors hover:bg-gray-100 rounded-full"
								>
									{link.name}
								</a>
							</li>
						))}
					</ul>

					<div className="lg:hidden">
						<MobileMenu />
					</div>
				</nav>
			</div>
		</header>
	);
}
