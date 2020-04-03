Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'root#root'
  
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:show, :index, :create, :destroy, :update]
    resources :checkins, only: [:show, :index, :create, :destroy, :update]
    resource :session, only: [:create, :destroy]
    resources :breweries, only: [:show, :index]
    resources :toasts, only: [:index, :create, :destroy]
    resources :beers, only: [:index, :show, :create, :update]
  end
end
