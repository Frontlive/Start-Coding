import { NavLink } from 'molecules/navItem/navLink';
import { useUser } from '@auth0/nextjs-auth0';
import { useHamburgerMenu } from 'organisms/dropDownBurgerMenu/useHamburgerMenu';
import { HeaderUserLoginContent } from 'organisms/header/headerUserLoginContent/headerUserLoginContent';
import { HeaderUserLoggedInContent } from 'organisms/header/headerUserLoggedInContent/headerUserLoggedInContent';
import { ToggleMenuButton } from 'molecules/toggleMenuButton/toggleMenuButton';
import { HeaderNav } from './headerNav/HeaderNav';
import { Container } from 'atoms/Container/container';

export const Header = () => {
	const { user, isLoading } = useUser();
	const { isBurgerMenuActive, toggleBurgerMenu } = useHamburgerMenu();

	return (
		<header className="sticky shadow-xl z-10">
			<Container className="flex flex-row py-4 justify-between items-center w-full ">
				<h1 className="font-bold text-2xl whitespace-nowrap mr-20">
					Start-Coding
				</h1>

				<ToggleMenuButton
					isOpen={isBurgerMenuActive}
					onClick={toggleBurgerMenu}
					navId="main-menu"
				/>
				<HeaderNav isBurgerMenuActive={isBurgerMenuActive}>
					<>
						<ul className="lg:mr-auto flex flex-col lg:flex-row gap-5">
							<NavLink link={{ name: 'Zadania', href: '' }} />
						</ul>
						{!isLoading && !user && <HeaderUserLoginContent />}
						{!isLoading && user && (
							<HeaderUserLoggedInContent
								user={{ avatarSrc: user.picture, nickname: user.nickname }}
							/>
						)}
					</>
				</HeaderNav>
			</Container>
		</header>
	);
};
