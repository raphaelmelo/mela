import React from 'react'
import SEO from '../components/seo'

import HomeSection from '../components/HomeAllPages'
import MainSection from '../components/MainContact'
import ActionButton from '../components/ActionButton'
import Footer from '../components/Footer'



const IndexPage = (props) => {

  return (
    <>
      <SEO title="ContatoS" />
      <ActionButton />
      <HomeSection text="Entre em contato conosco" />
      <MainSection />
      <Footer />
    </>
  )
}

export default IndexPage
