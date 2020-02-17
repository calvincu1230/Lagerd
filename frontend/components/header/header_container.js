import { connect } from "react-redux";
import Header from "./header";
import { logout } from "../../actions/session_actions";

const mSP = state => {
    return {
        currentUser: state.session.currentUserId,
        user: state.entities.users[state.session.currentUserId]
    };
};

const mDP = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mSP, mDP)(Header);