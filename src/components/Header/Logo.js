import React from 'react'
import LogoIMG from '../../images/logo.webp';
import { Link } from "gatsby"
import * as S from "./style"

const index = () => {
  return (
    <S.LogoStyled >
      <Link to="/">
        <img src={LogoIMG} alt="Logo Melanina" />
      </Link>
    </S.LogoStyled>
  )
}
export default index;
