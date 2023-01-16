import { Checkbox } from 'atoms/checkbox/checkbox';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Main Library/atoms/Checkbox',
	component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Primary: ComponentStory<typeof Checkbox> = (props) => {
	return <Checkbox {...props}></Checkbox>;
};

Primary.args = {
	label: 'Checkbox',
};
