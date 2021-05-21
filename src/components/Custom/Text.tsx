import styled, { css } from "styled-components";

export const Typography = styled.p<{
  fontSize?: number;
  fontWeight?: number;
  textAlign?: string;
}>`
  font-size: ${(props) => props.fontSize || 14}px;
  line-height: 1.5;
  margin: 5px;
  text-align: ${(props) => props.textAlign || "left"};
  ${(props) =>
    props.fontWeight &&
    css`
      font-weight: ${props.fontWeight};
    `}
`;

export const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
`;

export const ErrorHelperText = styled.p`
  color: red;
  margin: 0px 15px;
  font-size: 0.75rem;
  margin-top: 3px;
  text-align: left;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.66;
  letter-spacing: 0.03333em;
`;
