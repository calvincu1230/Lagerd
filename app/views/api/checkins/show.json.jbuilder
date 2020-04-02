json.checkin do
  json.extract! @checkin, :id, :body, :rating
  json.createdAt @checkin.created_at
  json.toastIds @checkin.toast_ids
  json.commentIds @checkin.comment_ids
  json.beerId @checkin.beer_id
  json.beerName @checkin.beer.name
  json.beerImgUrl url_for(@checkin.beer.photo)
  json.breweryId @checkin.beer.brewery_id
  json.breweryName @checkin.beer.brewery.name
  json.authorId @checkin.author_id
  json.authorFName @checkin.author.first_name
  json.authorLName @checkin.author.last_name
  json.authorImgUrl url_for(@checkin.author.photo)
  json.imgUrl url_for(@checkin.photo) if @checkin.photo.attached?
end

@checkin.comments.each do |comment|
  json.comments do 
    json.body comment.body
    json.checkinId comment.checkin_id
    json.authorId comment.author_id
    json.imgUrl url_for(comment.author.photo) if comment.author.photo.attached?
  end
end

@checkin.toasts.each do |toast|
  json.toasts do 
    json.toastId comment.toast_id
    json.userId comment.user_id
    json.imgUrl url_for(toast.user.photo) if toast.user.photo.attached?
  end
end