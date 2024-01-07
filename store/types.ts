export type FieldStoreItem = {
  field: string;
  params: { src: null; occupy: null; occupyPrev: null };
};

export type FieldStore = FieldStoreItem[];

export type HistoryStoreItem = Record<string, [number, number]>;

export type HistoryStore = HistoryStoreItem[];
