import { Card } from 'atoms/card/card';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from 'atoms/text/text';

export default {
	title: 'Main Library/atoms/Card',
	component: Card,
} as ComponentMeta<typeof Card>;

export const Primary: ComponentStory<typeof Card> = (props) => {
	return (
		<Card {...props}>
			<Text size="medium" variant="default" tag="p">
				Witaj karto
			</Text>
		</Card>
	);
};

Primary.args = {
	tag: 'section',
};
