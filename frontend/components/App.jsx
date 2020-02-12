import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./sessionFormComponents/login_form_container";
import SignupFormContainer from "./sessionFormComponents/signup_form_container";
import HeaderContainer from "./header/header_container";
import { ProtectedRoute, AuthRoute } from "../utils/route_util";

const App = () => (
    <div>
      <Switch>
        <Route exact path="/" component={HeaderContainer} />
        <ProtectedRoute path="/feed" component={HeaderContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>
  );
  
  export default App;
