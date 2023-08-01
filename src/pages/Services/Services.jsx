import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import GetQuotation from '../../components/GetQuotation/GetQuotation'
import EneicoWorks from '../../components/EneicoWorks/EneicoWorks'
import AllServices from '../../components/AllServices/AllServices'

const Services = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <CommonBanner title="Services" />
      <AllServices />
      <EneicoWorks />
      <GetQuotation />
    </>
  )
}

export default Services