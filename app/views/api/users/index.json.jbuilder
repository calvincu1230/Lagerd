@users.each do |user|
    json.set! user.id do
        json.partial! "api/users/user", user: user
    end
end

# ADD IN WHEN NEEDED 
# :checkinIds, :authoredBeers, :commentIds