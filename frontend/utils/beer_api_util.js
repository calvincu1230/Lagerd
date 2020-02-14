export const fetchBeer = beerId => {
  return $.ajax({
    url: `/api/beers/${beerId}`,
    method: "GET"
  });
};

// export const fetchBeers = () => {
//   return $.ajax({
//     url: "/api/beers",
//     method: "GET"
//   });
// };

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