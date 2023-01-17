import { ReactNode } from 'react';
import clsx from 'clsx';

type HeaderNavProps = {
	children: ReactNode;
	isBurgerMenuActive: boolean;
};

export const HeaderNav = ({ children, isBurgerMenuActive }: HeaderNavProps) => {
	return (
		<nav
			id="main-menu"
			className={clsx(
				'fixed lg:relative inset-0 ms: bg-white z-20 hidden lg:flex flex-col items-center overflow-y-auto w-full',
				{ '!flex ': isBurgerMenuActive },
			)}
		>
			<div className="mt-auto mb-auto flex flex-col lg:flex-row items-center gap-5 w-full py-24 lg:py-0">
				{children}
			</div>
		</nav>
	);
};
