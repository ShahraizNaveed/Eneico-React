import React from 'react'
import CommonBanner from '../../components/CommonBanner/CommonBanner'
import GetQuotation from '../../components/GetQuotation/GetQuotation'
import EneicoWorks from '../../components/EneicoWorks/EneicoWorks'

const Services = () => {
  return (
    <>
      <CommonBanner title="Services" />
      <EneicoWorks />
      <GetQuotation />
    </>
  )
}

export default Services