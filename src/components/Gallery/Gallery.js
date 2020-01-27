import React from "react";
import GalleryItem from "../GalleryItem";
import styles from "./Gallery.module.scss";

export default function Gallery({ items }) {
  return (
    <div className={styles.gallery}>
      <h2 className={styles.gallery__title}>Gallery</h2>
      <ul className={styles.gallery__list}>
        {items.map(item => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
