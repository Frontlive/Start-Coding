import { Link } from 'atoms/link/link';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Main Library/atoms/Link',
	component: Link,
} as ComponentMeta<typeof Link>;

export const Default: ComponentStory<typeof Link> = (props) => {
	return <Link {...props}>Zaloguj się</Link>;
};

Default.args = {
	href: '',
	variant: 'primary',
};
