export type SearchString = {
	value: string;
	type: 'SearchString';
};
export const isSearchString = (s: unknown): s is SearchString => {
	if (typeof s !== 'object' || s === null) {
		return false;
	}

	const { value, type } = s as { value: unknown; type: unknown };

	return typeof value === 'string' && type === 'SearchString';
};
