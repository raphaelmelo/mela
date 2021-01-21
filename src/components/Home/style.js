import Styled from "styled-components";
import Back from '../../images/melanina-background.png'

export const WrapperIndex = Styled.section`
  margin:0;
  padding:0;
  background:#EBF2F5;
  background-image:url(${Back});
  width:100%;
  height:100vh;
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;

`

export const WrapperText = Styled.article`
  height:80vh;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
  h1 {
    padding:0;
    margin:0;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: bold;
    font-size: clamp(1.5rem, 10vw, 6rem); 
    line-height: clamp(1.5rem, 10vw, 6rem); 
    text-transform: uppercase;
    text-shadow: 4px 5px 5px rgba(255, 0, 0, 0.25);
    color: #4A2417;
  }

`

export const Description = Styled.div`
  h2 {
    padding:0;
    margin:0;
    font-family: Roboto Mono;
    font-style: normal;
    font-weight:clamp(10px, 7.3vw, 4.444rem);
    line-height: clamp(1rem, 10vw, 4.444rem);
    font-size: clamp(10px, 7.3vw, 4.444rem); 
    text-shadow: 4px 5px 5px rgba(255, 0, 0, 0.25);
    text-transform: uppercase;
    color: #FFFFFF;

    span {
       font-size: clamp(1.5rem, 8vw, 4.7rem); 
    }
  }

` 