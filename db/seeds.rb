# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Beer.delete_all
Brewery.delete_all
User.delete_all

# User Seeds

demo_user = User.create!(username: "tommy", email: "tommy@aa.io", password: "hunter2", first_name: "tommy", last_name: "duek", birth_date: "1990-12-30")
user1 = User.create!(username: "BeerGuy", email: "beerguy@lagerd.com", password: "hunter2", first_name: "Bob", last_name: "Belcher", birth_date: "1990-12-30")
user2 = User.create!(username: "BeerHunter234", email: "chad@lagerd.com", password: "hunter2", first_name: "Chad", last_name: "Chaddington", birth_date: "1992-8-30")
user3 = User.create!(username: "HopHead32", email: "ben@lagerd.com", password: "hunter2", first_name: "Ben", last_name: "Wyatt", birth_date: "1982-1-3")
user4 = User.create!(username: "BeerLyfee", email: "tommy@lagerd.com", password: "hunter2", first_name: "Stephen", last_name: "DiPietro", birth_date: "1996-5-9")
user5 = User.create!(username: "BeerChick", email: "katie@lagerd.com", password: "hunter2", first_name: "Katie", last_name: "O'Connor", birth_date: "1994-2-12")


# Brewery Seeds

other_half = Brewery.create!(name: "Other Half", location: "New York")
sixpoint = Brewery.create!(name: "Sixpoint", location: "New York")
russian_river = Brewery.create!(name: "Russian River", location: "California")
alchemist = Brewery.create!(name: "Alchemist", location: "Vermont")
allagash = Brewery.create!(name: "Allagash", location: "Maine")
sierra_nevada = Brewery.create!(name: "Sierra Nevada", location: "California")
stone = Brewery.create!(name: "Stone Brewing", location: "California")
lawsons = Brewery.create!(name: "Lawson's Finest Liquids", location: "Vermont")
gsb = Brewery.create!(name: "Great South Bay", location: "New York")
hill_farmstead = Brewery.create!(name: "Hill Farmstead", location: "Vermont")
cantillon = Brewery.create!(name: "Brasserie Cantillon", location: "Belgium")
founders = Brewery.create!(name: "Founders Brewing Co.", location: "Michigan")
three_floyds = Brewery.create!(name: "Three Floyds Brewing Co.", location: "Indiana")
firestone_walker = Brewery.create!(name: "Firestone Walker Brewing Co.", location: "California")
jester_king = Brewery.create!(name: "Jester King Brewing", location: "Texas")
trillium = Brewery.create!(name: "Trillium Brewing Company", location: "Massachusetts")
tree_house = Brewery.create!(name: "Tree House Brewing Company", location: "Massachusetts")
augustiner = Brewery.create!(name: "Augustiner-Bräu", location: "Germany")
lagunitas = Brewery.create!(name: "Lagunitas", location: "California")
jacks_abbey = Brewery.create!(name: "Jacks Abbey Craft Lagers", location: "Massachusetts")

# Beer Seeds # STYLES = Pale Ale, Wheat, IPA, Stout, Sour, Pilsner, IPL, Brown Ale, Amber Ale, Helles Lager

beer1 = Beer.create!(name: "All Green Everything", brewery_id: other_half.id, style: "IPA", abv: "10.5")
beer2 = Beer.create!(name: "Double Dry Hopped Double Mosaic Dream", brewery_id: other_half.id, style: "IPA", abv: "8.5")
beer3 = Beer.create!(name: "Green Diamonds", brewery_id: other_half.id, style: "IPA", abv: "9.1")

beer4 = Beer.create!(name: "Resin", brewery_id: sixpoint.id, style: "IPA", abv: "9.1")
beer5 = Beer.create!(name: "Bengali", brewery_id: sixpoint.id, style: "IPA", abv: "6.6")
beer6 = Beer.create!(name: "The Crisp", brewery_id: sixpoint.id, style: "Pilsner", abv: "5.4")

beer7 = Beer.create!(name: "Pliny The Elder", brewery_id: russian_river.id, style: "IPA", abv: "8")
beer8 = Beer.create!(name: "Pliny The Younger", brewery_id: russian_river.id, style: "IPA", abv: "10.25")
beer9 = Beer.create!(name: "Consecration", brewery_id: russian_river.id, style: "Sour", abv: "10")

beer10 = Beer.create!(name: "Heady Topper", brewery_id: alchemist.id, style: "IPA", abv: "8")
beer11 = Beer.create!(name: "Focal Banger", brewery_id: alchemist.id, style: "IPA", abv: "7")
beer12 = Beer.create!(name: "Luscious", brewery_id: alchemist.id, style: "Stout", abv: "9.2")

beer13 = Beer.create!(name: "White", brewery_id: allagash.id, style: "Wheat", abv: "5.2")
beer14 = Beer.create!(name: "Coolship Resurgam", brewery_id: allagash.id, style: "Sour", abv: "6.6")
beer15 = Beer.create!(name: "Curieux", brewery_id: allagash.id, style: "Belgian", abv: "10.4")

beer16 = Beer.create!(name: "Pale Ale", brewery_id: sierra_nevada.id, style: "Pale Ale", abv: "5.6")
beer17 = Beer.create!(name: "Torpedo Extra IPA", brewery_id: sierra_nevada.id, style: "IPA", abv: "7.2")
beer18 = Beer.create!(name: "Kellerweis", brewery_id: sierra_nevada.id, style: "Wheat", abv: "4.8")

