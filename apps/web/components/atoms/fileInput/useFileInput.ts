import { useEffect, useState } from 'react';

export const useFileInput = () => {
	const [files, setFiles] = useState<File[]>([]);
	const [filesSrc, setFilesSrc] = useState<string[]>([]);
	const handleChange = (file: File) => {
		setFiles((prevState) => [...prevState, file]);
	};

	useEffect(() => {
		files.forEach((file) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.addEventListener('load', (e) => {
				const src = e.target?.result;
				if (!src || typeof src !== 'string') return;
				setFilesSrc((prevState) => [...prevState, src]);
			});
		});
	}, [files]);

	return {
		filesSrc,
		files,
		handleChange,
	};
};
