import { Navbar } from 'molecules/navbar/navbar';
import { NavLink } from 'molecules/navItem/navLink';
import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';
import { HeaderUserLoginItem } from 'organisms/headerUserLoginItem/headerUserLoginItem';
import { HeaderUserLoggedInItem } from 'organisms/headerUserLoggedInItem/headerUserLoggedInItem';
import BurgerIcon from '../../icons/burger-icon.svg';
import { DropDownBurgerMenu } from 'organisms/dropDownBurgerMenu/DropDownBurgerMenu';
import { useHamburgerMenu } from 'organisms/dropDownBurgerMenu/useHamburgerMenu';
import { VisualyHidden } from 'atoms/visuallyHidden/visuallyHidden';

export const Header = () => {
	const { user, isLoading } = useUser();
	const { closeBurgerMenu, isBurgerMenuActive, openBurgerMenu } =
		useHamburgerMenu();
	return (
		<header className="flex  px-12 py-4  justify-between items-center w-full sticky shadow-xl">
			<h1 className="font-bold text-2xl whitespace-nowrap	 mr-20">
				Start-Coding
			</h1>

			<button onClick={openBurgerMenu} className="lg:hidden">
				<Image src={BurgerIcon} alt="" height={50} width={50} />
				<VisualyHidden >
				burger

				</VisualyHidden>

			</button>
			{isBurgerMenuActive && (
				<DropDownBurgerMenu hideBurgerMenu={closeBurgerMenu}>
					<Navbar>
						<NavLink link={{ name: 'Zadania', href: '' }} />
					</Navbar>
				</DropDownBurgerMenu>
			)}
			<div className="hidden lg:flex items-center justify-between w-full">
				<div className="flex items-center justify-between max-w-sm w-full">
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
			</div>
		</header>
	);
};
