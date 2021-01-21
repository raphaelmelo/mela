import React from 'react'
import SEO from '../components/seo'

import HomeSection from '../components/Home'
import MainHome from '../components/MainHome'
import ActionButton from '../components/ActionButton'
import Footer from '../components/Footer'

const Service = () => {
  return (
    <>
      <SEO title="Home" />
      <ActionButton />
      <HomeSection />
      <MainHome />
      <Footer />
    </>
  )
}

export default Service;
