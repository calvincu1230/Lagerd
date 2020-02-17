class Api::BreweriesController < ApplicationController

  def index
    @breweries = Brewery.includes(:beers).with_attached_photo
    render :index
  end

  def show
    @brewery = Brewery.find(params[:id])
    render :show
  end

  # def beers 
  #   @brewery = Brewery.find(params[:id]).beers
  #   render :
  # end
  
end
