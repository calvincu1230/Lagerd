@checkins.each do |checkin|
  json.set! checkin.id do
    json.extract! checkin, :body, :rating
    json.createdAt checkin.created_at
    json.beerId checkin.beer_id

    json.author do
      json.id checkin.author.id
      json.firstName checkin.author.first_name
      json.lastName checkin.author.last_name
    end

    json.beer do
      json.id checkin.beer.id
      json.name checkin.beer.name
    end

    json.brewery do
      json.extract! checkin.beer.brewery, :id, :name, :location
    end

    json.createdAt checkin.created_at
  end
end