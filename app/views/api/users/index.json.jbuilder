@users.each do |user|
    json.set! user.id do
        json.partial! user, :id, :username
    end
end

# ADD IN WHEN NEEDED 
# :checkinIds, :authoredBeers, :commentIds