@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :username, :image_url
    end
end

# ADD IN WHEN NEEDED 
# :checkinIds, :authoredBeers, :commentIds