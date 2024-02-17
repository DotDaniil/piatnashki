import { css } from "@linaria/core";

export const X_FIELD_GAP = 12;
export const Y_FIELD_GAP = 11;
export const PLATE_BORDER = 3;

export const field = css`
  display: grid;
  position: relative;
  grid-template-columns: repeat(4, 150px);
  grid-template-rows: repeat(4, 150px);
  grid-column-gap: ${Y_FIELD_GAP}px;
  grid-row-gap: ${X_FIELD_GAP}px;
  padding: 25px;
  margin: auto;
  width: 686px;
  height: 686px;
  flex-shrink: 0;
  box-sizing: border-box;
  border-radius: 10px;
  border: ${PLATE_BORDER}px solid #cecef1;
  background: #fff;
  box-shadow: 0 0 20px 12px rgba(206, 206, 241, 0.8);
`;
