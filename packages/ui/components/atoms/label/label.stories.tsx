import { Label } from './label';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Main Library/atoms/Label',
	component: Label,
} as ComponentMeta<typeof Label>;

export const Primary: ComponentStory<typeof Label> = (props) => {
	return (
		<div className="relative max-w-2xl">
			<Label {...props}>
				<input className="border  block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
			</Label>
		</div>
	);
};

Primary.args = {
	label: 'Podaj imię',
	id: 'id',
};

export const Disabled: ComponentStory<typeof Label> = (props) => {
	return (
		<div className="relative max-w-2xl">
			<Label {...props}>
				<input className="border  block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
			</Label>
		</div>
	);
};

Disabled.args = {
	label: 'Podaj imie',
	disabled: true,
	id: 'id',
};
