import { Divider } from './divider';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Main Library/atoms/Divider',
	component: Divider,
} as ComponentMeta<typeof Divider>;

export const Primary: ComponentStory<typeof Divider> = () => {
	return (
		<div style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
			<Divider />
		</div>
	);
};

Primary.args = {};
