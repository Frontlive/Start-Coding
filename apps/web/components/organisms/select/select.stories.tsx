import { Select } from 'organisms/select/select';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useController, useForm } from 'react-hook-form';

export default {
	title: 'Main Library/molecules/Select',
	component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (props) => {
	const options = [
		{ label: 'basic', value: 'basic' },
		{ label: 'advanced', value: 'advanced' },
	];
	const { control } = useForm<{ difficulty: string }>({
		defaultValues: {
			difficulty: '',
		},
	});

	const {
		field: { value, onChange },
	} = useController<{ difficulty: string }>({ control, name: 'difficulty' });

	return (
		<div className="max-w-sm">
			<Select
				onChange={onChange}
				options={options}
				name="difficulty"
				value={value}
				label="Choose value"
				isError={Boolean(props.isError)}
				errorMessage={props.errorMessage || ''}
				disabled={props.disabled}
			/>
		</div>
	);
};

export const Primary = Template.bind({});

Primary.args = {};

export const Error = Template.bind({});

Error.args = {};
