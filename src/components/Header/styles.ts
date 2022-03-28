import styled from "styled-components";

export const CustomHeader = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width:575px){
    justify-content: start;
  }

  .box {
    display: flex;
    margin-bottom: 50px;
    justify-content: center;
    align-items: center;
    img {
      margin-top: 2rem;
    }
    .logo {
      font-weight: 600;
      font-size: 28px;
      color: #101010
      
    }
  }

  @media screen and (max-width:575px){
    .box {
      display: none;      
    }

  }

`;
