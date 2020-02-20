class Api::BeersController < ApplicationController

  def index 
    @beers = Beer.includes(:checkins).with_attached_photo
    render :index
  end

  def show
    @beer = Beer.includes(:checkins).with_attached_photo.find(params[:id])
    render :show
  end

  def create
    @beer = Beer.new(beer_params)
    if @beer.save
      render :show
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end

  def update
    @beer = Beer.find(params[:id])
    if @beer && @beer.update_attributes(beer_params)
      render :show
    elsif !@beer
      render json: ['Could not find beer'], status: 400
    else
      render json: @beer.errors.full_messages, status: 401
    end
  end

  def checkins 
    @checkins = Beer.find(params[:id]).checkins
    if @checkins
      render :checkins
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  private

  def beer_params
    params.require(:beer).permit(:name, :brewery_id, :style, :abv, :ibu, :description, :photo)
  end
end
