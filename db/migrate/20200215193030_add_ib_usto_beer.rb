class AddIbUstoBeer < ActiveRecord::Migration[5.2]
  def change
    add_column :beers, :ibu, :string, null: false
  end
end
