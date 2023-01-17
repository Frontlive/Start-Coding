import { useState } from 'react';

export const useHamburgerMenu = () => {
	const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);
	const openBurgerMenu = () => {
		setIsBurgerMenuActive(true);
	};
	const closeBurgerMenu = () => {
		setIsBurgerMenuActive(false);
	};
	const toggleBurgerMenu = () => {
		setIsBurgerMenuActive((prev) => !prev);
	};
	return {
		isBurgerMenuActive,
		openBurgerMenu,
		closeBurgerMenu,
		toggleBurgerMenu,
	};
};
