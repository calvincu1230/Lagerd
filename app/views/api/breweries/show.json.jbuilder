json.extract! @brewery, :id, :name, :location, :description
json.beers @brewery.beers do |beer|
  json.extract! beer, :id, :name, :brewery_id, :ibu, :style, :abv, :description
  json.imgUrl url_for(beer.photo) if beer.photo.attached?
end
json.beerCount @brewery.beers.length
json.imgUrl url_for(@brewery.photo) if @brewery.photo.attached?