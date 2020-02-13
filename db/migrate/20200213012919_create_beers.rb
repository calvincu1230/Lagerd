class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.integer :brewery_id, null: false
      t.string :img_url, null: false
      t.string :style, null: false
      t.string :abv, null: false

      t.timestamps
    end

    add_index :beers, :name, unique: true
    add_index :beers, :brewery_id
  end
end
