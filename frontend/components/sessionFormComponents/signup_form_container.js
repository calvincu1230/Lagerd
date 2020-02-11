import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mSP = state => {
    return {
        errors: state.errors.session
    };
};

const mDP = dispatch => {
    return {
        action: formUser => dispatch(signup(formUser))
    };
};

export default connect(mSP, mDP)(SignupForm);