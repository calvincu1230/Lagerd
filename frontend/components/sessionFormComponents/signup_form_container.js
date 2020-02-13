import { connect } from "react-redux";
import { signup, receieveErrors, clearErrors } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mSP = (state, ownProps)=> {
    return {
        errors: state.errors.session
    };
};

const mDP = dispatch => {
    return {
        action: formUser => dispatch(signup(formUser)),
        dispatchErrors: errors => dispatch(receieveErrors(errors)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mSP, mDP)(SignupForm);