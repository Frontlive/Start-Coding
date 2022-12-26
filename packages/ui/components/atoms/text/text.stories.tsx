import { Text } from './text';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Main Library/atoms/Text',
	component: Text,
} as ComponentMeta<typeof Text>;

export const Default: ComponentStory<typeof Text> = (props) => {
	return <Text {...props}>Example message</Text>;
};
