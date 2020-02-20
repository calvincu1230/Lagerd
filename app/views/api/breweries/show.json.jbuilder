json.extract! @brewery, :id, :name, :location, :description
json.beerCount @brewery.beers.length
json.imgUrl url_for(@brewery.photo) if @brewery.photo.attached?

json.beers @brewery.beers do |beer|
  json.extract! beer, :id, :name, :brewery_id, :ibu, :style, :abv, :description
  json.imgUrl url_for(beer.photo) if beer.photo.attached?
end

json.checkins @brewery.checkins do |checkin|
  json.extract! checkin, :body, :rating
  json.author do
    json.id checkin.author.id
    json.firstName checkin.author.first_name
    json.lastName checkin.author.last_name
    json.imgUrl url_for(checkin.author.photo) if checkin.author.photo.attached?
  end
  json.beer do
    json.id checkin.beer.id
    json.name checkin.beer.name
    json.imgUrl url_for(checkin.beer.photo) if checkin.beer.photo.attached?
  end
  json.createdAt checkin.created_at
  json.imgUrl url_for(checkin.photo) if checkin.photo.attached?
end