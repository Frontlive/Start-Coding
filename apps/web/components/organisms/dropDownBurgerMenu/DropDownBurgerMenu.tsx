import React, { ReactNode } from 'react';
import ExitIcon from '../../icons/exit-icon.svg';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';
import { HeaderUserLoginItem } from 'organisms/headerUserLoginItem/headerUserLoginItem';
import { HeaderUserLoggedInItem } from 'organisms/headerUserLoggedInItem/headerUserLoggedInItem';

type DropDownBurgerMenuProps = {
	hideBurgerMenu: () => void;
	children: ReactNode;
};
export const DropDownBurgerMenu = ({
	children,
	hideBurgerMenu,
}: DropDownBurgerMenuProps) => {
	const { user, isLoading } = useUser();
	return (
		<div className="flex flex-col justify-center  items-center top-0 left-0 absolute h-screen w-screen bg-white">
			<button onClick={hideBurgerMenu} className="absolute top-10 right-10">
				<Image alt="exit Icon" src={ExitIcon} width={50} height={50} />
			</button>
			{!isLoading && !user && <HeaderUserLoginItem />}
			{!isLoading && user && (
				<HeaderUserLoggedInItem
					user={{ avatarSrc: user.picture, nickname: user.nickname }}
				/>
			)}
			{children}
		</div>
	);
};
