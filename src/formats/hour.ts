import type { Hour12, Nth, Pad } from "../util";

export type Hour12Format = "h" | "ho" | "hh";
export type Hour24Format = "H" | "Ho" | "HH";

export type HourFormat = Hour12Format | Hour24Format;

export type Hour<T extends number, TFormat extends HourFormat> =
  // 24 hour formats
  TFormat extends "Ho"
    ? Nth<T>
    : TFormat extends "HH"
    ? Pad<T, 2>
    : // 12 hour formats
    TFormat extends "h"
    ? `${Hour12<T>}`
    : TFormat extends "ho"
    ? `${Nth<Hour12<T>>}`
    : TFormat extends "hh"
    ? Pad<Hour12<T>, 2>
    : `${T}`;
