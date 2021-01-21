import React from 'react'
import SEO from '../components/seo'

import HomeSection from '../components/HomeAllPages'
import MainSection from '../components/MainSecond'
import ActionButton from '../components/ActionButton'
import Footer from '../components/Footer'



const IndexPage = () => {

  return (
    <>
      <SEO title="Segunda-via" />
      <ActionButton />
      <HomeSection text="Segunda-via de Recibo" />
      <MainSection />
      <Footer />
    </>
  )
}

export default IndexPage
