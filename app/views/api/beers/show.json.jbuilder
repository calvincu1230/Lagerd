json.extract! @beer, :id, :name, :brewery_id, :ibu, :style, :abv
json.imgUrl url_for(@beer.photo) if @beer.photo.attached?
