export const OpinionPolishPlurals = (value: number) => {
	const formatter = new Intl.PluralRules('pl', {
		type: 'cardinal',
	});

	const polishPluralsPosts = {
		zero: 'opinii',
		one: 'opinia',
		two: 'opinie',
		few: 'opinie',
		many: 'opinii',
		other: 'opinie',
	};

	const plural = formatter.select(value);
	const pluralForm = polishPluralsPosts[plural];

	return `${value} ${pluralForm}`;
};

export const TimePolishPlurals = (
	value: number,
	type: Intl.RelativeTimeFormatUnit,
) => {
	const rtf = new Intl.RelativeTimeFormat('pl', { style: 'long' });

	return rtf.format(value, type);
};
