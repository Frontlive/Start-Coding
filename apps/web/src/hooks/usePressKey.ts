import { useEffect } from 'react';

type Key = 'Escape';

export function usePressKey(key: Key, callback: () => void) {
	const listener = (event: KeyboardEvent) => {
		if (event.key === key) {
			callback();
		}
	};
	useEffect(() => {
		window.addEventListener('keydown', listener);

		return () => {
			window.removeEventListener('keydown', listener);
		};
	}, []);
}
