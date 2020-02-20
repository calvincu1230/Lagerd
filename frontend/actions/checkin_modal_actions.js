export const OPEN_CHECKIN_MODAL = 'OPEN_CHECKIN_MODAL';
export const CLOSE_CHECKIN_MODAL = 'CLOSE_CHECKIN_MODAL';

export const openCheckinModal = modal => {
  return {
    type: OPEN_CHECKIN_MODAL,
    modal
  };
};

export const closeCheckinModal = () => {
  return {
    type: CLOSE_CHECKIN_MODAL
  };
};