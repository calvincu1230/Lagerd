import React from "react";
import SiteFeatures from "./site_features";
import { Link } from "react-router-dom";
import LoginFormContainer from "../sessionFormComponents/login_form_container";
import Footer from "../footer/footer";

class Splash extends React.Component {


  render() {
    return (
      <div className="splash-main">
        <div className="login-signup-upper">
          <Link to="/login" className="splash-login splash-btn">SIGN IN</Link>
          <Link to="/signup" className="splash-signup splash-btn">CREATE AN ACCOUNT</Link>
        </div>
        <LoginFormContainer />
        <SiteFeatures />
      </div>
    )
  }
}

export default Splash;