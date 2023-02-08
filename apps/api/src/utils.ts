export const removeNull = <T>(arg: T | null | undefined) => {
	return arg ?? undefined;
};
