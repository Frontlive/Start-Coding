import type { ReactNode } from 'react';

export type CardTag = keyof Pick<JSX.IntrinsicElements, 'div' | 'section'>;

type CardProps = {
	children: ReactNode;
	tag: CardTag;
};

export const Card = ({ children, tag: Tag }: CardProps) => {
	return (
		<Tag className="p-6 border border-gray-200 shadow-md rounded-lg dark:border-gray-300 w-full relative">
			{children}
		</Tag>
	);
};
