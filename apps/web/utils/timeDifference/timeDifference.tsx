import { TimePolishPlurals } from 'utils/plurals/PolishPlurals';

const msPerMinute = 60 * 1000;
const msPerHour = msPerMinute * 60;
const msPerDay = msPerHour * 24;
const msPerMonth = msPerDay * 30;
const msPerYear = msPerDay * 365;

export const timeDifference = (previous: number) => {
	const current = Date.now();
	const elapsed = current - previous;

	if (elapsed < msPerMinute) {
		return TimePolishPlurals(-Math.round(elapsed / 1000), 'second');
	} else if (elapsed < msPerHour) {
		return TimePolishPlurals(-Math.round(elapsed / msPerMinute), 'minute');
	} else if (elapsed < msPerDay) {
		return TimePolishPlurals(-Math.round(elapsed / msPerHour), 'hour');
	} else if (elapsed < msPerMonth) {
		return TimePolishPlurals(-Math.round(elapsed / msPerDay), 'day');
	} else if (elapsed < msPerYear) {
		return TimePolishPlurals(-Math.round(elapsed / msPerMonth), 'month');
	} else {
		return TimePolishPlurals(-Math.round(elapsed / msPerYear), 'year');
	}
};
