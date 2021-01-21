import Styled from "styled-components";
import FormGroup from "@material-ui/core/FormGroup";

export const WrapperIndex = Styled.main`
  margin:0;
  padding:60px 10%;
  min-height:100vh;  
  width:80%;
   display:flex;
  flex-direction:column;
  justify-content:center;
  background-color:#ecf0f1;
  gap:50px;
`

export const WrapperAddress = Styled.article`
  margin:0;
  width:100%;
  min-height: 30vh;
  height:100%;
  display:flex;
  flex-direction:row;
    flex-wrap:wrap;
  gap:100px;
 
`;

export const Text = Styled.article`
   display:flex;
 
h2 {
  font-size: clamp(1rem,6vw,2rem);
  font-family: Roboto;
  font-style: normal;
  font-weight:500;
  text-transform: uppercase;
  color: #47261A;
  border-left: 7px solid #47261A;
  padding-left: 1rem;
  margin-bottom:50px;
 
}
  
`;

export const AdreessStyled = Styled.div` 
    display:flex;
    flex-direction:column;
    gap: 15px;
  
  h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #47261A;
    text-transform:uppercase;
}
  p {    
    font-weight: 500;
    font-size: 18px;
    color: rgba(126, 116, 116, 0.55);
  }
`;

export const TextForm = Styled.article`
  display:flex;
  padding:50px 0 50px 0;
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
`;

export const ContainerForm = Styled.section`
     padding:50px 10%!important; 
     background:#fff!important;
  
`

export const WrapperForm = Styled.form`
  min-width:260px;
  min-height: 250px;
  display:flex; 
    button {
      background:#47261A;
   :hover {
      background:#6A4A3E;
      }
  p {
     color:#ecf0f1!important;
   }
  }
 
`;

export const FormGroupStyled = Styled(FormGroup)`
  display:flex;
  gap:16px;
   span, textarea {
      font-size: clamp(1rem,1.2vw,2rem);
      color: #47261A; 
      font-family: 'Raleway', sans-serif;
      font-style: normal;
      font-weight:500;
  }
 
}    
`;
export const InfosStyled = Styled.article`
  display:flex;
  justify-content:space-between;
  gap:10px;

  @media (max-width: 600px) {
     flex-direction:column;
     gap:16px;

  }
  
`;