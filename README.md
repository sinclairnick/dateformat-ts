# DateFormat TS

**Format date information at the type-level, according to the [Unicode #35 standard](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)**

---

```ts
// Init date
type Date = FromIso<"2024-06-10T04:39:46.229Z">;

// Format date
type Formatted = Format<Date, "dd-MM-yy H:mm:ss aa">;
//   ^? 10-06-24 4:39:46 AM
```

> This is just a toy project, it's probably not super useful in production

## Usage

Given a `DateObject`

```ts
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
```

We can format the date information given a format string.

```ts
type FormattedDate = Format<SomeDateObject, "some-format-string">;
```

## Limitations

-   Not all format parts implemented, like ISO and locale-stuff
-   No input validation is done
-   Escaping syntax is not respected (not implemented yet)
