Rails.application.routes.draw do
  resources :issues, only: [:index, :show, :create, :update, :destroy]
end
