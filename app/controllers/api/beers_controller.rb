class Api::BeersController < ApplicationController

  def index 
    @beers = Beer.includes(:checkins).with_attached_photo
    # @beers = Beer.includes(:checkins).with_attached_photo.all.page(params[:page]).per(5)
    render :index
  end

  def show
    @beer = Beer.includes(:checkins).find(params[:id])
    render :show
  end

  def create
    @beer = Beer.new(beer_params)
    if @beer.save
      # @beer.photo.attach(io: open(params[:photo]), filename: 'default_beer.png')
      # @beer.photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'default_beer.png')), filename: 'default_beer.png')
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

  private

  def beer_params
    params.require(:beer).permit(:name, :brewery_id, :style, :abv, :ibu, :description, :photo)
  end
end
