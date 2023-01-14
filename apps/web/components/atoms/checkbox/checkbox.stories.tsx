import { Checkbox } from 'atoms/checkbox/checkbox';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Main Library/atoms/Checkbox',
	component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Primary: ComponentStory<typeof Checkbox> = (props) => {
	return (
		<div style={{ width: '360px' }}>
			<Checkbox {...props} />
		</div>
	);
};

Primary.args = {
	id: 'checkbox',
	label: 'Default checkbox',
};
