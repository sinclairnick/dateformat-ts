import type { Nth, Pad } from "../util";

export type MonthFormatM = "M" | "Mo" | "MM" | "MMM" | "MMMM" | "MMMMM";
export type MonthFormatL = "L" | "Lo" | "LL" | "LLL" | "LLLL" | "LLLLL";
export type MonthFormat = MonthFormatM | MonthFormatL;

type MonthsLong = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
type MonthsShort = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
type MonthsLetter = [
  "",
  "J",
  "F",
  "M",
  "A",
  "M",
  "J",
  "J",
  "A",
  "S",
  "O",
  "N",
  "D"
];

export type Month<
  T extends number,
  TFormat extends MonthFormat
> = TFormat extends "Mo" | "Lo"
  ? Nth<T>
  : TFormat extends "MM" | "LL"
  ? Pad<T, 2>
  : TFormat extends "MMM" | "LLL"
  ? MonthsShort[T]
  : TFormat extends "MMMM" | "LLLL"
  ? MonthsLong[T]
  : TFormat extends "MMMMM" | "LLLLL"
  ? MonthsLetter[T]
  : `${T}`;
