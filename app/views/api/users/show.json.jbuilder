json.user do
  json.id @user.id
  json.firstName @user.first_name
  json.userName @user.username
  json.checkinIds @user.checkin_ids
  json.totalCheckins @user.total_checkins
  json.uniqCheckins @user.uniq_checkins
  json.lastName @user.last_name
  json.imgUrl url_for(@user.photo) if @user.photo.attached?
end

@user.checkins.each do |checkin|
  json.checkins do
    json.set! checkin.id do
      json.extract! checkin, :id, :body, :rating
      json.createdAt checkin.created_at
      json.beerId checkin.beer_id
      json.toastIds checkin.toast_ids
      json.commentIds checkin.comment_ids
      json.beerName checkin.beer.name
      json.beerImgUrl url_for(checkin.beer.photo)
      json.breweryId checkin.beer.brewery_id
      json.breweryName checkin.beer.brewery.name
      json.authorId checkin.author_id
      json.authorFName checkin.author.first_name
      json.authorLName checkin.author.last_name
      json.authorImgUrl url_for(checkin.author.photo)
      json.imgUrl url_for(checkin.photo) if checkin.photo.attached?
    end
  end
end

@user.checkin_toasts.each do |toast|
  json.toasts do 
    json.set! toast.id do
      json.id toast.id
      json.checkinId toast.checkin_id
      json.userId toast.user_id
      json.imgUrl url_for(toast.user.photo) if toast.user.photo.attached?
    end
  end
end