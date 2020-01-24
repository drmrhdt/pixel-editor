import React from "react";
import Button from "../Button";
import styles from "./GalleryItem.module.scss";

export default function GalleryItem(props) {
  const { url, date, rating } = props.image;
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
        <div>
          {time}
          <br />
          {createdAt}
        </div>
        <div className={styles["gallery-item__rating"]}>
          {rating}
          <Button>Like</Button>
        </div>
      </div>
    </div>
  );
}
