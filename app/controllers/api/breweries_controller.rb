class Api::BreweriesController < ApplicationController

  def index
    @breweries = Brewery.with_attached_photo
    render :index
  end

  def show
    @brewery = Brewery.includes(:beers).with_attached_photo.find(params[:id])
    render :show
  end

  def beers 
    @beers = Brewery.find(params[:id]).beers.with_attached_photo
    render "/api/beers/index.json.jbuilder"
  end
end
