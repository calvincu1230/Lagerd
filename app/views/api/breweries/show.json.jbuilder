json.extract! @brewery, :id, :name, :location, :beer_ids, :description
json.beerCount @brewery.beers.length
json.imgUrl url_for(@brewery.photo) if @brewery.photo.attached?