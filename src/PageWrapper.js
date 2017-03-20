import React from 'react'
import SectionMain from './SectionMain'

function PageWrapper (props) {
  return (
    <div className="page-wrapper">
      <SectionMain photos={props.userData.photos} />
    </div>
  )
}
export default PageWrapper
