import { Navbar } from 'molecules/navbar/navbar';
import { NavLink } from 'molecules/navItem/navLink';
import { useUser } from '@auth0/nextjs-auth0';
import { HeaderUserLoginItem } from 'organisms/headerUserLoginItem/headerUserLoginItem';
import { HeaderUserLoggedInItem } from 'organisms/headerUserLoggedInItem/headerUserLoggedInItem';

export const Header = () => {
	const { user, isLoading } = useUser();
	return (
		<header className="px-12 py-4 flex justify-between items-center w-full sticky shadow-xl">
			<div className="flex items-center justify-between max-w-sm w-full">
				<h1 className="font-bold text-2xl">Start-Coding</h1>
				<Navbar>
					<NavLink link={{ name: 'Zadania', href: '' }} />
				</Navbar>
			</div>
			{!isLoading && !user && <HeaderUserLoginItem />}
			{!isLoading && user && (
				<HeaderUserLoggedInItem
					user={{ avatarSrc: user.picture, nickname: user.nickname }}
				/>
			)}
		</header>
	);
};
