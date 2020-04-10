json.user do
  json.extract! user, :id, :username
  json.firstName user.first_name
  json.lastName user.last_name
  json.imgUrl url_for(user.photo) if user.photo.attached?
end