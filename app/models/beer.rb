# == Schema Information
#
# Table name: beers
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  brewery_id  :integer          not null
#  style       :string           not null
#  abv         :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  ibu         :string           not null
#  description :text             not null
#

class Beer < ApplicationRecord

  validates :name, uniqueness: true
  validates :name, :brewery_id, :abv, :ibu, :style, :description, presence: true

  has_many :checkins, dependent: :destroy
  has_many :toasts, through: :checkins
  has_many :comments, through: :checkins
  # has_many :posters,
  #   through :checkins,
  #   source 
  belongs_to :brewery
  has_one_attached :photo

  after_create :ensure_default_photo
  
  def ensure_default_photo
    self.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'default_beer.png')), filename: 'default_beer.png') unless self.photo.attached?
  end

  def uniq_users
    self.checkins
      .group(:author_id)
      .count
      .size
  end

  def average_rating
    sum = 0
    self.checkins.each do |checkin|
      sum += checkin.rating
    end
    sum.to_f / self.checkins.size
  end

  # def sort_ch

  # end

end
