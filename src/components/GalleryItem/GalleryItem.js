import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  getTimeFromTimestamp,
  getDateFromTimestamp
} from "../../utilities/parsers";
import { increaseRating } from "../../store/actions/updateGalleryItems";
import Button from "../Button";
import UnicodeIcons from "../UnicodeIcons";
import styles from "./GalleryItem.module.scss";

const useThunkDispatch = () => {
  const dispatch = useDispatch();
  return dispatch;
};

export default function GalleryItem({
  item: { id },
  item: { url },
  item: { date },
  item: { rating }
}) {
  const fromTimestamp = new Date(date);
  const createdAtTime = getTimeFromTimestamp(fromTimestamp);
  const createdAtDate = getDateFromTimestamp(fromTimestamp);

  const dispatch = useThunkDispatch();

  const likeItem = () => {
    dispatch(increaseRating({ id, rating: rating + 1 }));
  };

  const deleteItem = () => {

  }

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
        <div className={styles["gallery-item__buttons"]}>
          {rating}
          <Button
            className={styles["gallery-item__icon"]}
            onClick={likeItem}
          >
            <UnicodeIcons icon="filledHeart" />
          </Button>
          <Button
            className={styles["gallery-item__icon"]}
            onClick={deleteItem}
          >
            <UnicodeIcons icon="basket" />
          </Button>
        </div>
      </div>
    </div>
  );
}

GalleryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired
  })
};
