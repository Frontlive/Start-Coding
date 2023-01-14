import { VisuallyHidden } from './visuallyHidden';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Main Library/atoms/VisualyHidden',
	component: VisuallyHidden,
} as ComponentMeta<typeof VisuallyHidden>;

export const Default: ComponentStory<typeof VisuallyHidden> = (props) => {
	return (
		<VisuallyHidden {...props}>
			<button>visually hidden content</button>
		</VisuallyHidden>
	);
};

Default.args = {
	tag: 'span',
};

export const VisibleOnFocus: ComponentStory<typeof VisuallyHidden> = (
	props,
) => {
	return (
		<VisuallyHidden {...props}>
			<button>visually hidden content</button>
		</VisuallyHidden>
	);
};

VisibleOnFocus.args = {
	tag: 'span',
	visibleOnFocus: true,
};
