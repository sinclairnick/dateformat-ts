import type {
  DayOfMonthFormat,
  DayOfYearFormat,
  MonthFormat,
  DayOfYear,
  DayOfMonth,
  Month,
  DayOfWeekFormat,
  DayOfWeek,
  AmPmFormat,
  AmPm,
  HourFormat,
  Hour,
} from "./formats";
import type { Minute, MinuteFormat } from "./formats/minute";
import type { Second, SecondFormat } from "./formats/second";
import type { CalendarYear, CalendarYearFormat } from "./formats/year";
import type { DateObject } from "./util";

export type DateFormat =
  | DayOfMonthFormat
  | DayOfYearFormat
  | MonthFormat
  | DayOfWeekFormat
  | AmPmFormat
  | HourFormat
  | MinuteFormat
  | SecondFormat
  | CalendarYearFormat;

type FormatSingle<
  T extends DateObject,
  TFormat extends string
> = TFormat extends DayOfYearFormat
  ? DayOfYear<T["dayOfYear"], TFormat>
  : TFormat extends DayOfMonthFormat
  ? DayOfMonth<T["dayOfMonth"], TFormat>
  : TFormat extends MonthFormat
  ? Month<T["monthOfYear"], TFormat>
  : TFormat extends DayOfWeekFormat
  ? DayOfWeek<T["dayOfWeek"], TFormat>
  : TFormat extends AmPmFormat
  ? AmPm<T["hourOfDay"], TFormat>
  : TFormat extends HourFormat
  ? Hour<T["hourOfDay"], TFormat>
  : TFormat extends MinuteFormat
  ? Minute<T["minuteOfHour"], TFormat>
  : TFormat extends SecondFormat
  ? Second<T["secondOfMinute"], TFormat>
  : TFormat extends CalendarYearFormat
  ? CalendarYear<T["year"], TFormat>
  : TFormat;

export type PickUnit<
  T extends DateObject,
  TFormat extends string
> = TFormat extends DayOfMonthFormat
  ? T["dayOfMonth"]
  : TFormat extends DayOfYearFormat
  ? T["dayOfYear"]
  : never;

/**
 * Iterates over a `${Head}${...Tail}` and formats values.
 *
 * Accumulates the `Head`s until an invalid format is found.
 * The valid format is the formatted, and iteration continues.
 */
type FormatInner<
  T extends DateObject,
  THead extends string,
  TTail extends string
> = TTail extends ""
  ? `${THead}${TTail}` extends DateFormat
    ? FormatSingle<T, `${THead}${TTail}`>
    : `${FormatSingle<T, THead>}${FormatSingle<T, TTail>}`
  : TTail extends `${infer $Head}${infer $Tail}`
  ? `${THead}${$Head}` extends DateFormat
    ? FormatInner<T, `${THead}${$Head}`, $Tail> // Keep iterating
    : `${FormatSingle<T, THead>}${FormatInner<T, $Head, $Tail>}`
  : -1;

export type Format<
  T extends DateObject,
  TFormat extends string
> = TFormat extends `${infer $Head}${infer $Tail}`
  ? FormatInner<T, $Head, $Tail>
  : FormatSingle<T, TFormat>;

export type { FromIso } from "./iso";
export type { DateObject } from "./util";
