declare module '*.svg' {
	import { ComponentType } from 'react';
	export const ReactComponent: ComponentType;
	const content: {
		ReactComponent: ReactComponent;
	};
	export default content;
}
