import React, { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";
import { getCollectionAsync } from "./store/actions/getGalleryItems";
import { uploadImageToStorageAndFirestore } from "./utilities/storage";
import Canvas from "./components/Canvas";
import Toolbox from "./components/Toolbox";
import Button from "./components/Button";
import Gallery from "./components/Gallery";
import downloadIcon from "./img/download.png";
import styles from "./App.module.scss";

function App({ getCollectionAsync }) {
  const sortByDate = unsortedData => {
    return unsortedData.sort((a, c) => a.date - c.date);
  };

  const [canvasRef, setCanvasRef] = useState(null);
  const [url, setUrl] = useState("#");
  const items = useSelector(state => sortByDate(state.items.items));

  const setUrlOnClick = () => {
    if (canvasRef) {
      setUrl(canvasRef.current.toDataURL("image/png"));
    }
  };

  useEffect(() => {
    getCollectionAsync("images");
  }, [getCollectionAsync]);

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

  return (
    <div className={styles.temp}>
      <div className={styles.app}>
        <div className={styles.app__sidebar}>
          <h1 className={styles.app__logo}>Zen Drawing App</h1>
          <Toolbox className={styles.app__toolbox} />
          <div className={styles["app__buttons-group"]}>
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
      <Gallery images={items} />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getCollectionAsync: collection => dispatch(getCollectionAsync(collection))
  };
};

export default connect(null, mapDispatchToProps)(App);
