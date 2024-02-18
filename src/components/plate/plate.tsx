import React, { useCallback, useMemo, useState } from "react";
import { FieldStoreItem } from "store/types";
import appStore from "store/appstore";
import {
  PLATE_SIZE,
  PlateWithCssLogic,
  PlateWithOrderWrap,
  TriangleBorder,
} from "./plate.styles";
import { PLATE_BORDER, X_FIELD_GAP, Y_FIELD_GAP } from "../field/field.styles";
import { useMousePosition } from "../../hooks/use-mouse-position";

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

  const { mousePosition } = useMousePosition();
  const { moveElement } = appStore;

  const arrowDirectionStyle = useMemo(() => {
    return `${TriangleBorder[direction]}`;
  }, [direction]);

  const [isDragging, setIsDragging] = useState(false);
  const [clickStartPoints, setClickStartPoints] = useState({ x: 0, y: 0 });
  const initialPosition = useMemo(
    () => ({
      x: mousePosition.x - clickStartPoints.x,
      y: mousePosition.y - clickStartPoints.y,
    }),
    [clickStartPoints.x, clickStartPoints.y, mousePosition.x, mousePosition.y]
  );

  const maxVariable = useMemo(() => {
    switch (direction) {
      case "right":
        return PLATE_SIZE + Y_FIELD_GAP + PLATE_BORDER * 2;
      case "left":
        return -(PLATE_SIZE + Y_FIELD_GAP) - PLATE_BORDER * 2;
      case "up":
        return PLATE_SIZE + X_FIELD_GAP + PLATE_BORDER * 2;
      case "down":
        return -(PLATE_SIZE + X_FIELD_GAP) - PLATE_BORDER * 2;
      default:
        return 0;
    }
  }, [direction]);

  const onPlateMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isMovable) {
        setClickStartPoints({
          x: e.clientX,
          y: e.clientY,
        });

        setIsDragging(true);
      }
    },
    [isMovable]
  );

  const onPlateMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isMovable && isDragging) {
        const deltaX = mousePosition.x - clickStartPoints.x;
        const deltaY = mousePosition.y - clickStartPoints.y;
        if (direction === "right" || direction === "left") {
          if (direction === "right") {
            if (deltaX < 0) {
              initialPosition.x = 0;
            }
            if (deltaX > maxVariable) {
              initialPosition.x = maxVariable;
            }
          }
          if (direction === "left") {
            if (deltaX > 0) {
              initialPosition.x = 0;
            }

            if (deltaX < maxVariable) {
              initialPosition.x = maxVariable;
            }
          }
          e.currentTarget.style.left = `${initialPosition.x}px`;
        } else {
          if (direction === "down") {
            if (deltaY < 0) initialPosition.y = 0;
            if (deltaY > Math.abs(maxVariable)) {
              initialPosition.y = Math.abs(maxVariable);
            }
          }

          if (direction === "up") {
            if (deltaY > 0) initialPosition.y = 0;
            if (Math.abs(deltaY) > maxVariable) {
              initialPosition.y = maxVariable * -1;
            }
          }
          e.currentTarget.style.top = `${initialPosition.y}px`;
        }
      }
    },
    [
      clickStartPoints.x,
      clickStartPoints.y,
      direction,
      initialPosition,
      isDragging,
      isMovable,
      maxVariable,
      mousePosition.x,
      mousePosition.y,
    ]
  );

  const onPlateMouseUp = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const deltaX = mousePosition.x - clickStartPoints.x;
      const deltaY = mousePosition.y - clickStartPoints.y;

      // TODO: FIX BUG if up on another element - bug reset all drugging
      if (
        (direction === "right" && deltaX >= maxVariable) ||
        (direction === "left" && deltaX <= maxVariable) ||
        (direction === "down" && deltaY >= Math.abs(maxVariable)) ||
        (direction === "up" && Math.abs(deltaY) >= maxVariable)
      ) {
        setIsDragging(false);
        moveElement(el);
      } else {
        e.currentTarget.style.left = "0px";
        e.currentTarget.style.top = "0px";
        setIsDragging(false);
      }
    },
    [
      clickStartPoints.x,
      clickStartPoints.y,
      direction,
      el,
      maxVariable,
      mousePosition.x,
      mousePosition.y,
      moveElement,
    ]
  );

  const onPlateMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isDragging) {
        const deltaX = mousePosition.x - clickStartPoints.x;
        const deltaY = mousePosition.y - clickStartPoints.y;

        if (direction === "right" && deltaX > 0) {
          e.currentTarget.style.left = `${maxVariable}px`;
          setIsDragging(false);
          moveElement(el);
        }

        if (direction === "left" && deltaX < 0) {
          e.currentTarget.style.left = `${maxVariable}px`;
          setIsDragging(false);
          moveElement(el);
        }

        if (direction === "down" && deltaY > 0) {
          e.currentTarget.style.top = `${Math.abs(maxVariable)}px`;
          setIsDragging(false);
          moveElement(el);
        }

        if (direction === "up" && deltaY < 0) {
          e.currentTarget.style.top = `${maxVariable * -1}px`;
          setIsDragging(false);
          moveElement(el);
        }
      }
      setIsDragging(false);
    },
    [
      clickStartPoints.x,
      clickStartPoints.y,
      direction,
      el,
      isDragging,
      maxVariable,
      mousePosition.x,
      mousePosition.y,
      moveElement,
    ]
  );

  return (
    <PlateWithOrderWrap
      isDragging={isDragging}
      className={arrowDirectionStyle}
      order={idx}
      onMouseDown={e => onPlateMouseDown(e)}
      onMouseMove={e => onPlateMouseMove(e)}
      onMouseUp={e => onPlateMouseUp(e)}
      onMouseLeave={e => onPlateMouseLeave(e)}>
      <PlateWithCssLogic hidden={isAnchor} isMovable={isMovable}>
        {src ?? field}
      </PlateWithCssLogic>
    </PlateWithOrderWrap>
  );
};
