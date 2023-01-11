export const isFileTypeValid = (file: File) => {
	const validTypes = [
		'image/jpeg',
		'image/jpg',
		'image/png',
		'image/gif',
		'image/x-icon',
	];
	return validTypes.includes(file.type);
};

export const isFileTooBig = (file: File) => {
	const { size } = file;
	const mb = 2000000;
	return size > mb;
};

export const isSourceString = (
	src: string | ArrayBuffer | null | undefined,
): src is string => {
	return !src || typeof src !== 'string';
};
