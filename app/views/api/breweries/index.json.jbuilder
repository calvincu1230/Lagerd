@breweries.includes(:beers).each do |brewery|
  json.set! brewery.id do
    json.extract! brewery, :id, :name, :location
    ids = []
    brewery.beers.each do |beer|
      ids << beer.id
    end
    json.beerIds ids
    json.imgUrl url_for(brewery.photo) if brewery.photo.attached?
  end
end