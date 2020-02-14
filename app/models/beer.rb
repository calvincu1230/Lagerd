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
#

class Beer < ApplicationRecord

  validates :name, uniqueness: true
  validates :name, :brewery_id, :style, :abv, presence: true

  has_many :checkins
  belongs_to :brewery
  has_one_attached :photo

end
