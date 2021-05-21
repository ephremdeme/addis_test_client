import styled, { css } from "styled-components";

export const Button = styled.button<{ disabled?: boolean; color?: string }>`
  ${(props) =>
    props.disabled
      ? css`
          color: rgba(0, 0, 0, 0.26);
          box-shadow: none;
          background-color: rgba(0, 0, 0, 0.12);
        `
      : css`
          background: transparent;
          &:hover {
            background-color: ${props.color || "black"};
            color: white;
          }
        `}
  color: ${(props) => (props.disabled ? `rgba(0, 0, 0, 0.26);` : props.color)};
  border-radius: 3px;
  border: 2px solid
    ${(props) => (props.disabled ? `rgba(0, 0, 0, 0.26);` : props.color)};
  margin: 5px;
  padding: 0.5em 1em;
  height: 2.5rem;
`;

export default Button;
