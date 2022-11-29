import  { useState } from 'react'

export const useHamburgerMenu = () => {
    const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);
	const openBurgerMenu = () => {
		setIsBurgerMenuActive(true);
	};
	const closeBurgerMenu = () => {
		setIsBurgerMenuActive(false);
	};
  return (
    {
        isBurgerMenuActive,openBurgerMenu,closeBurgerMenu
    }
  )
}
