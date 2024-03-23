import { useState } from 'react';
import { usePressKey } from '../../../hooks/usePressKey';

export function useMobileNavigation() {
	const [isOpen, setIsOpen] = useState(false);

	const open = () => {
		setIsOpen(() => true);
	};

	const close = () => {
		setIsOpen(() => false);
	};

	usePressKey('Escape', () => close());

	return {
		isOpen,
		open,
		close,
	};
}
