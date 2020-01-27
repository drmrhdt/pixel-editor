import React from "react";
import PropTypes from "prop-types";
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

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      date: PropTypes.number.isRequired
    })
  ).isRequired
};
