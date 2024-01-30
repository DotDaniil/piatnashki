import { styled } from "@linaria/react";
import { css } from "@linaria/core";

export const TriangleBorder = {
  borderColor: "#bdffc4",
  up: css`
    & > div {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        border-style: solid;
        border-width: 0 40px 0 40px;
        border-color: transparent transparent #bdffc4 transparent;
        transition: 0.3s ease;
      }
      &:hover {
        &::before {
          border-width: 0 40px 10px 40px;
          top: -10px;
        }
      }
    }
  `,
  down: css`
    & > div {
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        border-style: solid;
        border-width: 0 40px 0 40px;
        border-color: #bdffc4 transparent transparent transparent;
        transition: 0.3s ease;
      }
      &:hover {
        &::before {
          border-width: 10px 40px 0 40px;
          bottom: -10px;
        }
      }
    }
  `,
  left: css`
    & > div {
      &::before {
        content: "";
        position: absolute;
        bottom: 70px;
        left: -26%;
        transform: rotate(90deg);
        border-style: solid;
        border-width: 0 40px 0 40px;
        border-color: #bdffc4 transparent transparent transparent;
        transition: 0.3s ease;
      }
      &:hover {
        &::before {
          left: -31%;
          border-width: 10px 40px 0 40px;
        }
      }
    }
  `,
  right: css`
    & > div {
      &::before {
        content: "";
        position: absolute;
        bottom: 70px;
        left: 70%;
        transform: rotate(270deg);
        border-style: solid;
        border-width: 0 40px 0 40px;
        border-color: #bdffc4 transparent transparent transparent;
        transition: 0.3s ease;
      }
      &:hover {
        &::before {
          left: 75%;
          border-width: 10px 40px 0 40px;
        }
      }
    }
  `,
};

export const PlateWithOrderWrap = styled.div<{
  order: number;
}>`
  order: ${props => props.order};
`;

export const PlateWithCssLogic = styled.div<{
  hidden: boolean;
  isMovable: boolean;
}>`
  display: flex;
  cursor: ${props => (props.isMovable ? "pointer" : "inherit")};
  position: relative;
  width: 144px;
  height: 144px;
  margin: auto;
  border-radius: 10px;
  border: 3px solid #cecef1;
  background: #fff;
  box-shadow: ${props =>
    props.isMovable
      ? "0 0 8px 3px rgba(206, 206, 241, 0.8)"
      : "0 0 8px 3px rgba(206, 206, 241, 0.8)"};
  color: #000;
  font-size: 100px;
  font-style: normal;
  font-weight: 400;
  font-family: "Island Moments", cursive;
  line-height: normal;
  align-items: center;
  justify-content: center;
  visibility: ${props => (props.hidden ? "hidden" : "visible")};
`;
