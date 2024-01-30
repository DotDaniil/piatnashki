import React, { useEffect } from "react";
import { toJS } from "mobx";
import appStore from "store/appstore";
import { field } from "./field.styles";
import { Plate } from "../plate/plate";

export const Field = () => {
  const plainArray = toJS(appStore.fieldStore);
  useEffect(() => {
    appStore.writeIsMovableAndDirectionsToState();
  }, []);
  console.log(
    plainArray.map(el => el.params.moves),
    "kek"
  );
  return (
    <div className={field}>
      {appStore.fieldStore.map((el, idx) => (
        <Plate key={el.field} el={el} idx={idx} />
      ))}
    </div>
  );
};
