import { Input } from 'molecules/input/input';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

export default {
	title: 'Main Library/molecules/Input',
	component: Input,
} as ComponentMeta<typeof Input>;

export const Primary: ComponentStory<typeof Input> = (props) => {
	const [value, setValue] = useState('');
	return (
		<div className="max-w-sm">
			<Input
				{...props}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
};

Primary.args = {
	type: 'text',
	label: 'Podaj imię',
};

export const WithError: ComponentStory<typeof Input> = (props) => {
	const [value, setValue] = useState('');
	return (
		<div className="max-w-sm">
			<Input
				{...props}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
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
	const [value, setValue] = useState('');
	return (
		<div className="max-w-sm">
			<Input
				{...props}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
};

WithDisabled.args = {
	disabled: true,
	label: 'Podaj imię',
};
