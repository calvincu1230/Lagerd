import * as BeerUtil from "../utils/beer_api_util";

export const RECEIVE_BEER = "RECEIVE_BEER";
export const RECEIVE_BEERS = "RECEIVE_BEERS";
export const RECEIVE_BEER_ERRORS = "RECEIVE_BEER_ERRORS";

const receiveBeers = beers => {
  return {
    type: RECEIVE_BEERS,
    beers
  }; // NOT SURE IF I WILL NEED THIS LATER AS BEERS ARE NESTED IN BREWERIES
};

const receieveBeerErrors = errors => {
  return {
    type: RECEIVE_BEER_ERRORS,
    errors
  };
};

const receiveBeer = beer => {
  return {
    type: RECEIVE_BEER,
    beer
  };
};

export const fetchBeer = beerId => dispatch => {
  return BeerUtil.fetchBeer(beerId)
    .then(beer => dispatch(receiveBeer(beer)));
};

export const fetchBeers = () => dispatch => {
  return BeerUtil.fetchBeers()
    .then(beers => {
      // debugger
      return dispatch(receiveBeers(beers))
    }
)}; // NOT SURE IF I WILL NEED THIS LATER AS BEERS ARE NESTED IN BREWERIES

export const updateBeer = beer => dispatch => {
  return BeerUtil.updateBeer(beer)
    .then(beer => dispatch(receiveBeer(beer)), 
    errors => {
      debugger
      return dispatch(receieveBeerErrors(errors.responseJSON))
    });
};

export const createBeer = beer => dispatch => {
  return BeerUtil.createBeer(beer)
    .then(beer => dispatch(receiveBeers(beer)), 
    errors => dispatch(receieveBeerErrors(errors.responseJSON)));
};