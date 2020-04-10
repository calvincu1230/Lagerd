class Api::BeersController < ApplicationController

  def index 
    @beers = Beer.with_attached_photo.all
    render :index
  end

  def show
    @beer = Beer.includes(:checkins, :brewery).with_attached_photo.find(params[:id])
    render :show
  end

  def create
    @beer = Beer.new(beer_params)
    if @beer.save
      render :show
    else
      render json: clearer_errors(@beer.errors.full_messages), status: 422
    end
  end

  def update
    @beer = Beer.find(params[:id])
    if @beer && @beer.update_attributes(beer_params)
      render :show
    elsif !@beer
      render json: ['Could not find beer'], status: 400
    else
      render json: clearer_errors(@beer.errors.full_messages), status: 401
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

  def clearer_errors(errors) 
    errors.map do |error|
      case error
      when "Name can't be blank"
        "Beer Name is required."
      when "Brewery can't be blank"
        "Brewery is required."
      when "Style can't be blank"
        "Style is required."
      when "Abv can't be blank"
        "ABV is required."
      when "Ibu can't be blank"
        "IBU's are required."
      when "Description can't be blank"
        "Description is required."
      when "Brewery must exist"
        next
      else
        error
      end
    end
  end

end
