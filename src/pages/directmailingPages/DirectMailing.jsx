import React from 'react'
import DirectMailingSection from '../../components/sections/directmailing/DirectMailingSection'
import ImportencofDirectMail from '../../components/sections/directmailing/ImportencofDirectMail'
import DirectMailFAQ from '../../components/sections/directmailing/DirectMailFAQ'
import WhyChoosesDM from '../../components/sections/directmailing/WhyChoosesDM'

export default function DirectMailing() {
  return (
    <>
      <DirectMailingSection/>
      <ImportencofDirectMail/>
      <DirectMailFAQ/>
      <WhyChoosesDM/>
    </>
  )
}
