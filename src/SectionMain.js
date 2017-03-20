import React from 'react'
import ProfilePhotos from './ProfilePhotos'

function SectionMain (props) {
  return (
    <div className="section-main">
      <ProfilePhotos photos={props.photos} />
    </div>
  )
}

export default SectionMain
