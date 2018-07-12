Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :profiles, except: [:new]
  end

  root to: 'home#index'
end
