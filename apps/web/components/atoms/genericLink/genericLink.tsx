import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

type GenericLinkProps = {
	href: string;
	children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const GenericLink = ({ href, children }: GenericLinkProps) => {
	return (
		<Link href={href}>
			<a>{children}</a>
		</Link>
	);
};
