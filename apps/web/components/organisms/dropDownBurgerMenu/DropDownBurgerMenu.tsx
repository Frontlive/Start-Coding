import React, { ReactNode } from 'react';
import ExitIcon from '../../icons/exit-icon.svg';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';
import { Link } from 'atoms/link/link';

import { GenericLink } from 'atoms/genericLink/genericLink';
import { VisuallyHidden } from 'atoms/visuallyHidden/visuallyHidden';
import { HeaderUserLoginContent } from 'organisms/header/headerUserLoginContent/headerUserLoginContent';

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
				<VisuallyHidden>exit</VisuallyHidden>
			</button>
			{!isLoading && !user && <HeaderUserLoginContent />}
			{!isLoading && user && (
				<div className="flex gap-4 flex-col justify-center items-center font-semibold text-blue-600">
					{children}

					<Link href="/add/challenge" variant="primary">
						Dodaj zadanie
					</Link>
					<GenericLink href="/profile">Profil</GenericLink>
					<GenericLink href="/api/auth/logout">Wyloguj się</GenericLink>
				</div>
			)}
		</div>
	);
};
