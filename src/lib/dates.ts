import { GATHERING, SITE } from '../consts';

const TZ = SITE.timeZone;

const WEEKDAYS = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
] as const;

/** "Sunday, August 30, 2026" */
const longDate = new Intl.DateTimeFormat('en-US', {
	timeZone: TZ,
	weekday: 'long',
	month: 'long',
	day: 'numeric',
	year: 'numeric',
});

/** "2026-08-30", used for <time datetime> and schema dates. */
const isoDay = new Intl.DateTimeFormat('en-CA', {
	timeZone: TZ,
	year: 'numeric',
	month: '2-digit',
	day: '2-digit',
});

export function formatLongDate(date: Date): string {
	return longDate.format(date);
}

/** The calendar day in Pacific time, as `YYYY-MM-DD`. */
export function pacificDay(date: Date): string {
	return isoDay.format(date);
}

/**
 * The next `GATHERING.day` on or after `from`, as a Date pinned to noon UTC.
 *
 * Noon UTC is early morning Pacific on the same calendar day, so the formatters
 * above render the intended day no matter which side of the date line the
 * viewer (or the build machine) sits on. If today already is the gathering day
 * this returns today, since "this coming Sunday" should still say Sunday on
 * Sunday.
 */
export function nextGatheringDate(from: Date = new Date()): Date {
	const [year, month, day] = pacificDay(from).split('-').map(Number);
	const date = new Date(Date.UTC(year, month - 1, day, 12));
	const target = WEEKDAYS.indexOf(GATHERING.day);
	date.setUTCDate(date.getUTCDate() + ((target - date.getUTCDay() + 7) % 7));
	return date;
}
