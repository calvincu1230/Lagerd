import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./sessionFormComponents/login_form_container";
import SignupFormContainer from "./sessionFormComponents/signup_form_container";
import SplashContainer from "./splash/splash_container";
import HeaderContainer from "./header/header_container";
import { ProtectedRoute, AuthRoute } from "../utils/route_util";
import Footer from "./footer/footer";

const App = () => (
    <div className="app-main">
      {/* <ProtectedRoute path="/" component={HeaderContainer} /> */}
      <Switch>
        <AuthRoute exact path="/" component={SplashContainer} />
        <ProtectedRoute path="/feed" component={HeaderContainer} />  {/* TEMPORARY HEADER CONTAINER */}
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
      </Switch>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
  
  export default App;
