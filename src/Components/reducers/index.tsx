import { combineReducers } from "redux";
import lockWindows from "./lockwindows";
import showwinpopup from "./showwinpopup";
import showWinExplorer from "./showwinexplorer";
import showResume from "./showresume";
import showtrash from "./showtrash";
import showerrordiag from "./showerrordiag";
const rootReducer = combineReducers({
  lockWindows,
  showwinpopup,
  showWinExplorer,
  showResume,
  showtrash,
  showerrordiag,
});

export default rootReducer;
