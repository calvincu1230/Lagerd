import React from "react";
import { Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "../utils/route_util";
import HeaderContainer from "./header/header_container";
import BreweriesIndexContainer from "./breweries/breweries_index_container";
import BreweryBeerShow from "./breweries/brewery_beer_show";
import BeersIndexContainer from "./beers/beer_index_container";
import BeerCheckinShow from "./beers/beer_checkin_show";
import EditBeerFormContainer from "./beers/edit_beer_form_container";
import CreateBeerFormContainer from "./beers/create_beer_form_container";
import BreweryCheckinShow from "./breweries/brewery_checkin_show";
import CheckinsIndexContainer from "./checkins/checkins_index_container";
import CheckinShowContainer from "./checkins/checkin_show_container";
import UserShowContainer from "./user/user_show_container";

const MainContent = () => (
  <div className="main-content-main">
    <ProtectedRoute path="/" component={HeaderContainer} />
    <div className="main-content-body">
      <Switch>
        <ProtectedRoute path="/feed" component={CheckinsIndexContainer} />
        <ProtectedRoute exact path="/beers/new" component={CreateBeerFormContainer} />
        <Route exact path="/breweries/:breweryId/beers/:beerId/edit" component={EditBeerFormContainer} />
        <Route exact path="/breweries/:breweryId/beers/:beerId" component={BeerCheckinShow} />
        <Route exact path="/breweries/:breweryId/beers" component={BreweryBeerShow} />
        <Route exact path="/breweries/:breweryId" component={BreweryCheckinShow} />
        <Route exact path="/checkins/:checkinId" component={CheckinShowContainer} />
        <Route exact path="/users/:userId" component={UserShowContainer} />
        <ProtectedRoute path="/breweries" component={BreweriesIndexContainer} /> 
        <ProtectedRoute path="/beers" component={BeersIndexContainer} />
        <ProtectedRoute path="/" component={BreweriesIndexContainer} />
      </Switch>
    </div>
  </div>
);

export default MainContent;