import {
	isFileTooBig,
	isFileTypeValid,
} from 'molecules/fileInput/fileInput.utils';
import { useState } from 'react';

type UseFileInputValidateArgs = {
	file: File;
};

export const useFileInputValidation = () => {
	const [errorMessage, setErrorMessage] = useState('');

	const isFileValid = ({ file }: UseFileInputValidateArgs) => {
		if (!isFileTypeValid(file)) {
			setErrorMessage('Typ pliku nie jest wspierany.');
			return false;
		}
		if (isFileTooBig(file)) {
			setErrorMessage('Plik jest za duży. Maksymalny rozmiar pliku to: 2Mb');
			return false;
		}

		setErrorMessage('');
		return true;
	};
	return {
		errorMessage,
		isFileValid,
	};
};
