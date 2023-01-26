import { Input } from './input';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Main Library/molecules/Input',
	component: Input,
} as ComponentMeta<typeof Input>;

export const Primary: ComponentStory<typeof Input> = (props) => {
	return (
		<div className="max-w-sm">
			<Input {...props} />
		</div>
	);
};

Primary.args = {
	type: 'text',
	label: 'Podaj imię',
};

export const WithError: ComponentStory<typeof Input> = (props) => {
	return (
		<div className="max-w-sm">
			<Input {...props} />
		</div>
	);
};

WithError.args = {
	isError: true,
	type: 'text',
	errorMessage: 'Podane imię jest nieprawidłowe',
	label: 'Podaj imię',
};

export const WithDisabled: ComponentStory<typeof Input> = (props) => {
	return (
		<div className="max-w-sm">
			<Input {...props} />
		</div>
	);
};

WithDisabled.args = {
	disabled: true,
	label: 'Podaj imię',
};
