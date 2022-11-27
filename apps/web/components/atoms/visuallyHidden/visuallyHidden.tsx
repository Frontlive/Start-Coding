import cx from 'clsx';
import { ReactNode } from 'react';

type ContainerType = keyof Pick<JSX.IntrinsicElements, 'div' | 'span'>;

type VisualyHiddenProps = {
	children: ReactNode;
	as?: ContainerType;
	visibleOnFocus?: boolean;
};

export const VisualyHidden = ({
	children,
	as: HtmlTag = 'div',
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
