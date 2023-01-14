import Link from 'next/link';
import { ReactNode } from 'react';

type GenericLinkProps = {
	href: string;
	children: ReactNode;
};

export const GenericLink = ({ href, children }: GenericLinkProps) => {
	return (
		<Link href={href} className="font-semibold text-blue-600">
			{children}
		</Link>
	);
};
