# == Schema Information
#
# Table name: toasts
#
#  id         :bigint           not null, primary key
#  checkin_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Toast < ApplicationRecord
        
    # unique only 1 toast per user per checkin
    # does order matter for checkin_id / user_id unique
    validates :checkin_id, uniqueness: { scope: :user_id }

    belongs_to :user
    belongs_to :checkin
end
