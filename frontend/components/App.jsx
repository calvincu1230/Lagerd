import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./sessionFormComponents/login_form_container";
import SignupFormContainer from "./sessionFormComponents/signup_form_container";
import SplashContainer from "./splash/splash_container";
import MainContent from "./main_content";
import { ProtectedRoute, AuthRoute } from "../utils/route_util";
import Footer from "./footer/footer";

const App = () => (
    <div className="app-main">
      {/* <ProtectedRoute path="/" component={HeaderContainer} /> */}
      <Switch> 
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/" component={SplashContainer} />
        <ProtectedRoute path="/" component={MainContent} />  {/* TEMPORARY HEADER CONTAINER */}
      </Switch>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
  
  export default App;
