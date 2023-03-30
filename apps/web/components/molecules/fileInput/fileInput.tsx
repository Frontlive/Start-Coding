import { forwardRef } from 'react';
import { useFileInput } from 'molecules/fileInput/useFileInput';
import { Text } from 'ui';
import { Image } from 'organisms/newChallengeForm/useNewChallengeForm';

type FileInputProps = {
	handleChange: (files: Image[]) => void;
	name: string;
	isSinglePhoto?: boolean;
};

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
	({ name, isSinglePhoto, handleChange }, ref) => {
		const { errorMessage, getInputProps, getRootProps, open, onChange } =
			useFileInput({
				isSinglePhoto,
				handleChange,
			});

		return (
			<div
				className="h-full cursor-pointer flex flex-col justify-start items-center"
				{...getRootProps()}
			>
				<input ref={ref} {...getInputProps({ name, onChange })} />
				<button className="min-h-full" onClick={open}>
					Dodaj zdjęcia
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
