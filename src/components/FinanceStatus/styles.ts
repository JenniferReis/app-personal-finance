import styled from "styled-components";
import { CSSColor } from "../../theme/types";

export const CustomBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 277px;
  padding: 30px;
  background: ${CSSColor.Background};
  border-radius: 10px;
  margin: 0px;
  transtion: all 0.3s ease;
  cursor: pointer};
  opacity: 1;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
  font-family: Ubuntu, sans serif;
  text-align: center;

    @media screen and (max-width:575px){
       width: 100%;
       margin-top: -12rem;
    }

  &:hover {
    opacity: 0.7;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }

  
  p.title,  p.primary {
      color: ${CSSColor.TextLight};
      
  }
  
  
  p.success {
    color: ${CSSColor.Success};
  }
  p.error {
    color: ${CSSColor.Error};
  }
  p.card-title {
    font-size: 18px;

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
    font-size: 24px;

    @media screen and (max-width: 512px) {
      font-size: 20px;
    }
  }

  .card {
    margin: 10px auto;
    border-top: solid 1px #212121;
    border-radius: 10px;
    padding: 20px 22px;
    background:  ${CSSColor.Paper}; 
    text-align: center;
  }


`;
