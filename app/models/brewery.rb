# == Schema Information
#
# Table name: breweries
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  location    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text             not null
#

class Brewery < ApplicationRecord

  validates :name, :location, presence: true
  
  has_many :beers
  has_many :checkins, through: :beers
  has_many :checkin_authors, -> { distinct },
    through: :checkins,
    source: :author

  has_one_attached :photo
  
  after_create :ensure_default_photo

  def ensure_default_photo
    self.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'default_brewery.png')), filename: 'default_brewery.png') unless self.photo.attached?
  end

  def average_rating
    sum = 0
    self.checkins.each do |checkin|
      sum += checkin.rating
    end
    sum.to_f / self.checkins.size
  end

  def uniq_users
    self.checkins
      .group(:author_id)
      .count
      .size
  end
end
