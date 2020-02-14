import * as BreweryUtil from "../utils/brewery_api_util";

export const RECEIVE_BREWERY = "RECEIVE_BREWERY";
export const RECEIVE_BREWERIES = "RECEIVE_BREWERIES";

const receiveBreweries = breweries => {
  return {
    type: RECEIVE_BREWERIES,
    breweries
  };
};

const receiveBrewery = brewery => {
  return {
    type: RECEIVE_BREWERY,
    brewery
  };
};

export const fetchBrewery = breweryId => dispatch => {
  debugger
  return BreweryUtil.fetchBrewery(breweryId)
    .then(brewery => dispatch(receiveBrewery(brewery)));
};

export const fetchBreweries = () => dispatch => {
  return BreweryUtil.fetchBreweries()
    .then(breweries => dispatch(receiveBreweries(breweries)));
}