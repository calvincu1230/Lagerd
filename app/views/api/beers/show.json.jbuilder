json.extract! @beer, :id, :name, :brewery_id, :style, :abv

json.imgUrl url_for(@beer.photo) if @beer.photo.attached?
