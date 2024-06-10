import type { IsMorning } from "../util";

export type AmPmFormat = "a" | "aa" | "aaa" | "aaaa" | "aaaaa";

export type AmPm<
  THour extends number,
  TFormat extends string
> = TFormat extends "aaa"
  ? IsMorning<THour> extends true
    ? "am"
    : "pm"
  : TFormat extends "aaaa"
  ? IsMorning<THour> extends true
    ? "a.m."
    : "p.m."
  : TFormat extends "aaaaa"
  ? IsMorning<THour> extends true
    ? "a"
    : "p"
  : IsMorning<THour> extends true
  ? "AM"
  : "PM";
