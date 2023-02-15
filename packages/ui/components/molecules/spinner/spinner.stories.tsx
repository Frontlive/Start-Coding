import { Spinner } from './spinner';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Main Library/atoms/Spinner',
	component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const Default: ComponentStory<typeof Spinner> = () => {
	return <Spinner />;
};
