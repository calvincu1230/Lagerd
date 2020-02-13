class DeleteImgUrlColumnFromTables < ActiveRecord::Migration[5.2]
  def change

    remove_column :users, :image_url
    remove_column :beers, :img_url
    remove_column :breweries, :img_url
  end
end
