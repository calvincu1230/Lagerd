export const fetchBeer = beerId => {
  return $.ajax({
    url: `/api/beers/${beerId}`,
    method: "GET"
  });
};

export const fetchBeers = (page) => {
  return $.ajax({
    url: "/api/beers",
    method: "GET",
    data: { page }
  });
};

export const createBeer = (beer) => {
  return $.ajax({
    url: "/api/beers",
    method: "POST",
    data: { beer }
  });
};

export const updateBeer = (beer) => {
  return $.ajax({
    url: `/api/beers/${beer.id}`,
    method: "PATCH",
    data: { beer }
  });
};

export const STYLES = ['Pale Ale', 'Wheat', 'IPA', 'Stout', 'Sour', 'Pilsner', 'IPL', 'Brown Ale', 'Amber Ale', 'Helles Lager']