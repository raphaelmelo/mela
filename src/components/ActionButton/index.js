import React from 'react';
import { Link } from "gatsby"
import Whatsapp from '../../images/social/whatsapp-melanina.svg'
import { WrapperButton, Button } from "./style"

const ActionButton = () => {
  return (
    <WrapperButton >
      <Link
        to="/"
        activeClassName="active">
        <Button variant="extended">
          <img src={Whatsapp} alt="Entre em contato conosco pelo whatsapp" />
          <span>(13) 99178-9912</span>
        </Button>
      </Link>
    </WrapperButton>
  )
}

export default ActionButton
