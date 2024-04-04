import { combineReducers } from "redux";
import lockWindows from "./lockwindows";
import showwinpopup from "./showwinpopup";
import showWinExplorer from "./showwinexplorer";
import showResume from "./showresume";
const rootReducer = combineReducers({
  lockWindows,
  showwinpopup,
  showWinExplorer,
  showResume,
});

export default rootReducer;
