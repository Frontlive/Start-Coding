export type Challenge = {
	id: string | number;
	title: string;
	description: string;
	designs: string;
	difficulty: string;
	image: string;
	rating: number;
	tags: string[];
};

export type FilterOptions = {
	value: string;
	label: string;
	checked: boolean;
};

export type Filter = {
	id: string;
	name: string;
	options: FilterOptions[];
};

export type SortOption = {
	name: string;
	value: string;
	href: string;
	current: boolean;
};
