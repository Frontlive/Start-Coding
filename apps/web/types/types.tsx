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

export type Opinion = {
	author: string;
	avatar: string;
	rating: number;
	comment: string;
};

export type Comment = {
	author: string;
	avatar: string;
	comment: string;
	date: number;
};
