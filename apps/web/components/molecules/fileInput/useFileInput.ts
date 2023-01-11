import { ChangeEvent, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { isSourceString } from 'molecules/fileInput/fileInput.utils';
import { useFileInputValidation } from 'molecules/fileInput/useFileInputValidation';

type UseFileInputArgs = {
	isSinglePhoto?: boolean;
};

export const useFileInput = ({ isSinglePhoto }: UseFileInputArgs) => {
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
		console.log(e);
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
