import type { ComponentPropsWithoutRef } from "react";
import { Button } from "./Button";
import { H2, Paragraph } from "./Typography";

interface FormFieldProps {
	label: string;
	name: string;
	children: JSX.Element;
}

type TextFieldProps = Omit<ComponentPropsWithoutRef<"input">, "className"> &
	Omit<FormFieldProps, "children">;

type TextAreaFieldProps = Omit<
	ComponentPropsWithoutRef<"textarea">,
	"className"
> &
	Omit<FormFieldProps, "children">;

function FormField({ label, name, children }: FormFieldProps) {
	return (
		<div className="flex flex-col gap-y-2">
			<label className="text-gray-900 font-medium" htmlFor={name}>
				{label}
			</label>

			{children}
		</div>
	);
}

const baseFieldClassname =
	"py-2 px-4 border shadow-sm rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none";

function TextField({
	label,
	name,
	type = "text",
	...restOfTextField
}: TextFieldProps) {
	return (
		<FormField label={label} name={name}>
			<input
				className={baseFieldClassname}
				id={name}
				type={type}
				name={name}
				{...restOfTextField}
			/>
		</FormField>
	);
}

function TextAreaField({ label, name, ...restOfTextArea }: TextAreaFieldProps) {
	return (
		<FormField label={label} name={name}>
			<textarea
				className={baseFieldClassname}
				id={name}
				rows={4}
				name={name}
				{...restOfTextArea}
			/>
		</FormField>
	);
}

export default function ContactSection() {
	return (
		<section className="max-w-6xl mx-auto space-y-8">
			<div className="max-w-2xl mx-auto space-y-4 lg:text-center">
				<H2 id="contact">Contactános</H2>

				<Paragraph size="large">
					¿Estás listo para vivir la experiencia de ShopWisely?
					Contáctanos para conocer más sobre este increíble producto
				</Paragraph>
			</div>

			<div className="max-w-3xl mx-auto p-6 border rounded-md shadow-md lg:p-8">
				<form
					className="flex flex-col gap-y-6"
					method="post"
					action="#"
				>
					<div className="space-y-4">
						<div className="grid grid-col-1 gap-4 md:grid-cols-2">
							<TextField
								label="Nombre"
								name="firstname"
								placeholder="ej: John"
							/>

							<TextField
								label="Apellido"
								name="lastname"
								placeholder="ej: Doe"
							/>
						</div>

						<TextField
							type="email"
							label="Email"
							name="email"
							placeholder="ej: johndoe@gmail.com"
						/>

						<TextAreaField
							label="Mensaje"
							name="message"
							placeholder="Quiero conocer más sobre ShopWisely"
						/>
					</div>

					<Button width="full" type="submit">
						Contactános
					</Button>
				</form>
			</div>
		</section>
	);
}
