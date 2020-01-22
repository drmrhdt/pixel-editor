import React from "react";

export default function GalleryItem(props) {
  const { url } = props.image;

  return (
    <div>
      <img src={url} alt="gallery item" />
    </div>
  );
}
