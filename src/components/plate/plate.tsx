import React from "react";
import { FieldStoreItem } from "store/types";
import { anchor, plate } from "./plate.styles";

export type PlateProps = {
  el: FieldStoreItem;
  idx: number;
};

export const Plate: React.FC<PlateProps> = ({ el, idx }) => {
  const isAnchor = el.field === "anchor";
  return (
    <div className={isAnchor ? anchor : plate}>{el.params.src ?? el.field}</div>
  );
};
