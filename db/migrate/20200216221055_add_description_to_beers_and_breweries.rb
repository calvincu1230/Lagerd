class AddDescriptionToBeersAndBreweries < ActiveRecord::Migration[5.2]
  def change
    add_column :beers, :description, :text, null: false
    add_column :breweries, :description, :text, null: false
  end
end
