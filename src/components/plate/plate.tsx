import React, { useMemo } from "react";
import { FieldStoreItem } from "store/types";

import { PlateWithOrder } from "./plate.styles";

export type PlateProps = {
  el: FieldStoreItem;
  idx: number;
};

export const Plate: React.FC<PlateProps> = ({ el, idx }) => {
  const isAnchor = el.field === "anchor";

  // const returnElementOrder = useMemo(() => {}, []);

  console.log({ x: el.params.cords.x, y: el.params.cords.y }, el.field);
  return (
    <PlateWithOrder order={idx} hidden={isAnchor}>
      {el.params.src ?? el.field}
    </PlateWithOrder>
  );
};

// x 3 y 2 L
// x 2 y 3 O
// x 3 y 3 anchor

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
