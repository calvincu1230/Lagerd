# == Schema Information
#
# Table name: checkins
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  beer_id    :integer          not null
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  body       :text
#

class Checkin < ApplicationRecord

  validates :author_id, :body, :beer_id, :rating, presence: true

  has_many :toasts, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_one_attached :photo
  
  belongs_to :beer
  belongs_to :author,
      primary_key: :id,
      foreign_key: :author_id,
      class_name: :User
      
end
