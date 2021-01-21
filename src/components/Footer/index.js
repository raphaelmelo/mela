import React from 'react';

import Logo from './logo';
import Nav from './nav';
import Text from './Text';
import { WrapperIndex } from './style';



const Header = () => {
  return (
    <WrapperIndex>
      <Logo />
      <Nav />
      <Text />
    </WrapperIndex>
  );
};

export default Header;
