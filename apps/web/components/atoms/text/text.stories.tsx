import { Text } from 'atoms/text/text';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Main Library/atoms/Text',
	component: Text,
} as ComponentMeta<typeof Text>;

export const Primary: ComponentStory<typeof Text> = (props) => {
	return <Text {...props}>Example text</Text>;
};

Primary.args = {
	variant: 'default',
	size: 'medium',
	tag: 'p',
};

export const ErrorText: ComponentStory<typeof Text> = (props) => {
	return <Text {...props}>Example text</Text>;
};

ErrorText.args = {
	variant: 'error',
	size: 'medium',
	tag: 'p',
};
