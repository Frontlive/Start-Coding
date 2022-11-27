import type { ReactNode } from 'react';
import cx from 'clsx';

export type TextSize = 'small' | 'medium' | 'large';
type Variants = 'default' | 'error';
export type TextTag = keyof Pick<JSX.IntrinsicElements, 'p' | 'span'>;

type TextProps = {
	children: ReactNode;
	size: TextSize;
	variant: Variants;
	tag: TextTag;
};

export const Text = ({ children, size, variant, tag: Tag }: TextProps) => {
	return (
		<Tag
			className={cx(
				{
					'text-sm': size === 'small',
					'text-base': size === 'medium',
					'text-lg': size === 'large',
					'text-red-600': variant === 'error',
					'text-black': variant === 'default',
				},
				'p-0',
			)}
			role={variant === 'error' ? 'alert' : undefined}
		>
			{children}
		</Tag>
	);
};
