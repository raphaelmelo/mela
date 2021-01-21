import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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



const MyForm = () => {
  const classes = useStyles();
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/ad72b9a7-211d-4de5-98bf-506e0fada594",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Email enviado!", form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <S.ContainerForm data-sal="slide-up" data-sal-delay="10" data-sal-easing="fade">
      <S.TextForm>
        <Typography component="h2">Formulário de contato</Typography>
      </S.TextForm>
      <S.WrapperForm
        action="https://getform.io/f/ad72b9a7-211d-4de5-98bf-506e0fada594"
        method="POST"
        onSubmit={handleOnSubmit}
      >
        <S.FormGroupStyled>
          <TextField
            className={classes.root}
            id="name"
            type="text"
            name="name"
            label="Nome"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            className={classes.root}
            type="email"
            name="email"
            id="email"
            label="E-mail"
            variant="outlined"
            fullWidth
            required
          />
          <S.InfosStyled>
            <TextField
              className={classes.root}
              type="number"
              name="phone"
              id="phone"
              label="Telefone"
              variant="outlined"
              required
            />
            <TextField
              className={classes.root}
              type="number"
              name="whatsapp"
              id="whatsapp"
              label="Whatsapp"
              variant="outlined"
            />
            <TextField
              className={classes.root}
              type="city"
              name="city"
              id="city"
              label="Cidade"
              variant="outlined"
              required
            />
          </S.InfosStyled>
          <TextField
            className={classes.root}
            type="text"
            name="mensage"
            id="mensage"
            label="Mensagem"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
          />
          <Button type="submit" color="primary">
            <p>Enviar</p>
          </Button>
          {serverState.status && <p>{serverState.status.msg}</p>}
        </S.FormGroupStyled>
      </S.WrapperForm>
    </S.ContainerForm>
  );
};

export default MyForm;
