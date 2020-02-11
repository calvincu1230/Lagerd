import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";

const mSP = state => {
    return {
        errors: state.errors.session,
        formType: "Log In"
    };
};

const mDP = dispatch => {
    return {
        action: formUser => dispatch(login(formUser))
    };
};

export default connect(mSP, mDP)(SessionForm);