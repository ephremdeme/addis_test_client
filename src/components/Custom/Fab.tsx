import React from "react";
import styled from "styled-components";

const FabButton = styled.button`
  right: 40px;
  bottom: 72px;
  z-index: 1100;
  position: fixed;
  color: #fff;
  background-color: #3f51b5;
  border-color: #3f51b5;
  border-style: none;
  width: 56px;
  height: 56px;
  padding: 0;
  font-size: 0.875rem;
  min-width: 0;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  box-sizing: border-box;
  min-height: 36px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 50%;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  &:hover {
    background-color: #303f9f;
  }
`;

const FabSpan = styled.span`
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
`;
const FabSvgRipple = styled.span`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
`;
const FabSvg = styled.svg`
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
`;

export const Fab: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <>
      <FabButton onClick={onClick} tabIndex={0}>
        <FabSpan>
          <FabSvg
            className="MuiFabSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
          </FabSvg>
        </FabSpan>
        <FabSvgRipple className="MuiTouchRipple-root"></FabSvgRipple>
      </FabButton>
    </>
  );
};

export default Fab;
