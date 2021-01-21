import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "gatsby"
import Divider from "@material-ui/core/Divider";
import Typography from '@material-ui/core/Typography';
import * as S from './style'
import LogoMenu from "../../images/logo.webp"
import SegundaVia from "../../images/sv-menu.svg"
import styled from 'styled-components'


export const WrapperHeader = styled.div

const useStyles = makeStyles({
    list: {
        width: "100%",
        height: "100px",

    },
    fullList: {
        width: "auto"
    }
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <S.NavStyled
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom"
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <S.ListStyled>

                <S.ListItemStyled button>
                    <Link to="/">Home</Link>
                </S.ListItemStyled>
                <S.ListItemStyled button>
                    <Link to="/sobre">Sobre</Link>
                </S.ListItemStyled>
                <S.ListItemStyled button>
                    <Link to="/servicos">Serviços</Link>
                </S.ListItemStyled>
                <S.ListItemStyled button>
                    <Link to="/contato">Contato</Link>
                </S.ListItemStyled>

            </S.ListStyled>
        </S.NavStyled>
    );

    return (
        <S.MenuStyled>
            {['☰'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <S.DrawerStyled
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        <S.WrapperMenu>
                            <S.LogoImage>
                                <Link
                                    to="/" activeStyle={{ color: "black" }}
                                >
                                    <img src={LogoMenu} alt="Melanina Transporte" />
                                </Link>
                            </S.LogoImage>
                            <S.TextMenu>
                                <Typography component="h2">
                                    Menu
                        </Typography>
                            </S.TextMenu>
                            {list(anchor)}
                            <Divider />
                            <S.DivSegundaVia>
                                <S.TextMenu>
                                    <Typography component="h2">
                                        Segunda-via
                            </Typography>
                                </S.TextMenu>
                                <Link to="/segunda-via">
                                    <S.SegundaViaButton>
                                        <img src={SegundaVia} alt="Baixar sua segunda via" />
                                        <span>Faça o download <br /> do seu recibo</span>
                                    </S.SegundaViaButton>
                                </Link>

                                <S.AdrressMenu>
                                    <p>
                                        Avenida Ana Costa, 100, Conj 87 <br />
                                Vila Mathias, Santos,  SP - Brasil.<br />
                                Fones: (13) 33253525 - 33256844
                            </p>
                                </S.AdrressMenu>
                            </S.DivSegundaVia>
                        </S.WrapperMenu>
                    </S.DrawerStyled>
                </React.Fragment>
            ))}
        </S.MenuStyled>
    );
}
