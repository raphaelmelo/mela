import Styled from "styled-components";

export const WrapperIndex = Styled.main`
  margin:0;
  padding:0;
  background: #ecf0f1;
  width:100%;
  min-height:100vh;  
  display:flex;
  flex-direction:column;
  justify-content:center;


`

export const WrapperText = Styled.section`
   display:flex;
   flex-direction:column;
   width:80%;
   padding:50px 10%; 
   gap:50px;
   
   h2 {        

      font-size: clamp(1rem,6vw,2rem);
      font-family: 'Roboto';
      font-style: normal;
      font-weight:500;
      text-transform: uppercase;
      color: #47261A;
      border-left: 7px solid #47261A;
      padding-left: 1rem;
      
   }

  h3 {

     font-family: 'Roboto';
     font-style: normal;
     font-weight: 700;
     font-size: 20px;
     color: #7E7474;
     text-transform:uppercase;


  }

  h4 {
     font-family: 'Roboto';
     font-style: normal;
     font-weight: 600;
     font-size: 18px;
     line-height: 21px;
     color: #7E7474;
   }

   
  li, P {
    font-size: 22px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 300;
    color: #7E7474;
    width:60%;

  }

`

export const DivText = Styled.div`
   display:flex;
   flex-direction:column;
   gap:20px;   
   background: #fffffff0;
   border-radius:10px;
   padding: 60px;

`