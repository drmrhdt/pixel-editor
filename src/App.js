import React, { useState, useEffect } from "react";
import Canvas from "./components/Canvas";
import Toolbox from "./components/Toolbox";
import Button from "./components/Button";
import Gallery from "./components/Gallery";
import styles from "./App.module.scss";

import * as firebase from "firebase";
import "./firebase/firebaseConfig";
const storage = firebase.storage();

function App() {
  const [canvasRef, setCanvasRef] = useState(null);
  const [images, setImages] = useState([]);
  const [url, setUrl] = useState("#");

  const downloadImage = () => {
    if (canvasRef) {
      setUrl(canvasRef.current.toDataURL("image/png"));
    }
  };

  // useEffect(() => {
  //   setImages(storage.ref("img").listAll());
  //   console.log(images);

  //   // Create a reference under which you want to list
  //   var listRef = storage.child("img");

  //   // Find all the prefixes and items.
  //   listRef
  //     .listAll()
  //     .then(function(res) {
  //       res.prefixes.forEach(function(folderRef) {
  //         // All the prefixes under listRef.
  //         // You may call listAll() recursively on them.
  //       });
  //       res.items.forEach(function(itemRef) {
  //         console.log(itemRef);
  //       });
  //     })
  //     .catch(function(error) {
  //       // Uh-oh, an error occurred!
  //     });
  // }, [images]);

  const uploadImageToStorage = () => {
    if (canvasRef) {
      setUrl(canvasRef.current.toDataURL("image/png"));
      const storageRef = storage.ref(
        `/${Math.floor(Math.random() * 10000000000)}.png`
      );
      const uploadImageTask = storageRef.putString(
        canvasRef.current.toDataURL("image/png"),
        "data_url"
      );
      uploadImageTask.on(
        "state_changed",
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log("Upload is running");
              break;
            default:
              console.log("default");
          }
        },
        error => {
          console.log(error);
        },
        () => {
          uploadImageTask.snapshot.ref
            .getDownloadURL()
            .then(function(downloadURL) {
              console.log("File available at", downloadURL);
            });
        }
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
              Save to gallery
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
                Download
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
