Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'root#root'
  
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:show, :index, :create, :destroy, :update]
    resource :session, only: [:create, :destroy]
    resources :breweries, only: [:show, :index] # nest beers and checkins later
    resources :beers, only: [:show, :create, :update]
  end


end
