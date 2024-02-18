import { FieldStore } from "../types";

export const createInitialFields = () => {
  const englishLetters = Array.from({ length: 15 }, (_, index) =>
    String.fromCharCode("A".charCodeAt(0) + index)
  );
  let initialFields = [] as FieldStore;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const element = {
        field: "",
        params: {
          src: null,
          cords: { x: j, y: i },
          moves: { isMovable: false, direction: null },
          cordsPrev: null,
        },
      };

      initialFields.push(element);
    }
  }

  initialFields.forEach((el, idx) => {
    if (idx + 1 !== initialFields.length) {
      el.field = englishLetters[idx];
    } else {
      el.field = "anchor";
    }
  });

  return initialFields;
};
