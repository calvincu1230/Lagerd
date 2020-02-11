import React from "react";
import { Route } from "react-router-dom";
import LoginFormContainer from "./sessionFormComponents/login_form_container";
import SignupFormContainer from "./sessionFormComponents/signup_form_container";

const App = () => (
    <div>
        <header>
            <h1>Lagerd</h1>
        </header>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
  );
  
  export default App;