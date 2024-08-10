export type StoreProperties<TData> = {
  [Key in keyof TData]: TData[Key];
};

export type StoreService<TData, TSetters> = (
  initialValue?: TData,
) => StoreProperties<TData> & TSetters;
