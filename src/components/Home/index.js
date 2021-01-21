import React from 'react'
import back from '../../images/melanina-background.png'

import '../../styles/global.css'
import TitleAndDescription from '../Home/Title'
import Container from '@material-ui/core/Container';
import Header from '../Header/index'
import * as S from "./style"



const Index = () => {
  return (
    <S.WrapperIndex>
      <Container maxWidth="lg">
        <Header />
        <TitleAndDescription />
      </Container>
    </S.WrapperIndex>
  )
}

export default Index
