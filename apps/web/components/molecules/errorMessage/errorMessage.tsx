import { Text, TextSize, TextTag } from 'atoms/text/text';

type ErrorMessageProps = {
	children: string;
	size: TextSize;
	tag: TextTag;
};

export const ErrorMessage = ({ children, size, tag }: ErrorMessageProps) => {
	return (
		<Text size={size} variant="error" tag={tag}>
			{children}
		</Text>
	);
};
