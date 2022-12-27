import { Tag } from 'molecules/tag/tag';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'Main Library/molecules/Tag',
	component: Tag,
} as ComponentMeta<typeof Tag>;

export const Primary: ComponentStory<typeof Tag> = (props) => {
	return (
		<div style={{ width: '360px' }}>
			<Tag {...props} />
		</div>
	);
};

Primary.args = {
	tag: 'JavaScript',
};
