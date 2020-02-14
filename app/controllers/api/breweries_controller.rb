class Api::BreweriesController < ApplicationController

  def index
    @breweries = Brewery.with_attached_photo.all
    render :index
  end

  def show
    @brewery = Brewery.find(params[:id])
    render :show
  end
  
end
