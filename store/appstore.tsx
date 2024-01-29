import { observable, action, makeObservable, computed } from "mobx";
import { Direction, FieldStore, HistoryStore } from "./types";
import { createInitialFields } from "./utils/create-initial-fields";

class AppStore {
  fieldStore: FieldStore = createInitialFields();
  historyStore: HistoryStore = [];

  constructor() {
    makeObservable(this, {
      fieldStore: observable,
      historyStore: observable,
      getAnchor: computed,
      writeIsMovableToState: action,
    });
  }

  get getAnchor() {
    return this.fieldStore.find(el => el.field === "anchor");
  }

  writeIsMovableToState() {
    const { x: anchorX, y: anchorY } = this.getAnchor.params.cords;

    const moves = {
      up: { dx: 0, dy: -1 },
      down: { dx: 0, dy: 1 },
      left: { dx: -1, dy: 0 },
      right: { dx: 1, dy: 0 },
    };

    this.fieldStore.forEach(el => {
      const { cords } = el.params;

      Object.keys(moves).forEach((direction: Direction) => {
        const { dx, dy } = moves[direction];
        if (cords.y + dy === anchorY && cords.x + dx === anchorX) {
          el.params.moves.direction = direction;
          el.params.moves.isMovable = true;
        }
      });
    });
  }
}

const appStore = new AppStore();
// eslint-disable-next-line import/no-default-export
export default appStore;

// historyStoreStructure: [{"L":[15,12]}...]

// разрезать картинку на части c помощью canvas: "A": {..., src: "canvasPart"}
// добавить available movements в state, чтобы были направляющие линии для плашек ( в какую сторону можно их двигать )

// ОПРЕДЕЛЯЕМ ПЕРЕДВИГАЕМЫЙ ЛИ ОБЪЕКТ

// ищем соприкосновения по x - отнимаем от x anchor 1
// ищем соприкосновения по y - отнимаем от y anchor 1
// ищем максимальное значение по x и y - если anchor максимальное,
// не делаем проверку на те, что идут после, иначе - делаем проверку
// если элемент прошел проверку - выставляем ему флаг movable true

// ДВИЖЕНИЕ ЭЛЕМЕНТА, КУДА ДВИГАТЬСЯ
// ПОВЕДЕНИЕ СТРЕЛКИ или как понять, куда указывать:
// ищем координаты anchor, сравниваем x - если одинаковый, то не показываем по x, если разный, то в зависимости
// если x значение anсhor больше - стрелка у элемента справа, если меньше - стрелка слева
// аналогично для y
