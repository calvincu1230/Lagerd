json.extract! beer, :id, :name, :brewery_id, :ibu, :style, :abv, :description
json.imgUrl url_for(beer.photo) if beer.photo.attached?