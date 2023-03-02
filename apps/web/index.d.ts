declare module '*.svg' {
	import type { ComponentType } from 'react';
	export const ReactComponent: ComponentType;
	const content: {
		ReactComponent: ReactComponent;
	};
	export default content;
}
