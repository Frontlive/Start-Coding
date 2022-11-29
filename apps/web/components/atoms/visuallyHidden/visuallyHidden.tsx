import cx from 'clsx';
import { ReactNode } from 'react';

type ContainerType = keyof Pick<JSX.IntrinsicElements, 'div' | 'span'>;

type VisualyHiddenProps = {
	children: ReactNode;
	tag?: ContainerType;
	visibleOnFocus?: boolean;
};

export const VisualyHidden = ({
	children,
	tag: HtmlTag = 'div',
	visibleOnFocus,
}: VisualyHiddenProps) => {
	return (
		<HtmlTag
			className={cx('sr-only', { 'focus-within:not-sr-only': visibleOnFocus })}
		>
			{children}
		</HtmlTag>
	);
};
