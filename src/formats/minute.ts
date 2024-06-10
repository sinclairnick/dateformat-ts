import type { Nth, Pad } from "../util";

export type MinuteFormat = "m" | "mo" | "mm";

export type Minute<
  T extends number,
  TFormat extends string
> = TFormat extends "mm" ? Pad<T, 2> : TFormat extends "mo" ? Nth<T> : `${T}`;
