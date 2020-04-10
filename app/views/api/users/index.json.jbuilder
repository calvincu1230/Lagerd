@users.each do |user|
    json.set! user.id do
        json.partial! "api/users/user", user: user
    end
end
# not currently using this builder
# ADD IN WHEN NEEDED 
# :checkinIds, :authoredBeers, :commentIds