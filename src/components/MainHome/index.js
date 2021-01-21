import React from 'react'
import '../../styles/global.css'

import * as S from './style'

import DisplayText from './displayText'
import Accordion from './Accordion'




const Index = () => {
  return (
    <S.WrapperIndex>
      <DisplayText
        title="Transporte de cargas com segurança e eficácia"
        text="Atuamos na logística de cargas no Porto de Santos
        prestando serviços à despachantes aduaneiros, tradings, 
        indústrias importadoras e exportadoras."
      />


      <Accordion />
      <DisplayText
        title="Nosso background e credibilidade"
        text="Nossos clientes confiam em nosso know how, não apenas
        para gerenciar seus envios com habilidade, mas também para 
        superar seus principais desafios logísticos no maior complexo
        portuário da América Latina, o Porto de Santos."
      />



    </S.WrapperIndex>
  )
}

export default Index
