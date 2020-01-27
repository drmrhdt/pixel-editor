import React from "react";
import {
  getTimeFromTimestamp,
  getDateFromTimestamp
} from "../../utilities/parsers";
import Button from "../Button";
import unicodeIcons from "../../styles/unicodeIcons";
import styles from "./GalleryItem.module.scss";

export default function GalleryItem({
  item: { url },
  item: { date },
  item: { rating }
}) {
  const fromTimestamp = new Date(date);
  const createdAtTime = getTimeFromTimestamp(fromTimestamp);
  const createdAtDate = getDateFromTimestamp(fromTimestamp);

  return (
    <div className={styles["gallery-item"]}>
      <img
        className={styles["gallery-item__image"]}
        src={url}
        alt="gallery item"
      />
      <div className={styles["gallery-item__content"]}>
        <div className={styles["gallery-item__created-at-date"]}>
          <span className={styles["gallery-item__time"]}>{createdAtTime}</span>
          <span className={styles["gallery-item__date"]}>{createdAtDate}</span>
        </div>
        <div className={styles["gallery-item__rating"]}>
          {rating}
          <Button className={styles["gallery-item__icon-like"]}>
            {unicodeIcons.filledHeart}
          </Button>
        </div>
      </div>
    </div>
  );
}
