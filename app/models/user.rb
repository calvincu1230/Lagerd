# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  image_url       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }

    has_many :checkins, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :toasts, dependent: :destroy
    has_many :friends,
        class_name: :User,
        primary_key: :id,
        foreign_key: :id

    after_initialize :ensure_session_token

    attr_reader :password

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
