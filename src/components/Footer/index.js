import React from 'react';

import Logo from './logo';
import Nav from './nav';
import Text from './Text';
import { WrapperIndex } from './style';



const Header = () => {
  return (
    <WrapperIndex data-sal="slide-up" data-sal-delay="3" data-sal-easing="slide-up">
      <Logo />
      <Nav />
      <Text />
    </WrapperIndex>
  );
};

export default Header;
