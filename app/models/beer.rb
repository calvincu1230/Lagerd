# == Schema Information
#
# Table name: beers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  brewery_id :integer          not null
#  style      :string           not null
#  abv        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  ibu        :string           not null
#

class Beer < ApplicationRecord

  validates :name, uniqueness: true
  validates :name, :brewery_id, :style, :abv, presence: true

  has_many :checkins
  # has_many :posters,
  #   through :checkins,
  #   source 
  belongs_to :brewery
  has_one_attached :photo

  def unique_user_count
    self.joins()
  end

end
