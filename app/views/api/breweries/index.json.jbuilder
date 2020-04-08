@breweries.each do |brewery|
  json.set! brewery.id do
    json.extract! brewery, :id, :name, :location, :description, :beer_ids
    json.beerCount brewery.beer_count
    json.avgRating brewery.average_rating
    json.totalCheckins brewery.checkins.size
    json.imgUrl url_for(brewery.photo) if brewery.photo.attached?
  end
end