import styled from "styled-components";

export const Input = styled.input<{ error?: boolean }>`
  height: 2em;
  border-color: black;
  border-radius: 8px;
  border-color: ${(props) => (props.error ? "red" : "black")};
`;

export const Select = styled.select<{ inputColor?: string }>`
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 3px;
  color: ${(props) => props.inputColor || "black"};
`;

export const SelectOption = styled.option`
  padding: 5px 10px;
`;
