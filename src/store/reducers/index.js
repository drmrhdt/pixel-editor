import { combineReducers } from "redux";
import { selectColorReducer } from "./selectColorReducer";
import { selectSizeReducer } from "./selectSizeReducer";
import { selectLineJoinReducer } from "./selectLineJoinReducer";
import { selectToolReducer } from "./selectToolReducer";
import { selectFigureReducer } from "./selectFigureReducer";
import { selectPatternReducer } from "./selectPatternReducer";
import { selectShadowParameterReducer } from "./selectShadowParameterReducer";
import { selectOpacityReducer } from "./selectOpacityReducer";
import { getGalleryItemsReducer } from "./getGalleryItemsReducer";

export const rootReducer = combineReducers({
  colorSelect: selectColorReducer,
  selectSize: selectSizeReducer,
  selectLineJoin: selectLineJoinReducer,
  selectTool: selectToolReducer,
  selectFigure: selectFigureReducer,
  selectPattern: selectPatternReducer,
  selectShadowParameter: selectShadowParameterReducer,
  selectOpacity: selectOpacityReducer,
  items: getGalleryItemsReducer
});
