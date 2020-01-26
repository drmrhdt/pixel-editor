import React from "react";
import Button from "../Button";
import unicodeIcons from "../../styles/unicodeIcons";
import styles from "./GalleryItem.module.scss";

export default function GalleryItem({ url, date, rating }) {
  const fromTimestamp = new Date(date);
  const time = `${fromTimestamp.getHours()}:${
    fromTimestamp.getMinutes() < 10
      ? "0" + fromTimestamp.getMinutes()
      : fromTimestamp.getMinutes()
  }`;
  const day =
    fromTimestamp.getDate() < 10
      ? "0" + fromTimestamp.getDate()
      : fromTimestamp.getDate();
  const month = fromTimestamp.getMonth();
  const monthForTime = month + 1 < 10 ? "0" + (month + 1) : month + 1;
  const year = fromTimestamp.getFullYear();
  const createdAt = `${day}.${monthForTime}.${year}`;

  return (
    <div className={styles["gallery-item"]}>
      <img
        className={styles["gallery-item__image"]}
        src={url}
        alt="gallery item"
      />
      <div className={styles["gallery-item__content"]}>
        <div className={styles["gallery-item__created-at-date"]}>
          <span className={styles["gallery-item__time"]}>{time}</span>
          <span className={styles["gallery-item__date"]}>{createdAt}</span>
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
