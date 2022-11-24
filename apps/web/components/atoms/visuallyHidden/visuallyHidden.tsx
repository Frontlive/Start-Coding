import cx from 'clsx';
import { ReactNode } from 'react';

type VisualyHiddenProps = {
	children: ReactNode;
	as?: 'div' | 'span';
	visibleOnFocus?: boolean;
};

export const VisualyHidden = ({
	children,
	as = 'div',
	visibleOnFocus,
}: VisualyHiddenProps) => {
	const HtmlTag = as;
	return (
		<HtmlTag
			className={cx('sr-only', { 'focus-within:not-sr-only': visibleOnFocus })}
		>
			{children}
		</HtmlTag>
	);
};
