import { OPEN_CHECKIN_MODAL, CLOSE_CHECKIN_MODAL } from '../actions/checkin_modal_actions';

const modalCheckinReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_CHECKIN_MODAL:
      return action.modal;
    case CLOSE_CHECKIN_MODAL:
      return null;
    default:
      return state;
  }
}
export default modalCheckinReducer;