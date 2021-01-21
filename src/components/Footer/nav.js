import React from 'react'
import { Link } from "gatsby"

import { SocialMedia } from "./SocialMedia"
import * as S from "./style"


const Footer = () => {
  return (
    <S.WrapperNav>
      <S.NavFooter>
        <span>Páginas</span>
        <ul>
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li><Link to="/servicos" activeClassName="active">Serviços</Link></li>
          <li><Link to="/sobre" activeClassName="active">Sobre nós</Link></li>
          <li><Link to="/contato" activeClassName="active">Contato</Link></li>

        </ul>
      </S.NavFooter>
      <S.ListServices>
        <span>Links importantes</span>
        <ul>
          <li><Link to="/segunda-via" activeClassName="active">Segunda via</Link></li>
          <li><a href="https://www.portodesantos.com.br/" title="Porto de Santos" rel="noreferrer" target="_blank">Porto de Santos</a></li>
          <li><a href="https://www.ecovias.com.br/" title="Sistema Anchieta Imigrantes" rel="noreferrer" target="_blank">Sistemas Ecovias</a></li>
        </ul>
      </S.ListServices>
      <S.Infos>
        <SocialMedia />

        <S.Address>
          <span>Endereço:</span>
          <p>
            Avenida Ana Costa, 100, Conj 87 <br />
              Vila Mathias, Santos,  SP - Brasil.
            </p>
        </S.Address>

        <S.Contact>
          <span>Contato:</span>
          <p>
            (13) 3278-5900 <br />
              (13) 99852-5900
            </p>
        </S.Contact>
      </S.Infos>

    </S.WrapperNav>
  )
}

export default Footer
