import React from 'react'

import LinkedinIcon from '../../images/social/linkedin.svg'
import FacebookIcon from '../../images/social/facebook.svg'

import * as S from "./style"

export const SocialMedia = () => {
  return (
    <S.SMStyled>

      <a href="https://Linkedin.com" target="_blank" rel="noopener noreferrer">
        <div>
          <img src={LinkedinIcon} alt="Nos siga no Linkedin" />
          <p>/Melanina</p>
        </div>
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <div>
          <img src={FacebookIcon} alt="Nos siga no Facebook" />
          <p> /Melanina</p>
        </div>
      </a>

    </S.SMStyled>



  )
}

