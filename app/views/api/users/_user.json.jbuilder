json.extract! user, :id, :username
json.imgUrl url_for(user.photo) if user.photo.attached?