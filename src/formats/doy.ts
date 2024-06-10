import type { Nth, Pad } from "../util";

export type DayOfYearFormat = "D" | "Do" | "DD" | "DDD" | "DDDD";

export type DayOfYear<
  T extends number,
  TFormat extends DayOfYearFormat
> = TFormat extends "Do"
  ? Nth<T>
  : TFormat extends "DD"
  ? Pad<T, 2>
  : TFormat extends "DDD"
  ? Pad<T, 3>
  : TFormat extends "DDDD"
  ? Pad<T, 4>
  : `${T}`;
