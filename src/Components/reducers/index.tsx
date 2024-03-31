import { combineReducers } from "redux";
import lockWindows from "./lockwindows";
import showwinpopup from "./showwinpopup";
import showWinExplorer from "./showwinexplorer";
const rootReducer = combineReducers({
  lockWindows,
  showwinpopup,
  showWinExplorer,
});

export default rootReducer;
