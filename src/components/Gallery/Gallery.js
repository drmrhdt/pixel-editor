import React from "react";
import GalleryItem from "../GalleryItem";

export default function Gallery(props) {
  const { images } = props;
  return (
    <div>
      <h2>Gallery</h2>
      <ul>
        {images.map(image => (
          <GalleryItem image={image} />
        ))}
      </ul>
    </div>
  );
}
