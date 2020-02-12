import React from "react";
import { Route } from "react-router-dom";
import LoginFormContainer from "./sessionFormComponents/login_form_container";
import SignupFormContainer from "./sessionFormComponents/signup_form_container";
import HeaderContainer from "./header/header_container";
import { ProtectedRoute, AuthRoute } from "../utils/route_util";

const App = () => (
    <div>
        <Route exact path="/" component={HeaderContainer} />
        <ProtectedRoute path="/feed" component={HeaderContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
  );
  
  export default App;

//   <Route path="/" component={NavBarContainer} />
//     <Route exact path="/" component={Home} />
//     <ProtectedRoute path="/chirps" component={ChirpIndexContainer} />
//     <AuthRoute path="/signup" component={SignupContainer} />