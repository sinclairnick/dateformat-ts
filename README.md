<center>

<h1>DateFormat TS</h1>

<b>Format date information at the type-level, according to the [Unicode #35 standard](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)</b>

---

</center>

```ts
type Formatted = Format<MyDate, "EEEE, dd-MM-yy HH:mm:ss aa">;
//   ^? Monday, 10-16-24 04:39:46 AM
```

> This is just a toy project, it's probably not super useful in production

## Usage

Given an `DateObject`

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