import { getCollection } from "../../utilities/firestore";
import "../../firebase/firebaseConfig";
import {
  FETCH_COLLECTION_BEGIN,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE
} from "../constants";

export function getCollectionAsync(collection) {
  return async dispatch => {
    dispatch({ type: FETCH_COLLECTION_BEGIN });
    try {
      const payload = await getCollection(collection);
      dispatch({ type: FETCH_COLLECTION_SUCCESS, payload });
    } catch (error) {
      dispatch({ type: FETCH_COLLECTION_FAILURE, payload: error });
    }
  };
}
