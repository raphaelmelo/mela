import React from 'react'
import '../../styles/global.css'

import Header from '../Header/index'

import TitleAndDescription from '../HomeAllPages/Title'
import Container from '@material-ui/core/Container';

import * as S from "./style"



const Index = (props) => {
  return (
    <S.WrapperIndexPage>
      <Container maxWidth="lg">
        <Header />
        <TitleAndDescription text={props.text} />
      </Container>
    </S.WrapperIndexPage>
  )
}

export default Index
