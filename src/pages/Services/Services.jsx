import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import GetQuotation from '../../components/GetQuotation/GetQuotation'
import EneicoWorks from '../../components/EneicoWorks/EneicoWorks'

const Services = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <CommonBanner title="Services" />
      <EneicoWorks />
      <GetQuotation />
    </>
  )
}

export default Services