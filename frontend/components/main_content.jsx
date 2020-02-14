import React from "react";
import { Switch } from "react-router-dom";
import { ProtectedRoute } from "../utils/route_util";
import HeaderContainer from "./header/header_container";
import BreweriesIndexContainer from "./breweries/breweries_index_container";
import BreweryShowContainer from "./breweries/brewery_show_container";
import BeersIndexContainer from "./beers/beer_index_container";
import BeerShowContainer from "./beers/beer_show_container";

const MainContent = () => (
  <div className="main-content-main">
    <ProtectedRoute path="/" component={HeaderContainer} />
    <div className="main-content-body">
      <Switch>
        {/* <ProtectedRoute path="/feed" component={BreweriesIndexContainer} /> */}
        <ProtectedRoute path="/breweries/:breweryId" component={BreweryShowContainer} />
        <ProtectedRoute path="/beers/:beerId" component={BeerShowContainer} />
        <ProtectedRoute path="/breweries" component={BreweriesIndexContainer} /> 
        <ProtectedRoute path="/beers" component={BeersIndexContainer} />  {/* TEMPORARY BREWERIES CONTAINER */}
      </Switch>
    </div>
  </div>
);

export default MainContent;