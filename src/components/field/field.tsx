import React from "react";
import { field } from "./field.styles";
import appStore from "../../../store/appstore";
import { Plate } from "../plate/plate";

export const Field = () => {
  return (
    <div className={field}>
      {appStore.fieldStore.map(el => (
        <Plate key={el.field} field={el.field} />
      ))}
    </div>
  );
};
