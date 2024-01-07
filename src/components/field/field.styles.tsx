import { css } from "@linaria/core";

export const field = css`
  display: grid;
  position: relative;
  grid-template-columns: repeat(4, 150px);
  grid-template-rows: repeat(4, 150px);
  grid-column-gap: 11px;
  grid-row-gap: 12px;
  padding: 25px;
  margin: auto;
  width: 686px;
  height: 686px;
  flex-shrink: 0;
  box-sizing: border-box;
  border-radius: 10px;
  border: 3px solid #cecef1;
  background: #fff;
  box-shadow: 0 0 20px 12px rgba(206, 206, 241, 0.8);
`;
