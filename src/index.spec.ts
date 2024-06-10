import { describe, expectTypeOf, test } from "vitest";
import type { Format } from ".";
import type { DefineDate } from "./util";
import type { FromIso } from "./iso";

type TestDate = DefineDate<{
  dayOfMonth: 1;
  dayOfWeek: 2;
  dayOfYear: 24;
  hourOfDay: 13;
  monthOfYear: 5;
  minuteOfHour: 20;
  secondOfMinute: 45;
  year: 2024;
}>;

describe("Format", () => {
  test("Tests", () => {
    // Month
    expectTypeOf<Format<TestDate, "M">>().toEqualTypeOf<"5">();
    expectTypeOf<Format<TestDate, "Mo">>().toEqualTypeOf<"5th">();
    expectTypeOf<Format<TestDate, "MM">>().toEqualTypeOf<"05">();
    expectTypeOf<Format<TestDate, "MMM">>().toEqualTypeOf<"May">();
    expectTypeOf<Format<TestDate, "MMMM">>().toEqualTypeOf<"May">();
    expectTypeOf<Format<TestDate, "MMMMM">>().toEqualTypeOf<"M">();
    expectTypeOf<Format<TestDate, "L">>().toEqualTypeOf<"5">();
    expectTypeOf<Format<TestDate, "Lo">>().toEqualTypeOf<"5th">();
    expectTypeOf<Format<TestDate, "LL">>().toEqualTypeOf<"05">();
    expectTypeOf<Format<TestDate, "LLL">>().toEqualTypeOf<"May">();
    expectTypeOf<Format<TestDate, "LLLL">>().toEqualTypeOf<"May">();
    expectTypeOf<Format<TestDate, "LLLLL">>().toEqualTypeOf<"M">();

    // Day of year
    expectTypeOf<Format<TestDate, "D">>().toEqualTypeOf<"24">();
    expectTypeOf<Format<TestDate, "Do">>().toEqualTypeOf<"24th">();
    expectTypeOf<Format<TestDate, "DD">>().toEqualTypeOf<"24">();
    expectTypeOf<Format<TestDate, "DDD">>().toEqualTypeOf<"024">();
    expectTypeOf<Format<TestDate, "DDDD">>().toEqualTypeOf<"0024">();

    // Day of week
    expectTypeOf<Format<TestDate, "E">>().toEqualTypeOf<"Tue">();
    expectTypeOf<Format<TestDate, "EE">>().toEqualTypeOf<"Tue">();
    expectTypeOf<Format<TestDate, "EEE">>().toEqualTypeOf<"Tue">();
    expectTypeOf<Format<TestDate, "EEEE">>().toEqualTypeOf<"Tuesday">();
    expectTypeOf<Format<TestDate, "EEEEE">>().toEqualTypeOf<"T">();
    expectTypeOf<Format<TestDate, "EEEEEE">>().toEqualTypeOf<"Tu">();

    // Day of month
    expectTypeOf<Format<TestDate, "d">>().toEqualTypeOf<"1">();
    expectTypeOf<Format<TestDate, "do">>().toEqualTypeOf<"1st">();
    expectTypeOf<Format<TestDate, "dd">>().toEqualTypeOf<"01">();

    // Hour
    expectTypeOf<Format<TestDate, "h">>().toEqualTypeOf<"1">();
    expectTypeOf<Format<TestDate, "ho">>().toEqualTypeOf<"1st">();
    expectTypeOf<Format<TestDate, "hh">>().toEqualTypeOf<"01">();
    expectTypeOf<Format<TestDate, "H">>().toEqualTypeOf<"13">();
    expectTypeOf<Format<TestDate, "Ho">>().toEqualTypeOf<"13th">();
    expectTypeOf<Format<TestDate, "HH">>().toEqualTypeOf<"13">();

    // Minute
    expectTypeOf<Format<TestDate, "m">>().toEqualTypeOf<"20">();
    expectTypeOf<Format<TestDate, "mo">>().toEqualTypeOf<"20th">();
    expectTypeOf<Format<TestDate, "mm">>().toEqualTypeOf<"20">();

    // Second
    expectTypeOf<Format<TestDate, "s">>().toEqualTypeOf<"45">();
    expectTypeOf<Format<TestDate, "so">>().toEqualTypeOf<"45th">();
    expectTypeOf<Format<TestDate, "ss">>().toEqualTypeOf<"45">();

    // Year
    expectTypeOf<Format<TestDate, "y">>().toEqualTypeOf<"2024">();
    expectTypeOf<Format<TestDate, "yo">>().toEqualTypeOf<"24th">();
    expectTypeOf<Format<TestDate, "yy">>().toEqualTypeOf<"24">();
    expectTypeOf<Format<TestDate, "yyy">>().toEqualTypeOf<"024">();
    expectTypeOf<Format<TestDate, "yyyy">>().toEqualTypeOf<"2024">();

    // Composite
    expectTypeOf<
      Format<TestDate, "EEEE, dd-Mo">
    >().toEqualTypeOf<"Tuesday, 01-5th">();

    type DateFromIso = FromIso<"2024-16-10T04:39:46.229Z">;
    type Result = Format<DateFromIso, "dd-MM-yy HH:mm:ss aa">;
    expectTypeOf<Result>().toEqualTypeOf<"10-16-24 04:39:46 AM">();
  });
});
