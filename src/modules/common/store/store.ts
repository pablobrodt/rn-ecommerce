type StoreProperties<TData> = {
  [Key in keyof TData]: TData[Key];
};

export type Store<TData, TSetters> = StoreProperties<TData> & TSetters;

export type StoreHook<TData, TSetters> = (
  initialValue?: TData,
) => Store<TData, TSetters>;
