@beers.each do |beer|
  json.set! beer.id do
    json.extract! beer, :id, :name, :ibu, :brewery_id, :style, :abv, :description
    json.imgUrl url_for(beer.photo) if beer.photo.attached?
    json.avgRating beer.average_rating.round(2)
    json.totalCheckins beer.checkins.size
  end
end