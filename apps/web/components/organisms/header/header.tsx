import { Navbar } from 'atoms/navbar/navbar';
import { NavLink } from 'molecules/navItem/navLink';
import { useUser } from '@auth0/nextjs-auth0';
import { HeaderUserLoginContent } from 'organisms/header/headerUserLoginContent/headerUserLoginContent';
import { HeaderUserLoggedInContent } from 'organisms/header/headerUserLoggedInContent/headerUserLoggedInContent';
import Link from 'next/link';

export const Header = () => {
	const { user, isLoading } = useUser();
	return (
		<header className="px-12 py-4 flex justify-between items-center w-full sticky shadow-xl">
			<div className="flex items-center justify-between max-w-sm w-full">
				<h1 className="font-bold text-2xl">
					<Link href="/">Start-Coding</Link>
				</h1>
				<Navbar>
					<NavLink link={{ name: 'Zadania', href: '/challenge/new' }} />
				</Navbar>
			</div>
			{!isLoading && !user && <HeaderUserLoginContent />}
			{!isLoading && user && (
				<HeaderUserLoggedInContent
					user={{ avatarSrc: user.picture, nickname: user.nickname }}
				/>
			)}
		</header>
	);
};
