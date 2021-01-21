import React from 'react'
import '../../styles/global.css'

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';


import Typography from '@material-ui/core/Typography';

import Styled from 'styled-components'






const Wrapper = Styled.section`
   display:flex;
   flex-direction:column;
   width:100vw;
   padding:80px 10%; 
   gap:15px;
   background: #fffffff0;
   border-radius:10px;

   h2 {
      font-size: clamp(1rem,6vw,2rem);
      font-family: Roboto;
      font-style: normal;
      text-transform: uppercase;
      color: #47261A;
      border-left: 7px solid #47261A;
      padding-left: 1rem;
      font-size: 2.2rem;
  
   }

  h3 {
      font-size: clamp(1rem, 4vw, 1.5rem); 
      font-family: Roboto;
      font-style: normal;
      text-transform:uppercase;  
      color: #47261A; 
  }
   
  li, P {
   color: #827e7e;
   font-size: 18px;
   line-height: 20px;
   font-family: "Roboto", "Helvetica", "Arial", sans-serif;
   font-weight: 400;
   line-height: 25px;
   letter-spacing: 0.01071em;
  }
`
const DivChips = Styled.article`
   display:flex;
   flex-wrap:wrap;
   gap:10px;

   div {
      padding: 16px;
      background: linear-gradient(to bottom,#e74c4c 0%,#e74c3c 100%);
       
      span {
         color: #fff;
         font-size: 16px;
      }
   }
`

const Index = () => {
   const handleDelete = () => {
      console.info('You clicked the delete icon.');
   };

   return (
      <Wrapper data-sal="slide-up" data-sal-delay="50" data-sal-easing="ease">

         <Typography component="h3">
            FLUXO DE TRABALHO
         </Typography>
         <ol>
            <li>1. Recebimento da solicitação de coleta pelo cliente; </li>
            <li>2. Preparação e planejamento dos caminhões e motoristas a serem convocados para as coletas;</li>
            <li>3. Preparação da carga para embarque conforme instrução do cliente e com uso de equipamentos adequados para a operação. </li>
         </ol>


         <Typography component="h3">
            REGIÕES EM QUE ATUAMOS
            </Typography>
         <DivChips>
            <Chip
               size="small"
               label="Santos"
            />
            <Chip
               size="small"
               label="Guarujá"
            />
            <Chip
               size="small"
               label="Cubatão"
            />
            <Chip
               size="small"
               label="São Paulo"
            />
            <Chip
               size="small"
               label="São Bernardo"
            />
            <Chip
               size="small"
               label="Rio de Janeiro"
            />
            <Chip
               size="small"
               label="Santa Catarina"
            />
            <Chip
               size="small"
               label="Parana"
            />
         </DivChips>
      </Wrapper>
   )
}
export default Index
