# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string           not null
#  last_name       :string           not null
#  birth_date      :string           not null
#

class User < ApplicationRecord

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true 
    validate :birth_date, if: :over_21

    has_many :checkins, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :toasts, dependent: :destroy
    has_many :friends,
        class_name: :User,
        primary_key: :id,
        foreign_key: :id
    has_one_attached :photo

    after_initialize :ensure_session_token

    attr_reader :password

    def over_21
        # based on todays date, compares with date instance of given birthday
        today = Date.today
        date = Date.parse(self.birth_date)
        age = (today.year - date.year)
        age -= 1 if [date.day, date.month, today.year].join('/').to_date > Date.today
            # checks if specific date birthdate has passed
        if age >= 21
            true
        else
            # adds error that will be render with errors.full_messages
            self.errors.add(:_, "Must be 21 or older to make an account.")
        end
    end

    # finds user with given username and only returns user info if
    # password is valid
    def self.find_by_credentials(username, password) 
        user = User.find_by(username: username)
        return nil if user.nil?
        return user if user && user.is_password?(password)
    end
    
    # checks if given password is
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64(16)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save
        self.session_token
    end
end
