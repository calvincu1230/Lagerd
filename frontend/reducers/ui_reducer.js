import { combineReducers } from "redux";
import modalCheckinReducer from "./modal_checkin_reducer";

const uiReducer = combineReducers({
  modal: modalCheckinReducer
});

export default uiReducer;