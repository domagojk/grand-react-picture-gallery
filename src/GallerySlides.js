import React from 'react'

class GallerySlides extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPhotoNum: 0
    }
  }

  changePhoto (direction) {
    let newPhotoNum = false

    if (direction === 'next' && this.state.currentPhotoNum !== this.props.photos.length - 1) {
      newPhotoNum = this.state.currentPhotoNum + 1
    } else if (direction === 'prev' && this.state.currentPhotoNum > 0) {
      newPhotoNum = this.state.currentPhotoNum - 1
    }

    if (newPhotoNum !== false) {
      this.setState({ currentPhotoNum: newPhotoNum })
    }
  }

  render () {
    return (
      <div>
        <img src={this.props.photos[this.state.currentPhotoNum]} alt='' />
        <button onClick={() => this.changePhoto('prev')}>Previous</button>
        <button onClick={() => this.changePhoto('next')}>Next</button>
      </div>
    )
  }
}

export default GallerySlides
