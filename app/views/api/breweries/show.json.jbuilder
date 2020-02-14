json.extract! @brewery, :id, :name, :location, :beer_ids #eventually grab beer ids and photo
json.imgUrl url_for(@brewery.photo) if @brewery.photo.attached?