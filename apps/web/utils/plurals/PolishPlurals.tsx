export const polishPlurals = (
	plural: {
		zero: string;
		one: string;
		two: string;
		few: string;
		many: string;
		other: string;
	},
	value: number,
) => {
	const formatter = new Intl.PluralRules('pl', {
		type: 'cardinal',
	});

	const pluralValue = formatter.select(value);
	const pluralForm = plural[pluralValue];

	return `${value} ${pluralForm}`;
};

export const timePolishPlurals = (
	value: number,
	type: Intl.RelativeTimeFormatUnit,
) => {
	const rtf = new Intl.RelativeTimeFormat('pl', { style: 'long' });

	return rtf.format(value, type);
};
