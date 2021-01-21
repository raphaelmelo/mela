import React from 'react'
import '../../styles/global.css'
import Data from './ApiData'
import Typography from '@material-ui/core/Typography';

import * as S from "./style"

const Index = () => {
  return (
    <S.WrapperIndex>
      <Typography variant="h2" gutterBottom>
        Segunda via de recibo:
      </Typography>
      <Typography variant="body1" gutterBottom>
        Digite seu CPFno campo abaixo (sem pontos e hífens);
      </Typography>
      <Data />
    </S.WrapperIndex>
  )
}

export default Index
