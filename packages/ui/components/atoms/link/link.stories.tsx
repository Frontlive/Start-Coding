import { Link } from './link';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Main Library/atoms/Link',
	component: Link,
} as ComponentMeta<typeof Link>;

export const Primary: ComponentStory<typeof Link> = (props) => {
	return <Link {...props}>Zaloguj się</Link>;
};

Primary.args = {
	href: 'https://google.com',
	variant: 'primary',
};

export const Secondary: ComponentStory<typeof Link> = (props) => {
	return <Link {...props}>Zaloguj się</Link>;
};

Secondary.args = {
	href: 'https://google.com',
	variant: 'secondary',
};
