import { Navbar } from 'molecules/navbar/navbar';
import { NavLink } from 'molecules/navItem/navLink';

export const Header = () => {
	return (
		<header>
			<Navbar>
				<NavLink link={{ name: 'Zaloguj się', href: '/api/auth/login' }} />
			</Navbar>
		</header>
	);
};
