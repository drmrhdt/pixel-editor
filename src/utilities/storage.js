import * as firebase from "firebase";
import "../firebase/firebaseConfig";
import { storage } from "../firebase/firebaseConfig";
import { addItem } from "./firestore";

export const uploadImageToStorageAndFirestore = (
  imageName,
  url,
  collection
) => {
  const storageRef = storage.ref(`/${imageName}.png`);
  const uploadImageTask = storageRef.putString(url, "data_url");
  uploadImageTask.on(
    "state_changed",
    snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          console.log("Upload is paused");
          break;
        case firebase.storage.TaskState.RUNNING:
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
      uploadImageTask.snapshot.ref.getDownloadURL().then(downloadURL => {
        console.log("File available at", downloadURL);
        addItem(downloadURL, collection);
      });
    }
  );
};
