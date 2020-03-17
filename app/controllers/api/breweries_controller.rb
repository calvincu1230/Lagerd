class Api::BreweriesController < ApplicationController

  def index
    @breweries = Brewery.includes(:beers, :checkins).with_attached_photo
    render :index
  end

  def show
    @brewery = Brewery.includes(:beers, :checkins).with_attached_photo.find(params[:id])
    render :show
  end
  
end
