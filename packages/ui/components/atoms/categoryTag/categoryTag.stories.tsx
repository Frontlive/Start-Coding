import { CategoryTag } from './categoryTag';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../text/text';

export default {
	title: 'Main Library/atoms/CategoryTag',
	component: CategoryTag,
} as ComponentMeta<typeof CategoryTag>;

export const Primary: ComponentStory<typeof CategoryTag> = (props) => {
	return (
		<CategoryTag {...props}>
			<Text size="medium" variant="default" tag="p">
				Witaj karto
			</Text>
		</CategoryTag>
	);
};

Primary.args = {
	label: 'TypeScript',
};
