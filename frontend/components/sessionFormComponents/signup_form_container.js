import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";

const mSP = state => {
    return {
        errors: state.errors.session,
        formType: "Sign Up"
    };
};

const mDP = dispatch => {
    return {
        action: formUser => dispatch(signup(formUser))
    };
};

export default connect(mSP, mDP)(SessionForm);