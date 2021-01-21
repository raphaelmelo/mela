import Styled from "styled-components";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


export const Wrapper = Styled.main`
  margin:0;
  padding:0;
  background: #ecf0f1;
  width:100%;
  min-height:100vh;  
`

export const WrapperList = Styled.section`
    padding:10% 15%;
    display:flex;
    align-items:center;
    flex-direction:row;
    flex-wrap:wrap;
    gap:30px;
  
`

export const ListItem = Styled.section`
    width:280px;
    cursor: default	!important;

  h2 {
    font-family: Roboto;
    font-style: normal;
    text-transform:uppercase;
    color: #47261A;
    border-left: 7px solid #47261A;
    padding-left: 1rem;
    font-size: 2.2rem;
  }

  p {
    width:260px;
    text-align:justify;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 24px;
    padding: 10px 0 0 0 ;
    color: #827e7e;
  }
`

export const CardStyled = Styled(Card)`
    width:280px;

     p {
       font-size: 18px;
     }

    div {
      cursor: default	!important;

    }
`

export const CardMediaStyled = Styled(CardMedia)`
  width:345px;
  height:150px;
  background: linear-gradient(to bottom,#e74c4c 0%,#e74c3c 100%);
 
`
