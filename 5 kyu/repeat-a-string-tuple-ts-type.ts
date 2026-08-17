type RepeatString<
  T extends string,
  R extends number,
  Count extends unknown[] = [],
  Result extends string = "",
> = Count["length"] extends R
  ? Result
  : RepeatString<T, R, [...Count, unknown], `${Result}${T}`>;

type RepeatTuple<
  T extends unknown[],
  R extends number,
  Count extends unknown[] = [],
  Result extends unknown[] = [],
> = Count["length"] extends R
  ? Result
  : RepeatTuple<T, R, [...Count, unknown], [...Result, ...T]>;

export type Repeat<T, R extends number> = T extends string
  ? RepeatString<T, R>
  : T extends unknown[]
    ? RepeatTuple<T, R>
    : never;
