import { useCallback, useState } from 'react';

type UseFileInputArgs = {
	isSinglePhoto?: boolean;
};

export const useFileInput = ({ isSinglePhoto }: UseFileInputArgs) => {
	const [filesSrc, setFilesSrc] = useState<string[]>([]);
	const [errorMessage, setErrorMessage] = useState('');

	const isFileTypeValid = (file: File) => {
		const validTypes = [
			'image/jpeg',
			'image/jpg',
			'image/png',
			'image/gif',
			'image/x-icon',
		];
		return validTypes.includes(file.type);
	};

	const isFileTooBig = (file: File) => {
		const { size } = file;
		const mb = 2000000;
		return size > mb;
	};

	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			acceptedFiles.forEach((file) => {
				const fileReader = new FileReader();
				fileReader.readAsDataURL(file);
				fileReader.addEventListener('load', (e) => {
					const src = e.target?.result;
					if (!src || typeof src !== 'string') return;
					if (!isFileTypeValid(file)) {
						setErrorMessage('Typ pliku nie jest wspierany.');
						return;
					}
					if (isFileTooBig(file)) {
						setErrorMessage(
							'Plik jest za duży. Maksymalny rozmiar pliku to: 2Mb',
						);
						return;
					}
					setErrorMessage('');
					if (isSinglePhoto) {
						setFilesSrc([src]);
						return;
					}
					setFilesSrc((prevState) => [...prevState, src]);
				});
			});
		},
		[isSinglePhoto],
	);

	return {
		filesSrc,
		onDrop,
		errorMessage,
	};
};
