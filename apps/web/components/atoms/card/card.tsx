import type { ReactNode } from 'react';

export type CardTag = keyof Pick<JSX.IntrinsicElements, 'div' | 'section'>;

type CardProps = {
	children: ReactNode;
	tag: CardTag;
};

export const Card = ({ children, tag: Tag }: CardProps) => {
	return (
		<Tag className="p-4 border-primary border-2 shadow-lg rounded-xl w-full">
			{children}
		</Tag>
	);
};
