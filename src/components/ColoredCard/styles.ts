import styled from "styled-components";
import { ColoredCardProps } from ".";
import { CSSColor } from "../../theme/types";

export const Card = styled.div<ColoredCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  padding: 30px;
  background: transparent;
  border: 2px solid ${({ borderColor }) => borderColor};
  border-radius: 10px;
  margin: ${({ margin }) => margin};
  transtion: all 0.3s ease;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "unset")};
  opacity: ${({ selected }) => (selected ? "0.7" : "1")};
  box-shadow: ${({ selected }) =>
    selected ? "0px 0px 20px rgba(0, 0, 0, 0.3)" : "unset"};

  &:hover {
    opacity: ${({ clickable }) => (clickable ? "0.7" : "1")};
    box-shadow: ${({ clickable }) =>
      clickable ? "0px 0px 20px rgba(0, 0, 0, 0.3)" : "unset"};
  }

  p.money-icon {
    font-weight: bold;
    font-size: 70px;
    line-height: 95px;
    
  }
  p.icon {
    color: #212121;
  }
  p.primary {
    color: ${CSSColor.Primary};
  }
  p.success {
    color: ${CSSColor.Success};
  }
  p.error {
    color: ${CSSColor.Error};
  }
  p.card-title {
    font-weight: bold;
    font-size: 20px;

    @media screen and (max-width: 512px) {
      font-size: 18px;
    }
  }
  p.card-value {
    font-size: 18px;
    margin-left:10px;
    margin-top:3px;
    @media screen and (max-width: 512px) {
      font-size: 16px;
    }
  }
  
  .status-title {
    padding-bottom: 20px;
    text-align: center;
    font-weight: bold;
    font-size: 24px;

    @media screen and (max-width: 512px) {
      font-size: 20px;
    }
  }

  .card {
    margin: 10px auto;
    border-top: solid 1px #212121;
    padding-top: 20px;
  }
`;
