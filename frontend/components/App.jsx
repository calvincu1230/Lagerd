import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./sessionFormComponents/login_form_container";
import SignupFormContainer from "./sessionFormComponents/signup_form_container";
import SplashContainer from "./splash/splash_container";
import HeaderContainer from "./header/header_container";
import { ProtectedRoute, AuthRoute } from "../utils/route_util";

const App = () => (
    <div>
      <Switch>
        <AuthRoute exact path="/" component={SplashContainer} />
        <ProtectedRoute path="/feed" component={HeaderContainer} />  {/* TEMPORARY HEADER CONTAINER */}
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>
  );
  
  export default App;
