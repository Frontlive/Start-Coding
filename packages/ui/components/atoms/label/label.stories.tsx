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
				<input className="border-1  peer block w-full appearance-none rounded-lg border bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
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
				<input className="border-1  peer block w-full appearance-none rounded-lg border bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" />
			</Label>
		</div>
	);
};

Disabled.args = {
	label: 'Podaj imie',
	disabled: true,
	id: 'id',
};
