import { useState } from 'react';
import { lockScroll, unlockScroll } from '../../../utils/pageScroll';

export const useHamburgerMenu = () => {
	const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);
	const openBurgerMenu = () => {
		setIsBurgerMenuActive(true);
	};
	const closeBurgerMenu = () => {
		setIsBurgerMenuActive(false);
	};
	const toggleBurgerMenu = () => {
		if (isBurgerMenuActive) {
			closeBurgerMenu();
			unlockScroll({ mobileOnly: true });
		} else {
			openBurgerMenu();
			lockScroll({ mobileOnly: true });
		}
	};
	return {
		isBurgerMenuActive,
		openBurgerMenu,
		closeBurgerMenu,
		toggleBurgerMenu,
	};
};
