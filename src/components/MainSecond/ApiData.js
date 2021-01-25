import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { cpf } from "cpf-cnpj-validator";

import * as S from "./style";
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
    setLoad(!Load);
    seterroAPI("");

    const isCPF = cpf.isValid(number);

    if (isCPF) {
      axios
        .get(
          `https://strapimelanina.herokuapp.com/enviar-segunda-vias?CPF=${number}`
        )
        .then((response) => {
          setLoad(true);
          setURL(response.data[0].Arquivo[0].url);
          setNumber();
        })
        .catch((err) => {
          setLoad(true);
          seterroAPI(
            <S.StyledErr>Ainda não cadastramos recibo nesse CPF.</S.StyledErr>
          );
          setURL("");
        });
    } else {
      seterroAPI(
        <S.StyledErr>
          Número de CPF invalido. (digite seu documento sem pontos){" "}
        </S.StyledErr>
      );
      setLoad(true);
    }
  };

  const handlingNumber = (e) => {
    setNumber(e.target.value);
  };

  const URLDOWNLOAD = (
    <a href={URL} download target="_blank">
      abrir recibo
    </a>
  );

  const Content = (
    <S.WrapperButton>
      {" "}
      <p>
        Olá Caminhoneiro, clique no botão abaixo:
      </p>{" "}
      {URLDOWNLOAD}
    </S.WrapperButton>
  );

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
      {(URL && Content) || errorAPI || <p></p>}
      {Load || <S.Circle />}
    </S.Wrapper>
  );
}
