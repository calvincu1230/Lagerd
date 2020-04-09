import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginFormContainer from "./sessionFormComponents/login_form_container";
import SignupFormContainer from "./sessionFormComponents/signup_form_container";
import SplashContainer from "./splash/splash_container";
import MainContent from "./main_content";
import { ProtectedRoute, AuthRoute } from "../utils/route_util";
import Footer from "./footer/footer";
import CheckinModal from "./checkins/checkin_modal";

const App = () => (
    <div className="app-main">
      <CheckinModal />
      <Switch> 
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/" component={SplashContainer} />
        <ProtectedRoute path="/" component={MainContent} /> 
      </Switch>
      <div className="footer-container">
        <Route path="/" component={Footer} />
      </div>
    </div>
  );
  
  export default App;
