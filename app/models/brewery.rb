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
  has_many :toasts, through: :checkins
  has_many :comments, through: :checkins
  has_one_attached :photo
  
  after_create :ensure_default_photo

  def ensure_default_photo
    self.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'default_brewery.png')), filename: 'default_brewery.png') unless self.photo.attached?
  end

  def average_rating # average of ratings counting zeros 
    self.checkins
      .average(:rating)
    # .where("rating >= ?", 0) # in case I change table to str if no rating given
  end

  def uniq_users # counts num of unique users that have checked in a beer by brewery
    self.checkin_authors.size
  end

  def checkins_this_month # num of checkins in current calendar month
    dt = DateTime.now
    bom = dt.beginning_of_month
    eom = dt.end_of_month
    self.checkins
      .where("checkins.created_at >= ? and checkins.created_at <= ?", bom, eom)
      .size
  end
end
