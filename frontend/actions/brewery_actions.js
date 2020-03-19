import * as BreweryUtil from "../utils/brewery_api_util";

export const RECEIVE_BREWERY = "RECEIVE_BREWERY";
export const RECEIVE_BREWERIES = "RECEIVE_BREWERIES";

const receiveBreweries = breweries => {
  return {
    type: RECEIVE_BREWERIES,
    breweries
  };
};

const receiveBrewery = payload => {
  return {
    type: RECEIVE_BREWERY,
    payload
  };
};

export const fetchBrewery = breweryId => dispatch => {
  return BreweryUtil.fetchBrewery(breweryId)
    .then(brewery => dispatch(receiveBrewery(brewery)));
};

export const fetchBreweries = () => dispatch => {
  return BreweryUtil.fetchBreweries()
    .then(breweries => dispatch(receiveBreweries(breweries)));
}