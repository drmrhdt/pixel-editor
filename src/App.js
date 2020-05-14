import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCanvasSize } from "./customHooks/useCanvasSize";
import { useSelector } from "react-redux";
import {
  getCollection,
  uploadImageToStorageAndFirestore,
} from "./store/actions/updateGalleryItems";
import { sortByDateAsc } from "./utilities/sorting";
import Canvas from "./components/Canvas";
import Toolbox from "./components/Toolbox";
import Button from "./components/Button";
import Gallery from "./components/Gallery";
import downloadIcon from "./img/download.png";
import styles from "./App.module.scss";

function App() {
  const [canvasRef, setCanvasRef] = useState(null);
  const [url, setUrl] = useState("#");
  const [prevLayersLength, setprevLayersLength] = useState(0);
  const [width, height] = useCanvasSize();
  const [layers, setLayers] = useState([{ zIndex: 0, canvasRef }]);
  const items = useSelector((state) => sortByDateAsc(state.items.items));
  const dispatch = useDispatch();

  const joinLayersIntoOne = () => {
    const curLayersLength = layers.length;
    console.log(
      `${curLayersLength} ${prevLayersLength} curLayersLength prevLayersLength`
    );

    const bottomLayer = layers[0];
    const baseCanvas = bottomLayer.canvasRef.current;
    const baseContext = bottomLayer.canvasRef.current.getContext("2d");

    if (prevLayersLength !== 0 || curLayersLength !== prevLayersLength) {
      layers.forEach((layer, id) => {
        if (id !== 0) {
          baseContext.drawImage(
            layer.canvasRef.current,
            0,
            0,
            baseCanvas.width,
            baseCanvas.height
          );
        }
      });
    }
    setprevLayersLength(curLayersLength);

    return baseCanvas;
  };

  const setUrlOnClick = () => {
    const canvasRef = joinLayersIntoOne();
    const imageBase64 = canvasRef.toDataURL("image/png");

    setUrl(imageBase64);

    return imageBase64;
  };

  useEffect(() => {
    dispatch(getCollection("images"));
  }, [dispatch]);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10000000000);
  };

  const uploadImageToStorage = () => {
    const imageBase64 = setUrlOnClick();
    const imageName = generateRandomNumber();

    dispatch(
      uploadImageToStorageAndFirestore(imageName, imageBase64, "images")
    );
  };

  // TO-DO don't keep it here!
  const cleanCanvas = () => {
    setLayers([]);
  };

  const addLayer = () => {
    setLayers((layers) => [
      ...layers,
      { zIndex: layers.length, canvasRef: canvasRef },
    ]);
  };

  return (
    <div className={styles.temp}>
      <div className={styles.app}>
        <section className={styles.app__sidebar}>
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
        </section>
        <section
          className={styles["app__canvas-container"]}
          onClick={addLayer}
          style={{ width: width, height: height }}
        >
          <div className={styles["app__canvas-bg-wrapper"]}>
            {layers.map((layer) => (
              <Canvas
                setLayers={setLayers}
                layers={layers}
                setCanvasRef={setCanvasRef}
                style={{ zIndex: layer.zIndex }}
                key={layer.zIndex}
              />
            ))}
          </div>
        </section>
        {/* TO-DO right sidebar with tools <section>right sidebar</section> */}
      </div>
      <Gallery items={items} />
    </div>
  );
}

export default App;
