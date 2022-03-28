import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { CSSColor } from "../../theme/types";

export const dashboardStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  marginBlock: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  largeIcon: {
    width: 70,
  },
}));

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color:#272638;
  border-top-left-radius: 50px 50px;
  border-top-right-radius: 50px 50px;
  margin-top:-50px;
  z-index:99;

    @media (max-width:575px){
      border-top-left-radius: 30px 30px;
      border-top-right-radius: 30px 30px;
    }

  p.h3 {
    font-size: 32px;
    font-family:'Ubuntu', sans-serif;
    color: ${CSSColor.BtnRegister};
    line-height: 44px;
    margin-top: 30px;
    @media (max-width:575px){
      margin-top: 30px;
      padding: 0 10px;
    }
  }
  p.body-secondary {
    font-size: 18px;
    line-height: 25px;
    color: ${CSSColor.TextLight};

    @media (max-width:575px){
      margin-bottom: -30px ;
      padding: 0 10px;
    }
  }
  .Dashboard{
    background: ${CSSColor.Background};
    border-radius: 30px;
    padding: 0 32px;
    padding-bottom: 30px;
  }

  .copy {
    color:${CSSColor.Paper};
    margin: 0px auto;
    @media screen and (max-width:575px){
      
    }
  }

    
  .dashboard-mobile {
    display: flex;
    flex-direction: row;

    @media screen and (max-width:575px){
      display: flex;
      flex-direction: column-reverse;
    }
  }

  .logo-mobile {    
    display: none;

    @media screen and (max-width:575px){
      display: block;
      margin-bottom: 30px;
    }
  }

  .header {
    margin-bottom: 50px;
    
  }
  
  .header-button {
    margin: 50px 0 -60px;  

    @media screen and (max-width:575px){
      display: block;
      margin: 0px;
    }

  }

  .header-text {
    padding: 30px;

    @media screen and (max-width:575px){
      padding: 20px;
      margin-bottom: 30px;
    }
  }


  .filter {
    @media screen and (max-width:575px){
     justify-content: start;
    }   
  }

  .MuiTableCell-root {
    border-bottom: 1px solid ${CSSColor.Background};
    color: ${CSSColor.TextLight};
  }
  
  .MuiToolbar-regular {
    color: ${CSSColor.TextLight};
  }

  
}
`;
