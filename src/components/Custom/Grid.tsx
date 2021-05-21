import styled, { css } from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 15px;
`;

export const Col = styled.div<{ size?: number; alignSelf?: string }>`
  flex: ${(props) => props.size || 1};
  ${(props) =>
    props.alignSelf &&
    css`
      align-self: ${props.alignSelf};
    `}
`;

export const Box = styled.div<{
  flex?: boolean;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  textAlign?: string;
  m?: number;
  p?: number;
  py?: number;
  px?: number;
  my?: number;
  mx?: number;
}>`
  margin: ${(props) =>
    props.mx
      ? `0px ${props.mx * 8}px`
      : props.my
      ? `${props.my * 8}px 0px `
      : props.m
      ? `${props.m * 8}px`
      : "0"};
  padding: ${(props) =>
    props.px
      ? `0px ${props.px * 8}px`
      : props.py
      ? `${props.py * 8}px 0px `
      : props.p
      ? `${props.p * 8}px`
      : "0"};
  ${(props) =>
    props.flex &&
    css`
      display: flex;
      flex-direction: ${props.flexDirection || "row"};
      justify-content: ${props.justifyContent || ""};
      align-iteps: ${props.alignItems || ""};
    `};
  ${(props) =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `};
`;
