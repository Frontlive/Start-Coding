import { Container } from './container';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Main Library/atoms/Container',
	component: Container,
} as ComponentMeta<typeof Container>;

export const Default: ComponentStory<typeof Container> = (props) => {
	return <Container {...props} />;
};

Default.args = {
	children:
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, ab nisi cupiditate facilis adipisci dignissimos porro doloremque pariatur iste eveniet quae possimus unde soluta amet velit aperiam fuga aspernatur ut!',
};
