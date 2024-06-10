export type Nth<T extends number | string> =
  `${T}` extends `${infer $A}${infer $B extends string}`
    ? $B extends ""
      ? T extends 1
        ? `1st`
        : T extends 2
        ? `2nd`
        : T extends 3
        ? `3rd`
        : `${T}th`
      : `${$A}${$B extends "" ? "" : $B extends "1" ? Nth<$B> : `${$B}th`}`
    : never;

type SplitStr<T extends string, TAcc extends any[] = []> = T extends ""
  ? TAcc
  : T extends `${infer $Head}${infer $Tail}`
  ? SplitStr<$Tail, [...TAcc, $Head]>
  : never;

export type ToNumber<T extends string> = T extends `0${infer $Tail}`
  ? ToNumber<$Tail>
  : T extends `${infer X extends number}`
  ? X
  : never;

export type StripLeading<
  T extends string,
  TCount extends number,
  TAcc extends any[] = []
> = TAcc["length"] extends TCount
  ? T
  : T extends `${string}${infer $Tail}`
  ? StripLeading<$Tail, TCount, [...TAcc, 0]>
  : never;

export type Pad<
  T extends string | number,
  TLen extends number,
  TAcc extends any[] = SplitStr<`${T}`>
> = TAcc["length"] extends TLen ? `${T}` : Pad<`0${T}`, TLen, [...TAcc, 0]>;

export type DefineDate<T extends DateObject> = T;

/**
 * Everything should be one-indexed, not zero-indexed
 */
export type DateObject = {
  dayOfMonth: number;
  dayOfYear: number;
  dayOfWeek: number;
  monthOfYear: number;
  hourOfDay: number;
  minuteOfHour: number;
  secondOfMinute: number;
  year: number;
};

export type MorningHour = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
type Hour24To12 = {
  [12]: 0;
  [13]: 1;
  [14]: 2;
  [15]: 3;
  [16]: 4;
  [17]: 5;
  [18]: 6;
  [19]: 7;
  [20]: 8;
  [21]: 9;
  [22]: 10;
  [23]: 11;
  [key: number]: number;
};

export type IsMorning<T extends number> = T extends MorningHour ? true : false;

export type Hour12<T extends number> = IsMorning<T> extends true
  ? T
  : Hour24To12[T];
