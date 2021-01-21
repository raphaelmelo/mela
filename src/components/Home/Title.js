import React from 'react'
import Typography from '@material-ui/core/Typography';
import * as S from "./style"


const Index = () => {
  return (
     <S.WrapperText>
          <Typography variant="h1" component="h1" gutterBottom>
            Melanina
        </Typography>
        <S.Description>
          <Typography  component="h2" gutterBottom>
            <span>transporte</span><br />& logística
        </Typography>
        </S.Description>
     </S.WrapperText>
  )
}
 
export default Index
