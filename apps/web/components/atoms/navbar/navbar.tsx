import type { ReactNode } from 'react';

type NavbarProps = {
	children: ReactNode;
};

export const Navbar = ({ children }: NavbarProps) => {
	return (
		<nav>
			<ul className="flex list-none flex-col gap-5 lg:flex-row">{children}</ul>
		</nav>
	);
};
