import { default as NextLink } from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type LinkVariants = 'primary' | 'secondary';

const variants = {
	primary: 'bg-primary text-white border-white',
	secondary: 'bg-white text-black border-primary',
} as const;

type LinkProps = {
	href: string;
	variant: LinkVariants;
	children: ReactNode;
	fullWidth?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({
	href,
	children,
	variant,
	fullWidth = false,
	...rest
}: LinkProps) => {
	return (
		<NextLink
			href={href}
			className={clsx(variants[variant], 'rounded-2xl border-2 p-2', {
				'w-full': fullWidth,
			})}
			{...rest}
		>
			{children}
		</NextLink>
	);
};
