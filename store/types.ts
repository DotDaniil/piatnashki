export type Direction = "up" | "down" | "left" | "right";

export type FieldStoreItem = {
  field: string;
  params: {
    src: null | string;
    cords: { x: number; y: number };
    moves: { isMovable: boolean; direction: null | Direction };
    cordsPrev: { x: number; y: number } | null;
  };
};

export type FieldStore = FieldStoreItem[];

export type HistoryStoreItem = Record<string, [number, number]>;

export type HistoryStore = HistoryStoreItem[];
