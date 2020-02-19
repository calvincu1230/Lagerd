class RemoveNotNullFromCheckinBody < ActiveRecord::Migration[5.2]
  def change
    remove_column :checkins, :body
    add_column :checkins, :body, :text
  end
end
