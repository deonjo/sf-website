/**
 * Shared values for the weekly gathering.
 *
 * The venue and address appear on the church page, in the Event schema, and in
 * the home page banner. They live here so those three can never drift apart.
 */

export const SITE = {
	timeZone: 'America/Los_Angeles',
} as const;

export const GATHERING = {
	name: 'Christian Discipleship',
	day: 'Sunday',
	time: '12:00 PM',
	cadence: 'Sundays at 12:00 PM',
	/** 24h times drive the Event schema's start/end. */
	startTime: '12:00',
	endTime: '13:30',
	venue: 'The Collective Studios',
	street: '1751 Fulton St',
	city: 'San Francisco',
	region: 'CA',
	postalCode: '94117',
	country: 'US',
	address: '1751 Fulton St, San Francisco, CA 94117',
	mapUrl:
		'https://maps.google.com/?q=The+Collective+Studios,+1751+Fulton+St,+San+Francisco,+CA+94117',
	mapEmbedUrl:
		'https://www.google.com/maps?q=The+Collective+Studios,+1751+Fulton+St,+San+Francisco,+CA+94117&output=embed',
	/** What actually happens, in plain terms. */
	format:
		'We start off with praise and then go through some discipleship material which we put into practice. And then we have lunch provided afterwards.',
} as const;

/**
 * The Klesis SF Connect Form, shared with the klesis-sf site so both front
 * doors feed the same Google Sheet and the same Apps Script triggers.
 *
 * The form must keep "Collect email addresses" set to "Do not collect".
 * Turning on verified collection puts a Google sign-in wall in front of the
 * embed and anonymous submissions start being rejected.
 */
export const CONNECT_FORM = {
	shortUrl: 'https://forms.gle/u4hDu6jHP7fWmDvt5',
	embedUrl:
		'https://docs.google.com/forms/d/e/1FAIpQLSc4x-vTcVz8PWtnCGKNbOkhdHf-2BbMpp880_FndrTiO9r5MA/viewform?embedded=true&chrome=false&header=false&hl=en&rm=minimal',
} as const;
