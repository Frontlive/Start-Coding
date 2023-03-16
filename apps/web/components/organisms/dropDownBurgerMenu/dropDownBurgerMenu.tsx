import type { ReactNode } from 'react';
import React from 'react';
import ExitIcon from '../../icons/exit-icon.svg';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';
import { Link, GenericLink, VisuallyHidden } from 'ui';
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
		<div className="absolute top-0 left-0  z-50 flex h-screen w-screen flex-col items-center justify-center bg-white">
			<button onClick={hideBurgerMenu} className="absolute top-10 right-10">
				<Image alt="" src={ExitIcon} width={50} height={50} />
				<VisuallyHidden>exit</VisuallyHidden>
			</button>
			{!isLoading && !user && <HeaderUserLoginContent />}
			{!isLoading && user && (
				<div className="flex flex-col items-center justify-center gap-4 font-semibold text-blue-600">
					{children}

					<Link href="/challenge/new" variant="primary">
						Dodaj zadanie
					</Link>
					<GenericLink href="/profile">Profil</GenericLink>
					<GenericLink href="/api/auth/logout">Wyloguj się</GenericLink>
				</div>
			)}
		</div>
	);
};
