import clsx from 'clsx';
import { ReactNode } from 'react';

type ContainerProps = {
	as?: keyof HTMLElementTagNameMap;
	className?: string;
	id?: string;
	children: ReactNode;
};

export const Container = ({
	as: Tag = 'div',
	className,
	id,
	children,
}: ContainerProps) => (
	<Tag
		className={clsx(
			'mx-auto w-full max-w-full px-3 sm:max-w-7xl sm:px-12',
			className,
		)}
		id={id}
	>
		{children}
	</Tag>
);
