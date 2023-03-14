import { TimePolishPlurals } from 'utils/plurals/PolishPlurals';

const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = MS_PER_SECOND * 60;
const MS_PER_HOUR = MS_PER_MINUTE * 60;
const MS_PER_DAY = MS_PER_HOUR * 24;
const MS_PER_MONTH = MS_PER_DAY * 30;
const MS_PER_YEAR = MS_PER_DAY * 365;

export const getTimeDiffFromTimestamp = (timestamp: number) => {
	const current = Date.now();
	const elapsed = current - timestamp;

	if (elapsed < MS_PER_MINUTE) {
		return TimePolishPlurals(-Math.round(elapsed / MS_PER_SECOND), 'second');
	} else if (elapsed < MS_PER_HOUR) {
		return TimePolishPlurals(-Math.round(elapsed / MS_PER_MINUTE), 'minute');
	} else if (elapsed < MS_PER_DAY) {
		return TimePolishPlurals(-Math.round(elapsed / MS_PER_HOUR), 'hour');
	} else if (elapsed < MS_PER_MONTH) {
		return TimePolishPlurals(-Math.round(elapsed / MS_PER_DAY), 'day');
	} else if (elapsed < MS_PER_YEAR) {
		return TimePolishPlurals(-Math.round(elapsed / MS_PER_MONTH), 'month');
	} else {
		return TimePolishPlurals(-Math.round(elapsed / MS_PER_YEAR), 'year');
	}
};
