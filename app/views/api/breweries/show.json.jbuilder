json.brewery do 
  json.extract! @brewery, :id, :name, :location, :description
  json.beerCount @brewery.beers.length
  json.checkinIds @brewery.checkin_ids
  json.beerIds @brewery.beer_ids
  json.avgRating @brewery.average_rating.round(2)
  json.totalCheckins @brewery.checkins.size
  json.uniqueUsers @brewery.uniq_users
  json.imgUrl url_for(@brewery.photo) if @brewery.photo.attached?
end

@brewery.beers.each do |beer|
  json.beers do
    json.set! beer.id do
      json.extract! beer, :id, :name, :ibu, :style, :abv, :description
      json.breweryId beer.brewery_id
      json.imgUrl url_for(beer.photo) if beer.photo.attached?
    end
  end
end

@brewery.checkins.each do |checkin|
  json.checkins do
    json.set! checkin.id do
      json.extract! checkin, :id, :body, :rating
      json.createdAt checkin.created_at
      json.beerId checkin.beer_id
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

@brewery.checkin_authors.each do |author|
  json.users do
    json.set! author.id do
      json.id author.id
      json.firstName author.first_name
      json.lastName author.last_name
      json.imgUrl url_for(author.photo) if author.photo.attached?
    end
  end
end