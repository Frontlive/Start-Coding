import { useState } from 'react';

export function useBoolean(defaultValue = false) {
	const [state, setState] = useState(defaultValue);

	const setTrue = () => {
		setState(() => true);
	};

	const setFalse = () => {
		setState(() => false);
	};

	const toggle = () => {
		setState(() => !state);
	};

	return {
		state,
		setTrue,
		setFalse,
		toggle,
	};
}
