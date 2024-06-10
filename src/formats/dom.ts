import type { Nth, Pad } from "../util";

export type DayOfMonthFormat = "d" | "do" | "dd";

export type DayOfMonth<
  T extends number,
  TFormat extends DayOfMonthFormat
> = TFormat extends "do" ? Nth<T> : TFormat extends "dd" ? Pad<T, 2> : `${T}`;
