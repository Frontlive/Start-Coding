type ServerErrorWithStatusAndMessage = {
	status: number;
	message: string;
};

export const isServerErrorWithStatusAndMessage = (
	error: unknown,
): error is ServerErrorWithStatusAndMessage => {
	return (
		typeof error === 'object' &&
		error !== null &&
		'message' in error &&
		'status' in error
	);
};
