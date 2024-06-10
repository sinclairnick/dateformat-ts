import type { Nth, Pad } from "../util";

export type SecondFormat = "s" | "so" | "ss";

export type Second<
  T extends number,
  TFormat extends string
> = TFormat extends "so" ? Nth<T> : TFormat extends "ss" ? Pad<T, 2> : `${T}`;
