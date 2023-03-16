import type { ReactNode } from 'react';

export type CardTag = keyof Pick<JSX.IntrinsicElements, 'div' | 'section'>;

type CardProps = {
	children: ReactNode;
	tag: CardTag;
};

export const Card = ({ children, tag: Tag }: CardProps) => {
	return (
		<Tag className="relative w-full rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-300">
			{children}
		</Tag>
	);
};
