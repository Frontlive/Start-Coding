import cx from 'clsx';
import { ReactNode } from 'react';

type ContainerType = keyof Pick<JSX.IntrinsicElements, 'div' | 'span'>;

type VisuallyHiddenProps = {
	children: ReactNode;
	tag?: ContainerType;
	visibleOnFocus?: boolean;
};

export const VisuallyHidden = ({
	children,
	tag: HtmlTag = 'span',
	visibleOnFocus,
}: VisuallyHiddenProps) => {
	return (
		<HtmlTag
			className={cx('sr-only', { 'focus-within:not-sr-only': visibleOnFocus })}
		>
			{children}
		</HtmlTag>
	);
};
