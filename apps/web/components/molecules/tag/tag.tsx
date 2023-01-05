import type { Tag as TagType } from '../../../types/types';
import { Text } from 'atoms/text/text';

type TagProps = TagType;
export const Tag = ({ tag }: TagProps) => {
	return (
		<div className="px-2 border-2 rounded-2xl">
			<Text size="small" variant="default" tag="p" position="left">
				{tag}
			</Text>
		</div>
	);
};
