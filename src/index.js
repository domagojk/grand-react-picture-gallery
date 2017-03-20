import React from 'react'
import ReactDOM from 'react-dom'
import PageWrapper from './PageWrapper'
import './app.css'

const appState = {
  albums: [{
    id: 1,
    title: 'profile photos',
    current: 0
  }, {
    id: 2,
    title: 'cover photos',
    current: 0
  }],
  photos: [
    {
      id: 1,
      title: 'My profile picture',
      url: 'https://cdn.meme.am/images/600x600/2485/the-most-interesting-man-in-the-world.jpg',
      album: 1
    },
    {
      id: 2,
      title: 'At the party',
      url: 'https://cdn.meme.am/images/600x600/5188389/drunk-baby-1.jpg',
      album: 1
    },
    {
      id: 3,
      title: 'My cover',
      url: 'https://cdn.meme.am/images/600x600/1391/stoner-dog.jpg',
      album: 2
    }
  ]
}

ReactDOM.render(
  <PageWrapper userData={appState} />,
  document.getElementById('root')
)
