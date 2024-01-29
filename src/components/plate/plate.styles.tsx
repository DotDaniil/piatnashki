import { styled } from "@linaria/react";

export const PlateWithOrder = styled.div<{ order?: number; hidden?: boolean }>`
  display: flex;
  position: relative;
  width: 144px;
  height: 144px;
  margin: auto;
  border-radius: 10px;
  border: 3px solid #cecef1;
  background: #fff;
  box-shadow: 0 0 8px 3px rgba(206, 206, 241, 0.8);
  color: #000;
  font-size: 100px;
  font-style: normal;
  font-weight: 400;
  font-family: "Island Moments", cursive;
  line-height: normal;
  align-items: center;
  justify-content: center;
  order: ${props => props.order};
  visibility: ${props => (props.hidden ? "hidden" : "visible")};
`;
