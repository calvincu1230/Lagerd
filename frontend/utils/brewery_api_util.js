export const fetchBrewery = breweryId => {
  return $.ajax({
    url: `/api/breweries/${breweryId}`,
    method: "GET"
  });
};

export const fetchBreweries = () => {
  return $.ajax({
    url: "/api/breweries",
    method: "GET"
  });
};