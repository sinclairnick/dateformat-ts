export type DayOfWeekFormat = "E" | "EE" | "EEE" | "EEEE" | "EEEEE" | "EEEEEE";

type DaysShort = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
type DaysLong = [
  "",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
type DaysLetter = ["", "M", "T", "W", "T", "F", "S", "S"];
type DaysTwo = ["", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export type DayOfWeek<
  T extends number,
  TFormat extends DayOfWeekFormat
> = TFormat extends "EEEE"
  ? DaysLong[T]
  : TFormat extends "EEEEE"
  ? DaysLetter[T]
  : TFormat extends "EEEEEE"
  ? DaysTwo[T]
  : DaysShort[T];
