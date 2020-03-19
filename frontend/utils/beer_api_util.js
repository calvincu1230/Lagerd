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

export const fetchBreweryBeers = (breweryId) => {
  return $.ajax({
    url: `/api/breweries/${breweryId}/beers`,
    method: "GET",
    // data: { page }
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

export const updateBeer = (formData) => { // gets specific id from formData to go to right route, was coming up undefined and erroring out
  return $.ajax({
    url: `/api/beers/${formData.get("beer[id]")}`,  
    method: "PATCH",
    data: formData,
    contentType: false,
    processData: false
  });
};

export const STYLES = ['Pale Ale', 'Wheat', 'IPA', 'Stout', 'Sour', 'Pilsner', 'IPL', 'Brown Ale', 'Amber Ale', 'Helles Lager']