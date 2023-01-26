import type { HTMLAttributes, ReactNode } from 'react';
import cx from 'clsx';

type TextSize = 'small' | 'medium' | 'large';

export type HeadingTag = keyof Pick<
	JSX.IntrinsicElements,
	'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>;

type HeadingProps = {
	children: ReactNode;
	tag: HeadingTag;
	size: TextSize;
} & HTMLAttributes<HTMLHeadingElement>;

export const Heading = ({
	children,
	tag: Tag,
	size,
	...rest
}: HeadingProps) => {
	return (
		<Tag
			className={cx({
				'text-sm': size === 'small',
				'text-base': size === 'medium',
				'text-lg': size === 'large',
			})}
			{...rest}
		>
			{children}
		</Tag>
	);
};
