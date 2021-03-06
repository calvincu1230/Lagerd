class ApplicationController < ActionController::Base

    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token
    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logout!
        @current_user.reset_session_token!
        session[:session_token] = nil
    end

    def login(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logged_in?
        !!current_user
    end

    def ensure_default_photo
        self.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'default_brewery.png')), filename: 'default_brewery.png')
    end
end
