import { combineReducers } from "redux";
import lockWindows from "./lockwindows";
import showwinpopup from "./showwinpopup";
import showWinExplorer from "./showwinexplorer";
import showResume from "./showresume";
import showtrash from "./showtrash";
const rootReducer = combineReducers({
  lockWindows,
  showwinpopup,
  showWinExplorer,
  showResume,
  showtrash,
});

export default rootReducer;
