import { ErrorMessage } from './errorMessage';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Main Library/molecules/ErrorMessage',
	component: ErrorMessage,
} as ComponentMeta<typeof ErrorMessage>;

export const Default: ComponentStory<typeof ErrorMessage> = (props) => {
	return <ErrorMessage {...props}>Example error message</ErrorMessage>;
};

Default.args = {
	tag: 'p',
};
