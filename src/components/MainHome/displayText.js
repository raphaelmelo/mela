import React from 'react'
import '../../styles/global.css'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import * as S from './style'

const Index = (props) => {
  return (

    <Container maxWidth="md">
      <S.WrapperDisplayText data-sal="slide-up" data-sal-delay="30" data-sal-easing="ease">
        <Typography variant="h4" component="h2" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {props.text}
        </Typography>
      </S.WrapperDisplayText>
    </Container>
  )
}

export default Index;
