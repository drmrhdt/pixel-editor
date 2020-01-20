import React, { useState, useEffect } from "react";
import Canvas from "./components/Canvas";
import Toolbox from "./components/Toolbox";
import Button from "./components/Button";
import styles from "./App.module.scss";

function App() {
  const [canvasRef, setCanvasRef] = useState(null);
  const [url, setUrl] = useState("#");

  const getImage = () => {
    if (canvasRef) {
      setUrl(canvasRef.current.toDataURL("image/png"));
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.app__box}>
        <h1 className={styles.app__title}>Zen Drawing App</h1>
        <Toolbox className={styles.app__toolbox} />
        <div className={styles["app__buttons-group"]}>
          <Button className={styles["app__button-save-to-galery"]}>
            Save to gallery
          </Button>
          <Button className={styles["app__button-download"]} onClick={getImage}>
            <a
              className={styles.app__link}
              href={url !== "#" ? url : "#"}
              download="zen_drawing.png"
            >
              Download
            </a>
          </Button>
        </div>
      </div>
      <Canvas setCanvasRef={setCanvasRef} />
    </div>
  );
}

export default App;
