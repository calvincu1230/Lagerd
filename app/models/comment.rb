# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  checkin_id :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord

  validates :body, :checkin_id, :author_id, presence: true

  belongs_to :checkin
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end
