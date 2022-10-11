import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GenericLink } from 'atoms/genericLink/genericLink';

export default {
	title: 'Main Library/atoms/GenericLink',
	component: GenericLink,
} as ComponentMeta<typeof GenericLink>;

export const Primary: ComponentStory<typeof GenericLink> = (props) => {
	return <GenericLink {...props} />;
};

Primary.args = {
	href: '',
	children: 'Zaloguj się!',
};
