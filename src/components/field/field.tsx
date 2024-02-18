import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import appStore from "store/appstore";
import { field } from "./field.styles";
import { Plate } from "../plate/plate";

export const Field = () => {
  const plainArray = toJS(appStore.fieldStore);
  useEffect(() => {
    appStore.writeIsMovableAndDirectionsToState();
    // console.log(toJS(appStore.fieldStore), "kekstate");
  }, []);
  // console.log(
  //   plainArray.map(el => el.params.moves),
  //   "kek"
  // );
  return (
    <div className={field}>
      {appStore.fieldStore.map((el, idx) => {
        const { x, y } = el.params.cords;
        return <Plate key={`${x}-${y}`} el={el} idx={idx} />;
      })}
    </div>
  );
};
