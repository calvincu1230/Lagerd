# json.set! @user.id do
# json.extract! @user, :id, :username, :image_url
# end
json.partial! "api/users/user", user: @user