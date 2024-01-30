import React, { useMemo } from "react";
import { FieldStoreItem } from "store/types";

import {
  PlateWithCssLogic,
  PlateWithOrderWrap,
  TriangleBorder,
} from "./plate.styles";

export type PlateProps = {
  el: FieldStoreItem;
  idx: number;
};

export const Plate: React.FC<PlateProps> = ({ el, idx }) => {
  const {
    field,
    params: {
      src,
      moves: { isMovable, direction },
    },
  } = el;
  const isAnchor = field === "anchor";

  const arrowDirectionStyle = useMemo(() => {
    return `${TriangleBorder[direction]}`;
  }, [direction]);

  // const returnElementOrder = useMemo(() => {}, []);
  return (
    <PlateWithOrderWrap className={arrowDirectionStyle} order={idx}>
      <PlateWithCssLogic hidden={isAnchor} isMovable={isMovable}>
        {src ?? field}
      </PlateWithCssLogic>
    </PlateWithOrderWrap>
  );
};
