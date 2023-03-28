import type { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	as?: 'div' | 'main';
	id?: string;
};

export const Container = ({ children, as: Tag = 'div', id }: Props) => (
	<Tag className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id={id}>
		{children}
	</Tag>
);
