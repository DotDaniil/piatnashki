import { observable, action, makeObservable } from "mobx";

class AppStore {
  state = { changed: false };
  fieldStore = {
    A: { src: null, occupy: null, occupyPrev: null },
    B: { src: null, occupy: null, occupyPrev: null },
    C: { src: null, occupy: null, occupyPrev: null },
    D: { src: null, occupy: null, occupyPrev: null },
    E: { src: null, occupy: null, occupyPrev: null },
  };

  constructor() {
    makeObservable(this, {
      state: observable,
      changeState: action,
    });
  }

  changeState = () => {
    this.state = { ...this.state, changed: true };
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
