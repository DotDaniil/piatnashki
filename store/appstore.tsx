import { observable, action, makeObservable, computed, toJS } from "mobx";
import { Direction, FieldStore, FieldStoreItem, HistoryStore } from "./types";
import { createInitialFields } from "./utils/create-initial-fields";

class AppStore {
  fieldStore: FieldStore = createInitialFields();
  historyStore: HistoryStore = [];

  constructor() {
    makeObservable(this, {
      fieldStore: observable,
      historyStore: observable,
      getAnchor: computed,
      writeIsMovableAndDirectionsToState: action,
      moveElementLogic: action,
      moveElement: action,
      monitorCoordinates: action,
    });
  }

  get getAnchor() {
    return this.fieldStore.find(el => el.field === "anchor");
  }

  writeIsMovableAndDirectionsToState = () => {
    console.log("DIRECTIONS run");
    const { x: anchorX, y: anchorY } = this.getAnchor.params.cords;

    const moves = {
      up: { dx: 0, dy: -1 },
      down: { dx: 0, dy: 1 },
      left: { dx: -1, dy: 0 },
      right: { dx: 1, dy: 0 },
    };

    this.fieldStore.forEach(el => {
      const { cords } = el.params;
      // TODO: Fix bug for old directions doesn't change moves
      Object.keys(moves).forEach((direction: Direction) => {
        const { dx, dy } = moves[direction];
        if (cords.y + dy === anchorY && cords.x + dx === anchorX) {
          el.params.moves.direction = direction;
          el.params.moves.isMovable = true;
        }
      });
    });
  };

  moveElementLogic = (field: FieldStoreItem) => {
    const anchor = this.getAnchor;

    field.params.cordsPrev = field.params.cords;
    anchor.params.cordsPrev = anchor.params.cords;
    anchor.params.cords = field.params.cords;
    field.params.cords = anchor.params.cordsPrev;

    const fieldIndex = this.fieldStore.findIndex(
      el => el.field === field.field
    );
    const anchorIndex = this.fieldStore.findIndex(
      el => el.field === anchor.field
    );
    if (fieldIndex !== -1 && anchorIndex !== -1) {
      this.fieldStore[fieldIndex] = field;
      this.fieldStore[anchorIndex] = anchor;
    }

    console.log(toJS(this.fieldStore), toJS(field), toJS(anchor), "kekfield");
  };

  monitorCoordinates = () => {
    console.log("MONITORING run");
    const sortedFieldStore = [...this.fieldStore];

    sortedFieldStore.sort((a, b) => {
      return a.params.cords.y !== b.params.cords.y
        ? a.params.cords.y - b.params.cords.y
        : a.params.cords.x - b.params.cords.x;
    });
    this.fieldStore = sortedFieldStore;
  };

  moveElement = (field: FieldStoreItem) => {
    if (field) {
      this.moveElementLogic(field);
      this.monitorCoordinates();
      this.writeIsMovableAndDirectionsToState();
    }
  };
}

const appStore = new AppStore();
// eslint-disable-next-line import/no-default-export
export default appStore;

// historyStoreStructure: [{"L":[15,12]}...]

// разрезать картинку на части c помощью canvas: "A": {..., src: "canvasPart"}
// добавить available movements в state, чтобы были направляющие линии для плашек ( в какую сторону можно их двигать )
