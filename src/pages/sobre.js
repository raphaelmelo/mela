import React from 'react'
import SEO from '../components/seo'

import HomeSection from '../components/HomeAllPages'
import MainSection from '../components/MainAbout'
 import ActionButton from '../components/ActionButton'
import Footer from '../components/Footer'

  

const IndexPage = (props) => {
 
  return(
    <>
    <SEO title="Serviços"/>
    <ActionButton />
    <HomeSection text="Transporte e Logística com efetividade" />
    <MainSection />
    <Footer />
     </>
  )
}

export default IndexPage
