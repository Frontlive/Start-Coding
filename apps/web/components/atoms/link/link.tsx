import { default as NextLink } from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

type LinkVariants = 'primary' | 'secondary' | 'tertiary';

type LinkProps = {
	href: string;
	variant: LinkVariants;
	children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ href, children, ...rest }: LinkProps) => {
	return (
		<NextLink href={href}>
			<a className="p-8" {...rest}>
				{children}
			</a>
		</NextLink>
	);
};
