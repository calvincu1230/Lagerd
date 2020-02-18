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

export const createBeer = (formData) => {
  return $.ajax({
    url: "/api/beers",
    method: "POST",
    data: formData,
    contentType: false,
    processData: false
  });
};

export const updateBeer = (beer) => {
  debugger
  return $.ajax({
    url: `/api/beers/${beer.id}`,
    method: "PATCH",
    data: formData,
    contentType: false,
    processData: false
  });
};

export const STYLES = ['Pale Ale', 'Wheat', 'IPA', 'Stout', 'Sour', 'Pilsner', 'IPL', 'Brown Ale', 'Amber Ale', 'Helles Lager']