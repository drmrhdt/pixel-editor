import React, { useState, useEffect } from "react";
import { getCollection } from "./utilities/firestore";
import { uploadImageToStorageAndFirestore } from "./utilities/storage";
import Canvas from "./components/Canvas";
import Toolbox from "./components/Toolbox";
import Button from "./components/Button";
import Gallery from "./components/Gallery";
import downloadIcon from "./img/download.png";
import styles from "./App.module.scss";

function App() {
  const [canvasRef, setCanvasRef] = useState(null);
  const [images, setImages] = useState([]);
  const [url, setUrl] = useState("#");

  const downloadImage = () => {
    if (canvasRef) {
      setUrl(canvasRef.current.toDataURL("image/png"));
    }
  };

  useEffect(() => {
    const getItems = async () => {
      const items = await getCollection("images");
      setImages(items);
    };
    getItems();
  }, []);

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
        <div className={styles.app__box}>
          <h1 className={styles.app__title}>Zen Drawing App</h1>
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
              onClick={downloadImage}
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
      <Gallery images={images} />
    </div>
  );
}

export default App;
