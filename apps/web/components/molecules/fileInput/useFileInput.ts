import { ChangeEvent, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { isSourceString } from 'molecules/fileInput/fileInput.utils';
import { useFileInputValidation } from 'molecules/fileInput/useFileInputValidation';
import { Image } from 'organisms/newChallengeForm/useNewChallengeForm';

type UseFileInputArgs = {
	isSinglePhoto?: boolean;
	handleChange: (image: Image[]) => void;
};

export const useFileInput = ({
	isSinglePhoto,
	handleChange,
}: UseFileInputArgs) => {
	const [filesSrc, setFilesSrc] = useState<string[]>([]);
	const { isFileValid, errorMessage } = useFileInputValidation();
	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			acceptedFiles.forEach((file) => {
				const fileReader = new FileReader();
				fileReader.readAsDataURL(file);
				fileReader.addEventListener('load', (e) => {
					const src = e.target?.result;
					if (!isSourceString(src)) return;

					if (!isFileValid({ file })) return;

					if (isSinglePhoto) {
						setFilesSrc([src]);
						return;
					}
					setFilesSrc((prevState) => [...prevState, src]);
				});
			});
		},
		[isSinglePhoto, isFileValid],
	);

	const { getRootProps, getInputProps, open } = useDropzone({
		accept: { 'image/*': [] },
		onDrop,
		noClick: true,
		noKeyboard: true,
	});

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) {
			return;
		}
		const images = Array.from(e.target.files, (file) => {
			return {
				previewUrl: URL.createObjectURL(file),
				file,
			};
		});

		handleChange(images);

		console.log(e.target.files);
	};

	return {
		filesSrc,
		errorMessage,
		getRootProps,
		getInputProps,
		open,
		onChange,
	};
};
