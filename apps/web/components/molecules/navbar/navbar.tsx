import { ReactNode } from 'react';

type NavbarProps = {
	children: ReactNode;
};

export const Navbar = ({ children }: NavbarProps) => {
	return (
		<nav>
			<ul className="list-none">{children}</ul>
		</nav>
	);
};
