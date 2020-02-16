class Api::BeersController < ApplicationController

  def index 
    @beers = Beer.with_attached_photo.all
    # @beers = Beer.with_attached_photo.all.page(params[:page]).per(5)
    render :index
  end

  def show
    @beer = Beer.find(params[:id])
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
    if @beer && @beer.update_attributes(beer)
      render :show
    elsif !@beer
      render json: ['Could not find beer'], status: 400
    else
      render json: @beer.errors.full_messages, status: 401
    end
  end

  private

  def beer_params
    params.require(:beer).permit(:name, :brewery_id, :style, :abv)
  end
end
