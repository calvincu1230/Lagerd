@checkins.each do |checkin|
  json.set! checkin.id do
    json.extract! checkin, :id, :body, :rating
    json.createdAt checkin.created_at
    json.beerId checkin.beer_id
    json.beerName checkin.beer.name
    json.toastIds checkin.toast_ids
    json.commentIds checkin.comment_ids
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