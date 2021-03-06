import React from 'react'
import GallerySlides from './GallerySlides'

function DisplayAlbum (props) {
  const profilePhotosURLs = props.photos
    .filter(p => p.album === props.albumId)
    .map(p => p.url)

  return (
    <div className="display-album">
      <GallerySlides photos={profilePhotosURLs} />
    </div>
  )
}


export default DisplayAlbum
