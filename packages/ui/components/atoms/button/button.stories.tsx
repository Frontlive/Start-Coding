import { Button } from './button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Main Library/atoms/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = (props) => {
	return (
		<div style={{ width: '360px' }}>
			<Button {...props} />
		</div>
	);
};

Primary.args = {
	variant: 'primary',
	children: 'Test Primary',
};

export const Secondary: ComponentStory<typeof Button> = (props) => {
	return (
		<div style={{ width: '360px' }}>
			<Button {...props} />
		</div>
	);
};

Secondary.args = {
	variant: 'secondary',
	children: 'Test Secondary',
};
