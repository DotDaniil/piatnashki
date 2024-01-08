import { observable, action, makeObservable } from "mobx";
import { FieldStore, FieldStoreItem, HistoryStore } from "./types";

const englishLetters = Array.from({ length: 15 }, (_, index) =>
  String.fromCharCode("A".charCodeAt(0) + index)
);

class AppStore {
  fieldStore: FieldStore = [
    ...englishLetters.map(el => ({
      field: el,
      params: { src: null, occupy: null, occupyPrev: null },
    })),
    {
      field: "anchor",
      params: { src: null, occupy: 16, occupyPrev: null },
    },
  ];

  historyStore: HistoryStore = [];

  constructor() {
    makeObservable(this, {
      fieldStore: observable,
      historyStore: observable,
      moveFieldItem: action,
    });
  }

  moveFieldItem = (item: FieldStoreItem) => {
    const index = this.fieldStore.findIndex(
      fieldItem => fieldItem.field === item.field
    );

    if (index !== -1) {
      this.fieldStore[index] = {
        field: item.field,
        params: {
          src: item.params.src,
          occupy: item.params.occupy,
          occupyPrev: item.params.occupyPrev,
        },
      };

      this.fieldStore = [...this.fieldStore];
    }
  };
}

const appStore = new AppStore();
// eslint-disable-next-line import/no-default-export
export default appStore;

// fieldStoreStructure:
// { "L": { src: null / "link" / number, occupy: 15, occupyPrev: 12 },
//   ...,
//   "O": { src: 12 / "canvasimg", occupy: 14, occupyPrev: null },
//   "empty": { src: null, occupy 12, occupyPrev: 15 }  // PROBABLY DO NOT NEED;
// };

// historyStoreStructure: [{"L":[15,12]}...]

// разрезать картинку на части c помощью canvas: "A": {..., src: "canvasPart"}
// добавить available movements в state, чтобы были направляющие линии для плашек ( в какую сторону можно их двигать )
