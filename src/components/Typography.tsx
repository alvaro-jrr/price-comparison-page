import type { ElementType, ReactNode } from "react";

const fontSize = {
	h1: "leading-tight font-bold text-5xl md:text-6xl",
	h2: "leading-tight font-bold text-4xl md:text-5xl",
	h3: "text-3xl font-medium md:text-4xl",
	h4: "text-2xl font-medium md:text-3xl",
	h5: "text-xl font-medium md:text-2xl",
	h6: "text-lg font-medium",
};

const titleColors = {
	primary: "text-gray-900",
	secondary: "text-gray-700",
};

interface TitleProps {
	size: keyof typeof fontSize;
	children: ReactNode;
	variant?: keyof typeof titleColors;
	as?: ElementType;
}

function Title({ as, variant = "primary", size, children }: TitleProps) {
	const Tag = as ?? size;

	return (
		<Tag className={`${titleColors[variant]} ${fontSize[size]}`}>
			{children}
		</Tag>
	);
}

function H1(props: Omit<TitleProps, "size">) {
	return <Title {...props} size="h1" />;
}

function H2(props: Omit<TitleProps, "size">) {
	return <Title {...props} size="h2" />;
}

function H3(props: Omit<TitleProps, "size">) {
	return <Title {...props} size="h3" />;
}

function H4(props: Omit<TitleProps, "size">) {
	return <Title {...props} size="h4" />;
}

function H5(props: Omit<TitleProps, "size">) {
	return <Title {...props} size="h5" />;
}

function H6(props: Omit<TitleProps, "size">) {
	return <Title {...props} size="h6" />;
}

const paragraphFontSizes = {
	small: "text-sm",
	regular: "text-base",
	medium: "text-lg",
	large: "text-xl",
};

interface ParagraphProps {
	children: ReactNode;
	size?: keyof typeof paragraphFontSizes;
	as?: ElementType;
}

function Paragraph({ as = "p", children, size = "regular" }: ParagraphProps) {
	const Tag = as;

	return (
		<Tag className={`${paragraphFontSizes[size]} max-w-full text-gray-600`}>
			{children}
		</Tag>
	);
}

export { H1, H2, H3, H4, H5, H6, Paragraph };
