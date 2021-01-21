import Styled from "styled-components";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";


export const WrapperIndex = Styled.main`
  margin:0;
  padding:50px 0;
  background:#ecf0f1;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:60px;
 `

export const WrapperAccordion = Styled.article`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    
 
    h2 {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: clamp(1rem, 5.7vw, 1.7rem); 
        line-height: 41px;        
        text-transform: uppercase;
        color: #47261A;
    }
 `;

export const AccordionStyled = Styled(Accordion)`
    width:50%;
    min-width:290px;    
`;
export const AccordionSummaryStyled = Styled(AccordionSummary)`
    h3 {        
        font-family: Roboto Mono;
        font-style: normal;
        font-weight: 800;
        font-size:1.2rem; 
        text-transform: uppercase;
        color: #754F41;
    }
    
`;
export const AccordionSummaryParagraph = Styled(Typography)`
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px!important;
    text-align: justify;
    color: #7E7474;
`;

export const WrapperDisplayText = Styled.article`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  min-height:400px;
  background:#fff;
  padding:20px 10%; 

  
   @media (max-width: 600px) {
     padding: 5vh 5%;
}

  h2 {
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: clamp(1rem, 6vw, 2rem); 

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: #47261A;
  }

  p {
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 22px;

    text-align: justify;
    color: #7E7474;

  }
`;
