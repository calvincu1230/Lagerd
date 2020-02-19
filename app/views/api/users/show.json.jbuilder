# json.set! @user.id do
# json.extract! @user, :id, :username, :image_url
# end
json.partial! "api/users/user", user: @user
# json.checkins @user.checkins do |checkin|
  # json.extract! checkin, :body, :rating

  # json.author do
  #   json.id checkin.author, :id
  #   json.firstName checkin.author, :first_name
  #   json.lastName checkin.author, :last_name
  # end

  # json.beer do
  #   json.id checkin.beer, :id
  #   json.name checkin.beer, :name
  # end

  # json.brewery do
  #   json.extract! checkin.beer.brewery, :id, :name, :location
  # end

  # json.createdAt checkin.created_at
  # json.imgUrl url_for(checkin.photo) if checkin.photo.attached?
# end