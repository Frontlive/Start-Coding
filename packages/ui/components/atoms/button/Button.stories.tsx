import { Button } from './button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Main Library/atoms/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (props) => {
	return <Button {...props}>Example error message</Button>;
};
