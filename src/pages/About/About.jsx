import React from 'react'
import "./About.css"
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import AboutHome from '../../components/AboutHome/AboutHome'
import Clients from '../../components/Clients/Clients'
import PassionBanner from '../../components/PassionBanner/PassionBanner'

const About = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <CommonBanner title="About US" />
      <AboutHome hide="true" />
      <Clients hide="true" />
      <PassionBanner />
    </>
  )
}

export default About