import React from "react";
import { Route, Switch } from "react-router-dom";
// import LoginFormContainer from "./sessionFormComponents/login_form_container";
// import SignupFormContainer from "./sessionFormComponents/signup_form_container";
// import SplashContainer from "./splash/splash_container";
import HeaderContainer from "./header/header_container";
import BreweriesIndexContainer from "./breweries/breweries_index_container";
import { ProtectedRoute, AuthRoute } from "../utils/route_util";
import BreweryShowContainer from "./breweries/brewery_show_container";

const MainContent = () => (
  <div className="main-content-main">
    <ProtectedRoute path="/" component={HeaderContainer} />
    <div className="main-content-body">
      <Switch>
        <ProtectedRoute path="/feed" component={BreweriesIndexContainer} />  {/* TEMPORARY BREWERIES CONTAINER */}
        <ProtectedRoute path="/breweries/:breweryId" component={BreweryShowContainer} />
      </Switch>
    </div>
  </div>
);

export default MainContent;