beer19 = Beer.create!(name: "Stone Xocoveza", brewery_id: stone.id, style: "Stout", abv: "8.1")
beer20 = Beer.create!(name: "Stone IPA", brewery_id: stone.id, style: "IPA", abv: "6.9")
beer21 = Beer.create!(name: "Smoked Porter", brewery_id: stone.id, style: "Porter", abv: "5.9")

beer22 = Beer.create!(name: "Sip of Sunshine", brewery_id: lawsons.id, style: "IPA", abv: "8")
beer23 = Beer.create!(name: "Maple Nipple", brewery_id: lawsons.id, style: "Amber Ale", abv: "8")
beer24 = Beer.create!(name: "Super Session #8", brewery_id: lawsons.id, style: "IPA", abv: "4.8")

beer25 = Beer.create!(name: "Field 5 Golden IPA", brewery_id: gsb.id, style: "IPA", abv: "7")
beer26 = Beer.create!(name: "Blood Orange Pale Ale", brewery_id: gsb.id, style: "Pale Ale", abv: "5")
beer27 = Beer.create!(name: "Snaggletooth Stout", brewery_id: gsb.id, style: "Stout", abv: "6.5")

beer28 = Beer.create!(name: "Mary", brewery_id: hill_farmstead.id, style: "Pilsner", abv: "4.6")
beer29 = Beer.create!(name: "Edward", brewery_id: hill_farmstead.id, style: "Pale Ale", abv: "5.2")
beer30 = Beer.create!(name: "Everett", brewery_id: hill_farmstead.id, style: "Porter", abv: "7.5")

beer31 = Beer.create!(name: "Rosé de Gambrinus", brewery_id: cantillon.id, style: "Sour", abv: "5")
beer32 = Beer.create!(name: "Classic Gueuze", brewery_id: cantillon.id, style: "Sour", abv: "5")
beer33 = Beer.create!(name: "Cuvée Saint-Gilloise (Champions)", brewery_id: cantillon.id, style: "Sour", abv: "5")

beer34 = Beer.create!(name: "Breakfast Stout", brewery_id: founders.id, style: "Stout", abv: "8.3")
beer35 = Beer.create!(name: "Solid Gold", brewery_id: founders.id, style: "Pilsner", abv: "4.4")
beer36 = Beer.create!(name: "All Day IPA", brewery_id: founders.id, style: "IPA", abv: "4.7")

beer37 = Beer.create!(name: "Zombie Dust", brewery_id: three_floyds.id, style: "Pale Ale", abv: "6.2")
beer38 = Beer.create!(name: "Gumballhead", brewery_id: three_floyds.id, style: "Wheat", abv: "5.6")
beer39 = Beer.create!(name: "Alpha King", brewery_id: three_floyds.id, style: "Pale Ale", abv: "6.66")

beer40 = Beer.create!(name: "Velvet Merlin", brewery_id: firestone_walker.id, style: "Stout", abv: "5.5")
beer41 = Beer.create!(name: "DBA (Double Barrel Ale)", brewery_id: firestone_walker.id, style: "Pale Ale", abv: "5")
beer42 = Beer.create!(name: "Union Jack IPA", brewery_id: firestone_walker.id, style: "IPA", abv: "7")

beer43 = Beer.create!(name: "Funk Metal", brewery_id: jester_king.id, style: "Sour", abv: "7.2")
beer44 = Beer.create!(name: "Atrial Rubicite", brewery_id: jester_king.id, style: "Sour", abv: "5.8")
beer45 = Beer.create!(name: "Moderne Dansk", brewery_id: jester_king.id, style: "Sour", abv: "7.1")

beer46 = Beer.create!(name: "Vicinity", brewery_id: trillium.id, style: "IPA", abv: "8")
beer47 = Beer.create!(name: "Congress Street", brewery_id: trillium.id, style: "IPA", abv: "7.2")
beer48 = Beer.create!(name: "Fort Point", brewery_id: trillium.id, style: "Pale Ale", abv: "6.6")

beer49 = Beer.create!(name: "Julius", brewery_id: tree_house.id, style: "IPA", abv: "6.8")
beer50 = Beer.create!(name: "Green", brewery_id: tree_house.id, style: "IPA", abv: "7.5")
beer51 = Beer.create!(name: "Haze", brewery_id: tree_house.id, style: "IPA", abv: "8.2")

beer52 = Beer.create!(name: "Lagerbier Hell", brewery_id: augustiner.id, style: "Helles Lager", abv: "5.2")
beer53 = Beer.create!(name: "Weissbier", brewery_id: augustiner.id, style: "Wheat", abv: "5.4")

beer54 = Beer.create!(name: "Lagunitas Sucks", brewery_id: lagunitas.id, style: "IPA", abv: "8")
beer55 = Beer.create!(name: "Hop Stoopid", brewery_id: lagunitas.id, style: "IPA", abv: "8")
beer56 = Beer.create!(name: "Pils", brewery_id: lagunitas.id, style: "Pilsner", abv: "6")

beer57 = Beer.create!(name: "Hoponius Union", brewery_id: jacks_abbey.id, style: "IPL", abv: "6.5")
beer58 = Beer.create!(name: "Kiwi Rising", brewery_id: jacks_abbey.id, style: "IPL", abv: "8.5")
beer59 = Beer.create!(name: "House Lager", brewery_id: jacks_abbey.id, style: "Helles Lager", abv: "5.2")