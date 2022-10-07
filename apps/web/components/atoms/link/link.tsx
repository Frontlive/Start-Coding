import { default as NextLink } from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type LinkVariants = 'primary' | 'secondary';

const variants = {
	primary: 'bg-sky-700 text-white border-white',
	secondary: 'bg-white text-black border-sky-700',
} as const;

type LinkProps = {
	href: string;
	variant: LinkVariants;
	children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ href, children, variant, ...rest }: LinkProps) => {
	return (
		<NextLink href={href}>
			<a
				className={clsx(variants[variant], 'p-2 border-2 rounded-lg')}
				{...rest}
			>
				{children}
			</a>
		</NextLink>
	);
};
