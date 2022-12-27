export type Challenge = {
	id: string | number;
	title: string;
	description: string;
	designs: string;
	difficulty: string;
	image: string;
	rating: number;
	tags: Technologies[];
};

export type Technologies = 'TypeScript' | 'JavaScript' | 'React' | 'Next';

export type Tag = {
	tag: Technologies;
};
