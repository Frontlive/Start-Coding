import { Navbar } from 'atoms/navbar/navbar';
import { NavLink } from 'molecules/navItem/navLink';
import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';
import BurgerIcon from '../../icons/burger-icon.svg';
import { DropDownBurgerMenu } from 'organisms/dropDownBurgerMenu/dropDownBurgerMenu';
import { useHamburgerMenu } from 'organisms/dropDownBurgerMenu/useHamburgerMenu';
import { HeaderUserLoginContent } from 'organisms/header/headerUserLoginContent/headerUserLoginContent';
import { HeaderUserLoggedInContent } from 'organisms/header/headerUserLoggedInContent/headerUserLoggedInContent';
import { VisuallyHidden, Heading, Container } from 'ui';
import Link from 'next/link';

export const Header = () => {
	const { user, isLoading } = useUser();
	const { closeBurgerMenu, isBurgerMenuActive, openBurgerMenu } =
		useHamburgerMenu();

	return (
		<header className="sticky shadow-xl z-10">
			<Container>
				<div className="flex justify-between items-center w-full py-4">
					<Link href="/">
						<Heading
							tag="h1"
							size="large"
							className="font-bold text-2xl whitespace-nowrap mr-20"
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
					<div className="hidden lg:flex items-center justify-between w-full">
						<div className="flex items-center justify-between max-w-sm w-full">
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
				</div>
			</Container>
		</header>
	);
};
