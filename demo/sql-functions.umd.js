(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.sqlFunctions = {})));
}(this, (function (exports) { 'use strict';

var MILLISECONDS_PER_SECOND = 1000;
var MILLISECONDS_PER_MINUTE = 60000; // 1000 * 60
var MILLISECONDS_PER_HOUR = 3600000; // 1000 * 60 * 60
var MILLISECONDS_PER_DAY = 86400000; // 1000 * 60 * 60 * 24

(function (DatePart) {
    DatePart[DatePart["second"] = 0] = "second";
    DatePart[DatePart["minute"] = 1] = "minute";
    DatePart[DatePart["hour"] = 2] = "hour";
    DatePart[DatePart["day"] = 3] = "day";
})(exports.DatePart || (exports.DatePart = {}));

var DateTime = /** @class */ (function () {
    function DateTime(_milliseconds) {
        this._milliseconds = _milliseconds;
        this._date = new Date(_milliseconds);
    }
    Object.defineProperty(DateTime.prototype, "seconds", {
        get: function () {
            return this._date.getUTCSeconds();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "minutes", {
        get: function () {
            return this._date.getUTCMinutes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "hours", {
        get: function () {
            return this._date.getUTCHours();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "day", {
        get: function () {
            return this._date.getUTCDate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "month", {
        get: function () {
            return this._date.getUTCMonth() + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "year", {
        get: function () {
            return this._date.getUTCFullYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "totalSeconds", {
        get: function () {
            return Math.floor(this._milliseconds / MILLISECONDS_PER_SECOND);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "totalMinutes", {
        get: function () {
            return Math.floor(this._milliseconds / MILLISECONDS_PER_MINUTE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "totalHours", {
        get: function () {
            return Math.floor(this._milliseconds / MILLISECONDS_PER_HOUR);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "totalDays", {
        get: function () {
            return Math.floor(this._milliseconds / MILLISECONDS_PER_DAY);
        },
        enumerable: true,
        configurable: true
    });
    DateTime.getTotalDays = function (milliseconds) {
        return new DateTime(milliseconds).totalDays;
    };
    DateTime.dateDiff = function (datePart, startDate, endDate) {
        var DATE_DIFF = endDate.getTime() - startDate.getTime();
        var dateDiff = 0;
        switch (datePart) {
            case exports.DatePart.second:
                dateDiff = DATE_DIFF / MILLISECONDS_PER_SECOND;
                break;
            case exports.DatePart.minute:
                dateDiff = DATE_DIFF / MILLISECONDS_PER_MINUTE;
                break;
            case exports.DatePart.hour:
                dateDiff = DATE_DIFF / MILLISECONDS_PER_HOUR;
                break;
            case exports.DatePart.day:
                dateDiff = DATE_DIFF / MILLISECONDS_PER_DAY;
                break;
        }
        return Math.floor(dateDiff);
    };
    DateTime.dateAdd = function (datePart, increment, date) {
        var millisecondsToAdd = 0;
        switch (datePart) {
            case exports.DatePart.second:
                millisecondsToAdd = increment * MILLISECONDS_PER_SECOND;
                break;
            case exports.DatePart.minute:
                millisecondsToAdd = increment * MILLISECONDS_PER_MINUTE;
                break;
            case exports.DatePart.hour:
                millisecondsToAdd = increment * MILLISECONDS_PER_HOUR;
                break;
            case exports.DatePart.day:
                millisecondsToAdd = increment * MILLISECONDS_PER_DAY;
                break;
        }
        return new Date(date.getTime() + millisecondsToAdd);
    };
    return DateTime;
}());

exports.MILLISECONDS_PER_SECOND = MILLISECONDS_PER_SECOND;
exports.MILLISECONDS_PER_MINUTE = MILLISECONDS_PER_MINUTE;
exports.MILLISECONDS_PER_HOUR = MILLISECONDS_PER_HOUR;
exports.MILLISECONDS_PER_DAY = MILLISECONDS_PER_DAY;
exports.DateTime = DateTime;

Object.defineProperty(exports, '__esModule', { value: true });

})));
