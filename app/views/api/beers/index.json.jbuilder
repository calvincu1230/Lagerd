@beers.each do |beer|
  json.set! beer.id do
    json.extract! beer, :id, :name, :brewery_id, :style, :abv
  end
end