import type { HTMLAttributes, ReactNode } from 'react';
import cx from 'clsx';

const defaultStyles = 'whitespace-nowrap';

type TextSize = 'small' | 'base' | 'large' | 'xl' | '2xl';
const textSizes = {
	small: 'text-sm',
	base: 'text-base',
	large: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
} as const;

export type HeadingTag = keyof Pick<
	JSX.IntrinsicElements,
	'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>;

type FontWeight = 'normal' | 'medium' | 'bold';
const fontWeights = {
	normal: 'font-normal',
	medium: 'font-medium',
	bold: 'font-bold',
} as const;

type HeadingProps = {
	children: ReactNode;
	tag: HeadingTag;
	size: TextSize;
	fontWeight: FontWeight;
} & HTMLAttributes<HTMLHeadingElement>;

export const Heading = ({
	children,
	tag: Tag,
	size,
	fontWeight,
	...rest
}: HeadingProps) => {
	return (
		<Tag
			className={cx(defaultStyles, textSizes[size], fontWeights[fontWeight])}
			{...rest}
		>
			{children}
		</Tag>
	);
};
