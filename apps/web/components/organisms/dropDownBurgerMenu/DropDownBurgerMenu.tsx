import React, { ReactNode } from 'react';
import ExitIcon from '../../icons/exit-icon.svg';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';
import { HeaderUserLoginItem } from 'organisms/headerUserLoginItem/headerUserLoginItem';

import Link from 'next/link';

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
				<Image alt="" src={ExitIcon} width={50} height={50} />
				<span className="sr-only">exit menu</span>
			</button>
			{!isLoading && !user && <HeaderUserLoginItem />}
			{!isLoading && user && (
				<div className='flex flex-col justify-center items-center font-semibold text-blue-600'>

				<Link  href="/profile">
				Profil
			</Link>
			<Link className='mt-5' href="/api/auth/logout">
				Wyloguj się
			</Link>
				</div>
			)}
			{children}
		</div>
	);
};

