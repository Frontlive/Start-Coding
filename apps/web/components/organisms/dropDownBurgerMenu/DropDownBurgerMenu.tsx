import React, { ReactNode } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { Link } from 'atoms/link/link';

import { GenericLink } from 'atoms/genericLink/genericLink';
import { HeaderUserLoginContent } from 'organisms/header/headerUserLoginContent/headerUserLoginContent';

type DropDownBurgerMenuProps = {
	children: ReactNode;
};
export const DropDownBurgerMenu = ({ children }: DropDownBurgerMenuProps) => {
	const { user, isLoading } = useUser();

	return (
		<div className="flex flex-col justify-center items-center fixed inset-0 h-screen w-screen bg-white z-20 lg:hidden">
			{children}
			{!isLoading && !user && <HeaderUserLoginContent />}
			{!isLoading && user && (
				<div className="flex gap-4 flex-col justify-center items-center font-semibold text-blue-600">
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
