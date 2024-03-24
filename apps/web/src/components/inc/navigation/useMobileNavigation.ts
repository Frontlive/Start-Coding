import { useBoolean } from '@/hooks/useBoolean';

export const useMobileNavigation = () => {
	const { state, setTrue, setFalse, toggle } = useBoolean();

	const open = () => {
		setTrue();
	};

	const close = () => {
		setFalse();
	};

	return {
		isOpen: state,
		open,
		close,
		toggle,
	};
};
