import React from 'react'
import SEO from '../components/seo'

import HomeSection from '../components/HomeAllPages'
import MainSection from '../components/MainSecond'
import ActionButton from '../components/ActionButton'
import Footer from '../components/Footer'



const IndexPage = () => {

  return (
    <>
      <SEO title="Serviços" />
      <ActionButton />
      <HomeSection text="Melanina Transporte & Logistica - 2ª via"/>
      <MainSection />
      <Footer />
    </>
  )
}

export default IndexPage
