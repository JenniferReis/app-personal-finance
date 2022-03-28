import styled from "styled-components";
import { PaperProps } from ".";

export const CustomPaper = styled.div<PaperProps>`
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  background-color: ${({ color }) => (color ? `#${color}` : "var(--paper)")} ;
  box-shadow: ${({ color }) => (color ? `#${color}` : "0px 1px 4px rgba(0, 0, 0, 0.25)")}  ;
  border-radius: 10px;
`;
