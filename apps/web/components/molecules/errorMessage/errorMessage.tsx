import { TagPosition, Text, TextSize, TextTag } from 'atoms/text/text';

type ErrorMessageProps = {
	children: string;
	size: TextSize;
	tag: TextTag;
	position?: TagPosition;
};

export const ErrorMessage = ({
	children,
	size,
	tag,
	position,
}: ErrorMessageProps) => {
	return (
		<Text size={size} variant="error" tag={tag} position={position}>
			{children}
		</Text>
	);
};
