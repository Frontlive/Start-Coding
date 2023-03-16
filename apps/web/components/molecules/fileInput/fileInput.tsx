import type { ReactNode } from 'react';
import { forwardRef } from 'react';
import { useFileInput } from 'molecules/fileInput/useFileInput';
import { Text } from 'ui';

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
				className="flex h-full cursor-pointer flex-col items-center justify-start"
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
