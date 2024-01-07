import { observable, action, makeObservable } from 'mobx';


class AppStore {
    state = {changed: false};

    constructor() {

        makeObservable(this, {
            state: observable,
            changeState: action,
        });
    }

    changeState = () => {
        this.state = {...this.state, changed: true}
    }
}

const appStore = new AppStore();
export default appStore;

// fieldStoreStructure:
// { "L": { src: null / "link" / number, occupy: 15, occupyPrev: 12 },
//   ...,
//   "O": { src: 12 / "canvasimg", occupy: 14, occupyPrev: null },
//   "empty": { src: null, occupy 12, occupyPrev: 15 }  // PROBABLY DO NOT NEED;
// };

// historyStoreStructure: [{"L":[15,12]}...]

// разрезать картинку на части c помощью canvas: "A": {..., src: "canvasPart"}

