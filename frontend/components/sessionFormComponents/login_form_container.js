import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, loginDemoUser } from "../../actions/session_actions";

const mSP = state => {
    return {
        errors: state.errors.session,
        formType: "Log In"
    };
};

const mDP = dispatch => {
    return {
        action: formUser => dispatch(login(formUser)),
        loginDemoUser: () => dispatch(loginDemoUser())
    };
};

export default connect(mSP, mDP)(SessionForm);