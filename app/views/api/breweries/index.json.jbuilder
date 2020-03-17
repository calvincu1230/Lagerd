@breweries.each do |brewery|
  json.set! brewery.id do
    json.extract! brewery, :id, :name, :location, :description, :beer_ids
    json.beerCount brewery.beers.size
    json.avgRating brewery.average_rating.round(2)
    json.totalCheckins brewery.checkins.size
    json.imgUrl url_for(brewery.photo) if brewery.photo.attached?
  end
end