import { timePolishPlurals } from 'utils/plurals/PolishPlurals';

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
		return timePolishPlurals(-Math.round(elapsed / MS_PER_SECOND), 'second');
	}

	if (elapsed < MS_PER_HOUR) {
		return timePolishPlurals(-Math.round(elapsed / MS_PER_MINUTE), 'minute');
	}

	if (elapsed < MS_PER_DAY) {
		return timePolishPlurals(-Math.round(elapsed / MS_PER_HOUR), 'hour');
	}

	if (elapsed < MS_PER_MONTH) {
		return timePolishPlurals(-Math.round(elapsed / MS_PER_DAY), 'day');
	}

	if (elapsed < MS_PER_YEAR) {
		return timePolishPlurals(-Math.round(elapsed / MS_PER_MONTH), 'month');
	}

	return timePolishPlurals(-Math.round(elapsed / MS_PER_YEAR), 'year');
};
