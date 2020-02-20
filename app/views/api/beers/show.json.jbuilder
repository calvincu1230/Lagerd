json.extract! @beer, :id, :name, :ibu, :style, :abv, :description, :checkin_ids, :brewery_id
json.imgUrl url_for(@beer.photo) if @beer.photo.attached?

# json.checkins @beer.checkins do |checkin|
#   json.extract! checkin, :body, :rating
#   json.authorId checkin.author do
#     json.id checkin.author.id
#     json.firstName checkin.author.first_name
#     json.lastName checkin.author.last_name
#     json.imgUrl url_for(checkin.author.photo) if checkin.author.photo.attached?
#   end
#   json.beerId checkin.beer_id
#   json.createdAt checkin.created_at
#   json.imgUrl url_for(checkin.photo) if checkin.photo.attached?
# end