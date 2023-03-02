import type { ReactNode } from 'react';

type NavbarProps = {
	children: ReactNode;
};

export const Navbar = ({ children }: NavbarProps) => {
	return (
		<nav>
			<ul className="list-none flex flex-col lg:flex-row gap-5">{children}</ul>
		</nav>
	);
};
