import React from "react";
import GalleryItem from "../GalleryItem";
import styles from "./Gallery.module.scss";

export default function Gallery(props) {
  const { images } = props;
  return (
    <div className={styles.gallery}>
      <h2>Gallery</h2>
      <ul className={styles.gallery__list}>
        {images.map(image => (
          <GalleryItem key={image.id} image={image} />
        ))}
      </ul>
    </div>
  );
}
