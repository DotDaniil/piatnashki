import React from "react";
import { plate } from "./plate.styles";

export type PlateProps = {
  field: string;
};

export const Plate: React.FC<PlateProps> = ({ field }) => {
  return <div className={plate}>{field}</div>;
};
