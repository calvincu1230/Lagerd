class Api::ToastsController < ApplicationController
  def index 
    @toasts = Toast.includes(:user).all
    render :index
  end
end
