import { forwardRef, ReactNode } from 'react';
import { useFileInput } from 'molecules/fileInput/useFileInput';
import { Text } from 'ui/components/atoms/text/text';

type FileInputProps = {
	handleChange: (filesSrc: string[]) => void;
	children: ReactNode;
	name: string;
	isSinglePhoto?: boolean;
};

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
	({ children, name, isSinglePhoto }, ref) => {
		const { errorMessage, getInputProps, getRootProps, open, onChange } =
			useFileInput({
				isSinglePhoto,
			});

		return (
			<div
				className="h-full cursor-pointer flex flex-col justify-start items-center"
				{...getRootProps()}
			>
				<input ref={ref} {...getInputProps({ name, onChange })} />
				<button className="min-h-full" onClick={open}>
					{children}
				</button>
				{errorMessage && (
					<Text size="medium" variant="error" tag="p">
						{errorMessage}
					</Text>
				)}
			</div>
		);
	},
);

FileInput.displayName = 'FileInput';
