import React from 'react'
import '../../styles/global.css'

import Typography from '@material-ui/core/Typography';

import * as S from "./style"

const index = () => {
   return (
      <S.WrapperText >
         <S.DivText data-sal="slide-up" data-sal-delay="30" data-sal-easing="ease">
            <Typography component="h2">
               O QUE FAZEMOS
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
               A Melanina atua desde 2018 no Porto de Santos, reconhecida por prestar um serviço
               especializado com segurança, flexibilidade e assertividade nas decisões e informações
               logísticas. Custos e prazos de entrega comprovadamente competitivos, possui hoje um
               dos menores prazos de entrega e índices de avarias bem próximos de zero.

          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
               Como uma empresa especializada no transporte de cargas para o Porto de Santos.
               Ao longo desses anos vem buscando cada vez mais a satisfação de seus clientes através de
               um serviço de transporte comprometido com as metas de qualidade de seus clientes.
          </Typography>
         </S.DivText>

         <S.DivText >

            <Typography component="h2">
               Missão, Visão e Valores
         </Typography>

            <Typography component="h3">
               MISSÃO
         </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
               “Atender nossos clientes com um alto padrão de qualidade e segurança, agregando valor aos nossos serviços e ao produto do cliente”.
          </Typography>

            <Typography component="h3">
               Visão
         </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
               “Atender nossos clientes com um alto padrão de qualidade e segurança, agregando valor aos nossos serviços e ao produto do cliente”.
          </Typography>

            <Typography component="h3">
               Valores
         </Typography>
            <Typography component="h4">
               Competência
         </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
               “Atender nossos clientes com um alto padrão de qualidade e segurança, agregando valor aos nossos serviços e ao produto do cliente”.
          </Typography>
            <Typography component="h4">
               Cooperação
         </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
               “Atender nossos clientes com um alto padrão de qualidade e segurança, agregando valor aos nossos serviços e ao produto do cliente”.
          </Typography>
            <Typography component="h4">
               Comprometimento
         </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
               “Atender nossos clientes com um alto padrão de qualidade e segurança, agregando valor aos nossos serviços e ao produto do cliente”.
          </Typography>
            <Typography component="h4">
               Desempenho
         </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
               “Atender nossos clientes com um alto padrão de qualidade e segurança, agregando valor aos nossos serviços e ao produto do cliente”.
          </Typography>
            <Typography component="h4">
               Disciplina
         </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
               “Atender nossos clientes com um alto padrão de qualidade e segurança, agregando valor aos nossos serviços e ao produto do cliente”.
          </Typography>
            <Typography component="h4">
               Meio Ambiente
         </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
               “Atender nossos clientes com um alto padrão de qualidade e segurança, agregando valor aos nossos serviços e ao produto do cliente”.
          </Typography>
            <Typography component="h4">
               Responsabilidade Social
         </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
               “Atender nossos clientes com um alto padrão de qualidade e segurança, agregando valor aos nossos serviços e ao produto do cliente”.
          </Typography>
         </S.DivText>

      </S.WrapperText>
   )
}

export default index;
