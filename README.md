# The Grand React Picture Gallery
This is a simple React application,
made to complement [The Grand React blog post](https://medium.com/@domagojk/the-grand-react-hotel-219b4d393261).

It is explained using the same characters featured in the post in a "recipe style guide".

## Ingredients
- [Create React App](https://github.com/facebookincubator/create-react-app)

## Directions
1. Define new project using `$ create-react-app grand-react-picture-gallery`
1. Define a hotel state ([index.js:6](src/index.js#L6))
1. Tell Monsieur Gustave to pass the hotel state as props to Page Wrapper ([index:39](src/index.js#L39))
1. Tell Page Wrapper to take photos from the props and to forward it to Section Main ([PageWrapper:7](src/PageWrapper.js#L7))
1. Tell Section Main to forward photos to Profile Photos ([SectionMain:7](src/SectionMain.js#L7))
1. Tell Profile Photos to send photos and the id of an album which needs to be displayed, to Display Album ([ProfilePhotos:7](src/ProfilePhotos.js#L7))
1. Tell Display Album to scan all photos and filter out those who belong to the albumId Profile Photos had chosen. Also, tell Display Album to take only photo URLs. ([DisplayAlbum:5](src/DisplayAlbum.js#L5))
1. Tell Display Album to send photos to Gallery Slides ([DisplayAlbum:11](src/DisplayAlbum.js#L11))
1. Tell Gallery Slides to set the picture number that needs to be displayed to 0 (as an initial state) ([GallerySlides:7](src/GallerySlides.js#L7))
1. Tell Gallery Slides to take from props the picture which is defined in the room state (`this.state.currentPhotoNum`) ([GallerySlides:29](src/GallerySlides.js#L29))
1. Tell Gallery Slides to also display two buttons: "next" and "previous" and to connect them with an `onClick` handler `this.changePhoto` ([GallerySlides:31](src/GallerySlides.js#L31))
1. Tell Gallery Slides to react on visitors click event so that he determines the picture order a visitor is trying to open based on `prev` or `next` direction. ([GallerySlides:15](src/GallerySlides.js#L15))
1. Tell Gallery Slides to update the room state when he finds out the correct picture order ([GallerySlides:22](src/GallerySlides.js#L22))
1. Open the hotel using `$ npm start`

![The Grand React](https://cdn-images-1.medium.com/max/1600/1*h4gDZeA-Vlb2e0nnDVgt-w.png)