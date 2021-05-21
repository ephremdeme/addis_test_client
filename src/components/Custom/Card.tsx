import styled, { css } from "styled-components";

export const Card = styled.div`
  overflow: hidden;
  padding: 16px 10px;
  margin: 10px auto;
  min-width: 280px;
  width: fit-content;
  background: white;
  height: auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), 0 0px 40px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const CardHeader = styled.h1`
  margin: 5px auto 0;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const CardContent = styled.div`
  padding: 5px 5px;
`;
export const CardFooter = styled.div<{ justify?: string }>`
  display: flex;
  padding: 5px 8px;
  align-items: center;
  ${(props) =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}
`;
