import React from "react";
import { Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "../utils/route_util";
import HeaderContainer from "./header/header_container";
// import BreweriesBeerIndexContainer from "./breweries/brewery_beer_index_container";
import BreweriesIndexContainer from "./breweries/breweries_index_container";
import BreweryBeerShow from "./breweries/brewery_beer_show";
import BeersIndexContainer from "./beers/beer_index_container";
import BeerShowContainer from "./beers/beer_show_container";
import EditBeerFormContainer from "./beers/edit_beer_form_container";
import CreateBeerFormContainer from "./beers/create_beer_form_container";

const MainContent = () => (
  <div className="main-content-main">
    <ProtectedRoute path="/" component={HeaderContainer} />
    <div className="main-content-body">
      <Switch>
        {/* <ProtectedRoute path="/feed" component={BreweriesIndexContainer} /> */}
        <ProtectedRoute exact path="/beers/new" component={CreateBeerFormContainer} />
        <Route exact path="/breweries/:breweryId/beers/:beerId/edit" component={EditBeerFormContainer} />
        <Route exact path="/breweries/:breweryId/beers/:beerId" component={BeerShowContainer} />
        <Route exact path="/breweries/:breweryId/beers" component={BreweryBeerShow} />
        <ProtectedRoute path="/breweries" component={BreweriesIndexContainer} /> 
        {/* <Route path="/beers/:beerId" component={BeerShowContainer} /> */}
        <ProtectedRoute path="/beers" component={BeersIndexContainer} />
        <ProtectedRoute path="/" component={BreweriesIndexContainer} />
      </Switch>
    </div>
  </div>
);

export default MainContent;