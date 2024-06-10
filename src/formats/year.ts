import type { Nth, Pad, StripLeading } from "../util";

export type CalendarYearFormat = "y" | "yo" | "yy" | "yyy" | "yyyy" | "yyyyy";

export type CalendarYear<
  T extends number,
  TFormat extends CalendarYearFormat
> = TFormat extends "yo"
  ? StripLeading<Pad<Nth<T>, 10>, 6>
  : TFormat extends "yy"
  ? StripLeading<Pad<T, 6>, 4>
  : TFormat extends "yyy"
  ? StripLeading<Pad<T, 7>, 4>
  : TFormat extends "yyyy"
  ? StripLeading<Pad<T, 8>, 4>
  : TFormat extends "yyyyy"
  ? Pad<T, 5>
  : `${T}`;
