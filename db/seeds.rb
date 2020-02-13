# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all!

# User Seeds

demo_user = User.create(username: "tommy", email: "tommy@aa.io", password: "hunter2", first_name: "tommy", last_name: "duek", birth_date: "1990-12-30")
user1 = User.create(username: "BeerGuy", email: "beerguy@lagerd.com", password: "hunter2", first_name: "Bob", last_name: "Belcher", birth_date: "1990-12-30")
user2 = User.create(username: "BeerHunter234", email: "chad@lagerd.com", password: "hunter2", first_name: "Chad", last_name: "Chaddington", birth_date: "1992-8-30")
user3 = User.create(username: "HopHead32", email: "ben@lagerd.com", password: "hunter2", first_name: "Ben", last_name: "Wyatt", birth_date: "1982-1-3")
user4 = User.create(username: "BeerLyfee", email: "tommy@lagerd.com", password: "hunter2", first_name: "Stephen", last_name: "DiPietro", birth_date: "1996-5-9")
user5 = User.create(username: "BeerChick", email: "katie@lagerd.com", password: "hunter2", first_name: "Katie", last_name: "O'Connor", birth_date: "1994-2-12")


# Brewery Seeds

other_half = Brewery.create(name: "Other Half", location: "New York")
sixpoint = Brewery.create(name: "Sixpoint", location: "New York")
russian_river = Brewery.create(name: "Russian River", location: "California")
alchemist = Brewery.create(name: "Alchemist", location: "Vermont")
allagash = Brewery.create(name: "Allagash", location: "Maine")
sierra_nevada = Brewery.create(name: "Sierra Nevada", location: "California")
stone = Brewery.create(name: "Stone Brewing", location: "California")
lawsons = Brewery.create(name: "Lawson's Finest Liquids", location: "Vermont")
gsb = Brewery.create(name: "Great South Bay", location: "New York")
hill_farmstead = Brewery.create(name: "Hill Farmstead", location: "Vermont")
cantillon = Brewery.create(name: "Brasserie Cantillon", location: "Belgium")
founders = Brewery.create(name: "Founders Brewing Co.", location: "Michigan")
three_floyds = Brewery.create(name: "Three Floyds Brewing Co.", location: "Indiana")
firestone_walker = Brewery.create(name: "Firestone Walker Brewing Co.", location: "California")
jes = Brewery.create(name: "Jester King Brewing", location: "Texas")
brewery16 = Brewery.create(name: "Trillium Brewing Company", location: "Massachusetts")
brewery17 = Brewery.create(name: "Tree House Brewing Company", location: "Massachusetts")
brewery18 = Brewery.create(name: "Augustiner-Bräu", location: "Germany")
brewery19 = Brewery.create(name: "Lagunitas", location: "California")
brewery20 = Brewery.create(name: "Jacks Abbey Craft Lagers", location: "Massachusetts")

# Beer Seeds 