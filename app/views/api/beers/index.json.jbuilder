@beers.each do |beer|
  json.set! beer.id do
    json.extract! beer, :id, :name, :ibu, :style, :abv, :description
    json.avgRating beer.average_rating
    json.totalCheckins beer.total_checkins
    json.breweryId beer.brewery_id
    json.checkinIds beer.checkin_ids
    json.uniqueUsers beer.uniq_users
    json.imgUrl url_for(beer.photo) if beer.photo.attached?
  end
end