import styled from 'styled-components'
import Fab from '@material-ui/core/Fab';


export const WrapperButton = styled.div`
    position:fixed;
    bottom:20px;
    right:7vw;

`
export const Button = styled(Fab)`
     
    img {
        width:40px;
        padding-right:10px;
    }
    span {
        color:#4A2417;
        font-weight:500;
        font-size:16px;
    }
`
