import React, { useState } from "react";
import axios from "axios";
import DownloadLink from "react-download-link";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import * as S from "./style"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#6A4A3E",
    },
    "& .MuiInputLabel-outlined": {
      color: "#6A4A3E",
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "#6A4A3E",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#6A4A3E",
    },
  },
});


export default function index() {
  const classes = useStyles();

  const [number, setNumber] = useState({ cep: "" });
  const [URL, setURL] = useState("");
  const [errorAPI, seterroAPI] = useState("");
  const [Load, setLoad] = useState(true);


  const getURL = () => {
    setLoad(!Load)
    seterroAPI("")

    axios
      .get(
        `https://strapimelanina.herokuapp.com/enviar-segunda-vias?CPF=${number}`
      )
      .then((response) => {
        setLoad(true)
        setURL(response.data[0].Arquivo[0].url);
        setNumber()
      }).catch((err) => {
        setLoad(true)
        seterroAPI(<S.StyledErr>CPF incorreto (digite seu documento sem pontos e hífen). </S.StyledErr>);
        setURL("");

      })
  };

  const handlingNumber = (e) => {
    setNumber(e.target.value);
  };

  const Content = (
    <S.WrapperButton>
      {" "}<p>Olá Caminhoneiro, clique no botão para fazer o download da segunda-via:</p>{" "}
      <DownloadLink label="Baixar Recibo" filename={URL} />{" "}
    </S.WrapperButton>
  )

  return (
    <S.Wrapper>
      <S.DivField>
        <TextField
          className={classes.root}
          type="number"
          name="cpf"
          id="cpf"
          onChange={(e) => {
            handlingNumber(e);
          }}
          label="Digite o CPF"
          variant="outlined"
          required
        />
        <Button onClick={getURL} type="submit">
          Enviar
        </Button>
      </S.DivField>
      {(((URL) && Content) || errorAPI) || <p></p>}
      {Load || <S.Circle />}
    </S.Wrapper>
  );
}
