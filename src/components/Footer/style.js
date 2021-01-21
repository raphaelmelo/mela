import Styled from "styled-components";

export const WrapperIndex = Styled.header`
  width:80%;
  height:auto;
  min-height:100vh;
  padding:0 10%; 
  margin:0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background: linear-gradient(to bottom,#e74c4c 0%,#e74c3c 100%);
  
 @media (max-width: 600px) {
  padding:100px 10%; 
    }
`;

export const WrapperLogo = Styled.article`
  width:100%;
  margin:0;
  padding: 40px 0 0 0;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#fff;

  img {
    width:80px;
  } 
`;

export const WrapperNav = Styled.article`
  width:100%;
  height:auto;
  margin:0;
  padding: 5% 0;
  display:flex;
  justify-content:space-around;
  background:#fff;;
  font-family: 'Raleway', sans-serif;

  span {
    font-style: normal;
    font-size: 20px;
    text-transform:uppercase;
    line-height: 28px;
    color: #4A2417;
  }
  li, a, p {
    font-family: 'Raleway', sans-serif;
    font-weight:500;
    font-style: normal;
    font-size: clamp(1.4rem, 1.3vw, 2rem); 
    color: rgba(0, 0, 0, 0.56);

  }

  @media (max-width: 600px) {
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:50px;
    text-align:center;



  }
`;

export const NavFooter = Styled.nav`
`;

export const ListServices = Styled.article`
`;

export const Infos = Styled.article`
  display:flex;
  flex-direction:column;
  gap:10px;

  @media (max-width: 600px) {
    text-align:center;
    gap:50px;
    }
  
`;

export const Address = Styled.article`
  @media (max-width: 600px) {
    width:250px;
    }


`;

export const Contact = Styled.article`

`;

export const SMStyled = Styled.article`
  display:flex; 
  gap: 15px;
  
  div {
    display:flex;
    align-items:center;
    justify-content:center;

    a, p {
    font-size: clamp(16px,1.3vw,20px);

  }

  }
 
  img {
    width:20px;
    height:18px;    
    padding:6px;
    border-radius:10px;
    background:#E1E2E1;
   }
   @media (max-width: 600px) {
    
    }
`;

export const WrapperText = Styled.article`
  width:100%;
  margin:0;
  padding: 40px 0;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#fff;
 
 h2 {
    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: clamp(1rem, 1.4vw, 2rem); 
    text-transform: uppercase;
    color: rgba(74, 36, 23, 0.76);
    text-shadow: 0px 4px 4px rgba(108, 12, 12, 0.25);

 }

 
 @media (max-width: 600px) {
     display:none;

    }

  
`;
