import { ReactNode } from 'react';
import { Link, NavLink } from '../molecules/navItem/navLink';

type NavbarProps = {
	itemsList: Link[];
	rightElement?: ReactNode;
};

export const Navbar = ({ itemsList, rightElement }: NavbarProps) => {
	return (
		<nav>
			{itemsList.map((item) => (
				<NavLink link={item} />
			))}
			{rightElement && <>{rightElement}</>}
		</nav>
	);
};
