json.beer do
  json.extract! @beer, :id, :name, :ibu, :style, :abv, :description
  json.avgRating @beer.average_rating.round(2)
  json.monthlyCheckins @beer.checkins_this_month
  json.totalCheckins @beer.checkins.size
  json.breweryId @beer.brewery_id
  json.checkinIds @beer.checkin_ids
  json.uniqueUsers @beer.uniq_users
  json.imgUrl url_for(@beer.photo) if @beer.photo.attached?
end


json.brewery do 
    json.extract! @beer.brewery, :id, :name, :location, :description
end

@beer.checkins.each do |checkin|
  json.checkins do
    json.set! checkin.id do
      json.extract! checkin, :id, :body, :rating
      json.createdAt checkin.created_at
      json.beerId checkin.beer_id
      json.toastIds checkin.toast_ids
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

@beer.toasts.each do |toast|
  json.toasts do 
    json.set! toast.id do
      json.id toast.id
      json.checkinId toast.checkin_id
      json.userId toast.user_id
      json.imgUrl url_for(toast.user.photo) if toast.user.photo.attached?
    end
  end
end