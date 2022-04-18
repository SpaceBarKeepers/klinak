import React from 'react';
import ImageGallery from 'react-image-gallery';
import gallery1 from '../../images/galerie1.jpeg';
import gallery2 from '../../images/galerie2.jpeg';
import gallery3 from '../../images/galerie3.jpeg';
import gallery4 from '../../images/galerie4.jpeg';
import gallery5 from '../../images/galerie5.jpeg';
import gallery6 from '../../images/galerie6.jpeg';
import gallery7 from '../../images/galerie7.jpeg';
import gallery8 from '../../images/galerie8.jpeg';

const images = [
  {
    original: gallery1,
    thumbnail: gallery1,
  },
  {
    original: gallery2,
    thumbnail: gallery2,
  },
  {
    original: gallery3,
    thumbnail: gallery3,
  },
  {
    original: gallery4,
    thumbnail: gallery4,
  },
  {
    original: gallery5,
    thumbnail: gallery5,
  },
  {
    original: gallery6,
    thumbnail: gallery6,
  },
  {
    original: gallery7,
    thumbnail: gallery7,
  },
  {
    original: gallery8,
    thumbnail: gallery8,
  },
];

function Gallery() {
  return (
    <div className="galleryWrapper">
      <ImageGallery items={images} showPlayButton={false} />
    </div>
  );
}

export default Gallery;
