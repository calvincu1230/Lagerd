class ChangeCheckinsRatingToFloat < ActiveRecord::Migration[5.2]
  def up
    change_column :checkins, :rating, :float
  end

  def down
    change_column :checkins, :rating, :integer
  end
end
