import React from 'react'
import Typography from '@material-ui/core/Typography';
import * as S from "./style"

const Index = (props) => {
  return (
    <S.WrapperText>
      <Typography variant="h1" component="h1" gutterBottom>
        {props.text}
      </Typography>
    </S.WrapperText>
  )
}

export default Index
