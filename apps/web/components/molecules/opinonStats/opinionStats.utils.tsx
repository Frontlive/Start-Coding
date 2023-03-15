import { polishPlurals } from 'utils/plurals/PolishPlurals';

export const opinionPolishPlurals = (value: number) => {
	const OpinionsPluralsPosts = {
		zero: 'opinii',
		one: 'opinia',
		two: 'opinie',
		few: 'opinie',
		many: 'opinii',
		other: 'opinie',
	};

	return polishPlurals(OpinionsPluralsPosts, value);
};
