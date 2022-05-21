Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :v1, defaults: { format: 'json' } do
    get 'greetings', to: 'greetings#index'
  end

  get'*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  # resources :greetings, only: [:index]

  root "static#index"
end
