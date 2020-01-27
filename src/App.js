import React, { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";
import {
  getCollection,
  uploadImageToStorageAndFirestore
} from "./store/actions/updateGalleryItems";
import Canvas from "./components/Canvas";
import Toolbox from "./components/Toolbox";
import Button from "./components/Button";
import Gallery from "./components/Gallery";
import downloadIcon from "./img/download.png";
import styles from "./App.module.scss";

function App({ getCollection, uploadImageToStorageAndFirestore }) {
  const sortByDateAsc = unsortedData => {
    return unsortedData.sort((a, b) => a.date - b.date);
  };

  const [canvasRef, setCanvasRef] = useState(null);
  const [url, setUrl] = useState("#");
  const items = useSelector(state => sortByDateAsc(state.items.items));

  const setUrlOnClick = () => {
    if (canvasRef) {
      setUrl(canvasRef.current.toDataURL("image/png"));
    }
  };

  useEffect(() => {
    getCollection("images");
  }, [getCollection]);

  const uploadImageToStorage = () => {
    if (canvasRef) {
      setUrl(canvasRef.current.toDataURL("image/png"));
      const imageName = Math.floor(Math.random() * 10000000000);
      uploadImageToStorageAndFirestore(
        imageName,
        canvasRef.current.toDataURL("image/png"),
        "images"
      );
    }
  };

  const cleanCanvas = () => {
    const canvas = canvasRef.current.getContext("2d");
    const width = document.documentElement.clientWidth - 220;
    const height = document.documentElement.clientHeight;
    canvas.clearRect(0, 0, width, height);
  };

  return (
    <div className={styles.temp}>
      <div className={styles.app}>
        <div className={styles.app__sidebar}>
          <h1 className={styles.app__logo}>Zen Drawing App</h1>
          <Toolbox className={styles.app__toolbox} />
          <div className={styles["app__buttons-group"]}>
            <Button onClick={cleanCanvas}>Clean</Button>
            <Button
              className={styles["app__button-save-to-galery"]}
              onClick={uploadImageToStorage}
            >
              Add to gallery
            </Button>
            <Button
              className={styles["app__button-download"]}
              onClick={setUrlOnClick}
            >
              <a
                className={styles.app__link}
                href={url !== "#" ? url : "#"}
                download="zen_drawing.png"
              >
                <img
                  className={styles["app__button-download-image"]}
                  src={downloadIcon}
                  alt="download button"
                />
              </a>
            </Button>
          </div>
        </div>
        <Canvas setCanvasRef={setCanvasRef} />
      </div>
      <Gallery items={items} />
    </div>
  );
}

const mapDispatchToProps = {
  getCollection,
  uploadImageToStorageAndFirestore
};

export default connect(null, mapDispatchToProps)(App);
