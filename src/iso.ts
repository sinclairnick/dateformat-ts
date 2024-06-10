import type { DefineDate, ToNumber } from "./util";

// e.g. 2024-06-10T04:39:46.229Z
export type FromIso<T extends string> =
  T extends `${infer $Year}-${infer $Month}-${infer $Day}T${infer $Hour}:${infer $Minute}:${infer $Second}.${string}Z`
    ? DefineDate<{
        dayOfWeek: -1;
        dayOfYear: -1;
        year: ToNumber<$Year>;
        monthOfYear: ToNumber<$Month>;
        dayOfMonth: ToNumber<$Day>;
        hourOfDay: ToNumber<$Hour>;
        minuteOfHour: ToNumber<$Minute>;
        secondOfMinute: ToNumber<$Second>;
      }>
    : never;
