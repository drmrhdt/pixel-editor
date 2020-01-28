// import { useDispatch } from "react-redux";
import "../../firebase/firebaseConfig";
import { firestore, storage } from "../../firebase/firebaseConfig";
import * as firebase from "firebase";
import {
  FETCH_COLLECTION_BEGIN,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE,
  UPLOAD_IMAGE_BEGIN,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
  ADD_COLLECTION_ITEM_BEGIN,
  ADD_COLLECTION_ITEM_SUCCESS,
  ADD_COLLECTION_ITEM_FAILURE,
  INCREASE_RATING,
  DELETE_ITEM
} from "../constants";

// const useThunkDispatch = () => {
//   const dispatch = useDispatch();
//   return dispatch;
// };

export const uploadImageToStorageAndFirestore = (
  imageName,
  url,
  collection
) => {
  // const dispatch = useDispatch();
  return async dispatch => {
    const storageRef = storage.ref(`/${imageName}.png`);
    const uploadImageTask = storageRef.putString(url, "data_url");
    dispatch({ type: UPLOAD_IMAGE_BEGIN });
    uploadImageTask.on(
      "state_changed",
      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
        dispatch({ type: UPLOAD_IMAGE_FAILURE });
      },
      async () => {
        const downloadedUrl = await uploadImageTask.snapshot.ref.getDownloadURL();
        console.log(`Image is available at ${downloadedUrl}`);
        dispatch({ type: UPLOAD_IMAGE_SUCCESS });
        const item = {
          date: +new Date(),
          url: downloadedUrl,
          rating: 0
        };
        try {
          dispatch({ type: ADD_COLLECTION_ITEM_BEGIN });
          const { id } = await firestore.collection(collection).add(item);
          console.log("Document written with ID: ", id);
          dispatch({
            type: ADD_COLLECTION_ITEM_SUCCESS,
            payload: { ...item, id }
          });
        } catch (error) {
          console.error("Error adding document: ", error);
          dispatch({ type: ADD_COLLECTION_ITEM_FAILURE, payload: error });
        }
      }
    );
  };
};

export function getCollection(collection) {
  return async dispatch => {
    dispatch({ type: FETCH_COLLECTION_BEGIN });
    try {
      const snapshot = await firestore.collection(collection).get();
      const payload = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      dispatch({ type: FETCH_COLLECTION_SUCCESS, payload });
    } catch (error) {
      dispatch({ type: FETCH_COLLECTION_FAILURE, payload: error });
    }
  };
}

export function increaseRating(payload) {
  return async dispatch => {
    firestore
      .collection("images")
      .doc(payload.id)
      .update({
        rating: payload.rating
      })
      .then(function() {
        console.log("Document successfully updated!");
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
    dispatch({ type: INCREASE_RATING, payload });
  };
}

export function deleteItem(payload) {
  return async dispatch => {
    firestore
      .collection("images")
      .doc(payload)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
    dispatch({ type: DELETE_ITEM, payload });
  };
}
