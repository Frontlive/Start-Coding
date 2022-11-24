import { VisualyHidden } from './visuallyHidden';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Main Library/atoms/VisualyHidden',
	component: VisualyHidden,
} as ComponentMeta<typeof VisualyHidden>;

export const Default: ComponentStory<typeof VisualyHidden> = (props) => {
	return (
		<VisualyHidden {...props}>
			<button>visually hidden content</button>
		</VisualyHidden>
	);
};

Default.args = {
	as: 'div',
};

export const VisibleOnFocus: ComponentStory<typeof VisualyHidden> = (props) => {
	return (
		<VisualyHidden {...props}>
			<button>visually hidden content</button>
		</VisualyHidden>
	);
};

VisibleOnFocus.args = {
	as: 'div',
	visibleOnFocus: true,
};
