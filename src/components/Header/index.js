import React from 'react'
import Drawer from './Drawer'
import Logo from './Logo'

import * as S from './style'

const Header = () => {
  return (
    <S.WrapperHeader>
      <Logo />
      <Drawer />
    </S.WrapperHeader>
  )
}

export default Header
