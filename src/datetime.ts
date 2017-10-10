import {
	MILLISECONDS_PER_SECOND,
	MILLISECONDS_PER_MINUTE,
	MILLISECONDS_PER_HOUR,
	MILLISECONDS_PER_DAY
} from './constants';
import { DatePart } from './enums';

class DateTime {

	private _date: Date;

	constructor(private _milliseconds: number) {
		this._date = new Date(_milliseconds);
	}

	get seconds(): number {
		return this._date.getUTCSeconds();
	}

	get minutes(): number {
		return this._date.getUTCMinutes();
	}

	get hours(): number {
		return this._date.getUTCHours();
	}

	get day(): number {
		return this._date.getUTCDate();
	}

	get month(): number {
		return this._date.getUTCMonth() + 1;
	}

	get year(): number {
		return this._date.getUTCFullYear();
	}

	get totalSeconds(): number {
		return Math.floor(this._milliseconds / MILLISECONDS_PER_SECOND);
	}

	get totalMinutes(): number {
		return Math.floor(this._milliseconds / MILLISECONDS_PER_MINUTE);
	}

	get totalHours(): number {
		return Math.floor(this._milliseconds / MILLISECONDS_PER_HOUR);
	}

	get totalDays(): number {
		return Math.floor(this._milliseconds / MILLISECONDS_PER_DAY);
	}

	static getTotalDays(milliseconds: number): number {
		return new DateTime(milliseconds).totalDays;
	}

	static dateDiff(
		datePart: DatePart,
		startDate: Date,
		endDate: Date
	): number {

		const DATE_DIFF = endDate.getTime() - startDate.getTime();
		let dateDiff = 0;

		switch (datePart) {
			case DatePart.second:
				dateDiff = DATE_DIFF / MILLISECONDS_PER_SECOND;
				break;
			case DatePart.minute:
				dateDiff = DATE_DIFF / MILLISECONDS_PER_MINUTE;
				break;
			case DatePart.hour:
				dateDiff = DATE_DIFF / MILLISECONDS_PER_HOUR;
				break;
			case DatePart.day:
				dateDiff = DATE_DIFF / MILLISECONDS_PER_DAY;
				break;
		}

		return Math.floor(dateDiff);
	}

	static dateAdd(
		datePart: DatePart,
		increment: number,
		date: Date
	): Date {

		let millisecondsToAdd = 0;

		switch (datePart) {
			case DatePart.second:
				millisecondsToAdd = increment * MILLISECONDS_PER_SECOND;
				break;
			case DatePart.minute:
				millisecondsToAdd = increment * MILLISECONDS_PER_MINUTE;
				break;
			case DatePart.hour:
				millisecondsToAdd = increment * MILLISECONDS_PER_HOUR;
				break;
			case DatePart.day:
				millisecondsToAdd = increment * MILLISECONDS_PER_DAY;
				break;
		}

		return new Date(date.getTime() + millisecondsToAdd);
	}
}

export { DateTime };