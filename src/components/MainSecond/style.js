import Styled from "styled-components";
import CircularProgress from '@material-ui/core/CircularProgress';


export const WrapperIndex = Styled.main`
  margin:0;
  padding:0;
  background:#ecf0f1;
   height:60vh;
  justify-content:center;
  align-items:center;
  padding:50px 10%;
  
  h2 {        
    font-size: clamp(1rem,6vw,2rem);
    font-family: Roboto;
    font-style: normal;
    font-weight:500;
    text-transform: uppercase;
    color: #47261A;
    border-left: 7px solid #47261A;
    padding-left: 1rem;
  }
  P {
   font-size: 22px;
   font-family: "Roboto", "Helvetica", "Arial", sans-serif;
   font-weight: 300;
   color: #7E7474;
   width:60%;
   padding: 0 0 20px 0;
  }  
`
export const Wrapper = Styled.div`
  margin:0;  
  background:#ecf0f1;
  height:100px;
  display:flex;
  align-items:flex-start;
  justify-content:flex-start;
  flex-direction:column;
  
  button {
    background:#47261A;
    color:#fff;
    height:56px;
      :hover {
        background:#6A4A3E;
      }
  }
   
`;
export const DivField = Styled.div`
  padding: 15px 0;
`



export const StyledErr = Styled.article`
  margin:20px 0 0!important ;
  color:red!important;

`
export const WrapperButton = Styled.div`
  display:flex;
  flex-direction:column;
  height:200px;
  justify-content:center;
    
  a {
    width:60px!important;

     color:#fff !important;
    background:#fb4d55 !important;
    text-decoration: none!important;
    font-family: Roboto!important;
    font-style: normal!important;
    font-size: 18px!important;
    text-transform:uppercase!important;
    font-weight:400!important;
    padding:20px!important;

  }
`

export const Circle = Styled(CircularProgress)`

  svg {
    color: #47261A;
  }
`
