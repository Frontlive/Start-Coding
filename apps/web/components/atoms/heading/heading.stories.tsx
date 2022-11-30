import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from './heading';

export default {
	title: 'Main Library/atoms/Heading',
	component: Heading,
} as ComponentMeta<typeof Heading>;

export const Primary: ComponentStory<typeof Heading> = (props) => {
	return <Heading {...props}>Example heading</Heading>;
};

Primary.args = {
	tag: 'h1',
	size: 'medium',
};
