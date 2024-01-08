export type FieldStoreItem = {
  field: string;
  params: { src: null | string; occupy: null | number; occupyPrev: null };
};

export type FieldStore = FieldStoreItem[];

export type HistoryStoreItem = Record<string, [number, number]>;

export type HistoryStore = HistoryStoreItem[];
