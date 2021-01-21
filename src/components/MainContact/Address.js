import React from "react";

import "../../styles/global.css";
import Typography from "@material-ui/core/Typography";
import { SocialMedia } from "../Footer/SocialMedia";

import * as S from "./style"


const Address = () => {
  return (
    <S.ContainerForm data-sal="slide-up" data-sal-delay="10" data-sal-easing="fade">
      <S.Text>
        <Typography component="h2">Endereço</Typography>
      </S.Text>
      <S.WrapperAddress>
        <S.AdreessStyled>
          <Typography variant="body2" color="textSecondary" component="p">
            Avenida Ana Costa, 100, Conj 87 <br />
            Vila Mathias, Santos, SP - Brasil.
          </Typography>
          <Typography component="h3">TELEFONES</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            (13) 3278-5900 <br />
            (13) 99852-5900
          </Typography>
          <SocialMedia />
        </S.AdreessStyled>
      </S.WrapperAddress>
    </S.ContainerForm>
  );
};

export default Address;
