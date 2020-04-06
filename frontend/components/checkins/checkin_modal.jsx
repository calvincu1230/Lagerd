import React from 'react';
import { closeCheckinModal } from '../../actions/checkin_modal_actions';
import { createCheckin } from '../../actions/checkin_actions';
import { clearErrors } from "../../actions/session_actions";
import { connect } from 'react-redux';
import CheckinForm from "./checkin_form";
import { withRouter } from "react-router-dom";
import { fetchBeer } from '../../actions/beer_actions';

const CheckinModal = ({
  modal, 
  closeCheckinModal, 
  userId, 
  beerId,
  clearErrors,
  fetchBeer,
  createCheckin,
  errors
}) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'checkin':
      component = (
      <CheckinForm 
        beerId={beerId} 
        userId={userId} 
        clearErrors={clearErrors}
        closeCheckinModal={closeCheckinModal}
        createCheckin={createCheckin}
        errors={errors}
        fetchBeer={fetchBeer}
      />);
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeCheckinModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const pathArr = ownProps.location.pathname.split("/");
  return {
    modal: state.ui.modal,
    errors: state.errors.checkin,
    userId: state.session.currentUserId,
    beerId: pathArr[pathArr.length - 1]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeCheckinModal: () => dispatch(closeCheckinModal()),
    clearErrors: () => dispatch(clearErrors()),
    createCheckin: formData => dispatch(createCheckin(formData)),
    fetchBeer: beerId => dispatch(fetchBeer(beerId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckinModal));