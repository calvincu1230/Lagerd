class Api::CheckinsController < ApplicationController

  def show
    @checkin = Checkin.includes(:beer, :author, :comments, :toasts).with_attached_photo.find(params[:id])
    render :show
  end

  def index
    @checkins = Checkin.includes(:beer, :author, :toasts).order(created_at: :desc).with_attached_photo.all
    render :index
  end
  
  def create
    @checkin = Checkin.new(checkin_params)
    if @checkin.save
      render :show
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def update
    @checkin = Checkin.find(params[:id])
    if @checkin && @checkin.update_attributes(checkin)
      render :show
    elsif !@checkin
      render json: ['Could not find checkin'], status: 400
    else
      render json: @checkin.errors.full_messages, status: 401
    end
  end

  def destroy
    @checkin = Checkin.find(params[:id])
    if @checkin && @checkin.destroy
      render :show
    else
      render json: ["Could not find checkin."], status: 404
    end
  end

  private

  def checkin_params
    params.require(:checkin).permit(:author_id, :body, :beer_id, :rating, :photo)
  end
end
