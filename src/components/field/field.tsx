import React from "react";
import appStore from "store/appstore";
import { field } from "./field.styles";
import { Plate } from "../plate/plate";

export const Field = () => {
  return (
    <div className={field}>
      {appStore.fieldStore.map((el, idx) => (
        <Plate key={el.field} el={el} idx={idx} />
      ))}
    </div>
  );
};
