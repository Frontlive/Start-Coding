import { ChangeEvent, forwardRef, ReactNode } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFileInput } from 'molecules/fileInput/useFileInput';
import { Text } from 'atoms/text/text';

type FileInputProps = {
	handleChange: (filesSrc: string[]) => void;
	children: ReactNode;
	name: string;
	isSinglePhoto?: boolean;
};

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
	({ children, name, isSinglePhoto }, ref) => {
		const { onDrop, errorMessage } = useFileInput({
			isSinglePhoto,
		});
		const { getRootProps, getInputProps, open } = useDropzone({
			accept: { 'image/*': [] },
			onDrop: onDrop,
			noClick: true,
			noKeyboard: true,
		});

		const onChange = (e: ChangeEvent<HTMLInputElement>) => {
			console.log(e);
		};

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
