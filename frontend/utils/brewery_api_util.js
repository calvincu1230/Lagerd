export const fetchBrewery = breweryId => {
  return $.ajax({
    url: `/api/breweries/${breweryId}`,
    method: "GET"
  });
};

// export const fetchBreweryBeer = breweryId => {
//   return $.ajax({
//     url: `/api/breweries/${breweryId}/beers`,
//     method: "GET"
//   });
// };

export const fetchBreweries = () => {
  return $.ajax({
    url: "/api/breweries",
    method: "GET"
  });
};
