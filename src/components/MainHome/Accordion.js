import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import * as S from "./style"

const useStyles = makeStyles((theme) => ({



    root: {
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function SimpleAccordion() {
    const classes = useStyles();

    const Data = [
        {
            title: "Celulose",
            text: "O seu manuseio exige cuidados indispensáveis na operação logística, fazemos o transporte de celulose."
        },
        {
            title: "Açúcar",
            text: "Definimos as melhores estrategias logisticas para nossos clientes, com açucar não é diferente."
        },
        {
            title: "Container",
            text: "A logistica de transporte rodoviario de container é uma função desafiadora, nossa experiencia garante um processo seguro e bem-sucedido."
        },
        {
            title: "Super simples pó",
            text: "Nos dias atuais, o conhecimento sobre as normas de transporte rodoviário de cargas super simples pó é um desafio e requer boas práticas em logística."
        },
        {
            title: "Farinha de trigo",
            text: "Transportar trigo exige alguns cuidados para que a mercadoria chegue até o destino sem avarias e que possa satisfazer as expectativas do contratante, o maior desafio nesse tipo de viagem é como o deslocamento será feito."
        },

        {
            title: "Minério",
            text: "Transporte ágil com planejamento, no Porto de Santos."
        }
    ]

    const Content = Data.map((item) => {
        return (
            <S.AccordionStyled key={item.title}>
                <S.AccordionSummaryStyled square
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading} component="h3">{item.title}</Typography>
                </S.AccordionSummaryStyled>
                <AccordionDetails>
                    <S.AccordionSummaryParagraph component="p">
                        {item.text}
                    </S.AccordionSummaryParagraph>
                </AccordionDetails>
            </S.AccordionStyled>
        )

    })

    return (
        <S.WrapperAccordion className={classes.root} data-sal="slide-up" data-sal-delay="30" data-sal-easing="ease">
            <Typography variant="h4" component="h2" gutterBottom>
                Cargas que transportamos
            </Typography>
            {Content}
        </S.WrapperAccordion>
    );
}