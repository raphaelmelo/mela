import styled from 'styled-components'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";


export const WrapperHeader = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    
    width:100%;
    height:90px;
 
 span {
    color:#fff;
    font-size:40px;
 }
`
export const LogoStyled = styled.div`

`








export const MenuStyled = styled.div`
    display:flex;
    
  
`

export const NavStyled = styled.div`
     height:100vh;
     padding: 0 0 50px 0;
 
`
export const DrawerStyled = styled(Drawer)`
    
`
export const WrapperMenu = styled.aside`
    height:100%;
    display: flex;
    
    align-items:center;
    flex-direction:column;
 
    
`

export const ListStyled = styled(List)`
    width:30vw;  
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;


`


export const ListItemStyled = styled(ListItem)`

    a {
        width:100%;
       font-weight: 500;
        font-size: 18px;
        display: flex;
        justify-content:center;
        align-items:center;
        text-transform: uppercase;
        color: #47261A;
        
        }
`

export const TextMenu = styled.div`
    width:100%;
    display: flex;
    justify-content:center;
    h2 {
        padding: 30px 0 0 0 ;       
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        display: flex;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
        color: #4A2417;
        text-shadow: 4px 5px 5px rgba(255, 0, 0, 0.25);
    }


 
 `
export const DivSegundaVia = styled.article`
    display: flex;
    flex-direction:column;
    align-items: center;
    text-align: center;
    gap: 15px;
   
    

`
export const SegundaViaButton = styled.article`
    display: flex;
    flex-direction:column;
    align-items: center;
    text-align: center;
    border:1px solid #47261A;
    border-radius:10px;
    padding:10px;
    gap:10px;
    cursor: pointer;
    img {
            width:80px;
        }
    span {
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        text-transform: uppercase;
        color: #47261A;
        }
`


export const AdrressMenu = styled.article`
    p {
        padding-top:50px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;

        color: rgba(126, 116, 116, 0.80);

        padding-bottom: 10px ;
        border-bottom: 6px solid #47261A;
    }
`



export const LogoImage = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100px;
    img {
        width:70px;
        
    } 

`
