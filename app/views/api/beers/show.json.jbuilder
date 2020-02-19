json.extract! @beer, :id, :name, :brewery_id, :ibu, :style, :abv, :description
json.imgUrl url_for(@beer.photo) if @beer.photo.attached?
json.checkins @beer.checkins do |checkin|
  json.extract! checkin, :body, :rating
  json.authorId checkin.author_id
  json.beerId checkin.beer_id
  json.createdAt checkin.created_at
  json.imgUrl url_for(checkin.photo) if checkin.photo.attached?
end