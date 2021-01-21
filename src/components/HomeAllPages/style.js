import Styled from "styled-components";
import Back from '../../images/melanina-background.png'

export const WrapperIndexPage = Styled.section`
  margin:0;
  padding:0;
  background:#EBF2F5;
  width:100%;
  height:60vh;
  background-image:url(${Back});
  background-position: 0;  
  background-repeat: no-repeat; 
  background-size: cover;
  background-position: center;  

 `

export const WrapperText = Styled.article`

  height:40vh;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
  

  h1 {
    max-width:800px;
    width:100%;
    padding:0;
    margin:0;
    display: flex;
    align-items: center;

    font-style: normal;
    font-weight: bold;
    font-size: clamp(1.5rem, 4vw, 4rem); 
    line-height: clamp(1.5rem, 10vw, 6rem); 
    text-transform:uppercase;
    

    text-shadow: 4px 5px 5px rgba(255, 0, 0, 0.25);
    color: #4A2417;

    
  }

` 