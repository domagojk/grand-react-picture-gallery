import React from 'react'
import DisplayAlbum from './DisplayAlbum'

function ProfilePhotos (props) {
  return (
    <div className="profile-photos">
      <DisplayAlbum 
        photos={props.photos}
        albumId={1}
      />
    </div>
  )
}

export default ProfilePhotos
