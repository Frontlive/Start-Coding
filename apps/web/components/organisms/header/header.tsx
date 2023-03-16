import { Navbar } from 'atoms/navbar/navbar';
import { NavLink } from 'molecules/navItem/navLink';
import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';
import BurgerIcon from '../../icons/burger-icon.svg';
import { DropDownBurgerMenu } from 'organisms/dropDownBurgerMenu/dropDownBurgerMenu';
import { useHamburgerMenu } from 'organisms/dropDownBurgerMenu/useHamburgerMenu';
import { HeaderUserLoginContent } from 'organisms/header/headerUserLoginContent/headerUserLoginContent';
import { HeaderUserLoggedInContent } from 'organisms/header/headerUserLoggedInContent/headerUserLoggedInContent';
import { Heading, VisuallyHidden } from 'ui';
import Link from 'next/link';

export const Header = () => {
	const { user, isLoading } = useUser();
	const { closeBurgerMenu, isBurgerMenuActive, openBurgerMenu } =
		useHamburgerMenu();
	return (
		<header className="sticky z-10 flex w-full items-center justify-between px-12 py-4 shadow-xl">
			<Link href="/">
				<Heading
					tag="h1"
					size="large"
					className="mr-20 whitespace-nowrap text-2xl font-bold"
				>
					Start-Coding
				</Heading>
			</Link>

			<button onClick={openBurgerMenu} className="lg:hidden">
				<Image src={BurgerIcon} alt="" height={50} width={50} />
				<VisuallyHidden>burger</VisuallyHidden>
			</button>
			{isBurgerMenuActive && (
				<DropDownBurgerMenu hideBurgerMenu={closeBurgerMenu}>
					<Navbar>
						<NavLink link={{ name: 'Zadania', href: '/challenges/all' }} />
					</Navbar>
				</DropDownBurgerMenu>
			)}
			<div className="hidden w-full items-center justify-between lg:flex">
				<div className="flex w-full max-w-sm items-center justify-between">
					<Navbar>
						<NavLink link={{ name: 'Zadania', href: '/challenges/all' }} />
					</Navbar>
				</div>
				{!isLoading && !user && <HeaderUserLoginContent />}
				{!isLoading && user && (
					<HeaderUserLoggedInContent
						user={{ avatarSrc: user.picture, nickname: user.nickname }}
					/>
				)}
			</div>
		</header>
	);
};
