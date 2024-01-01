Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # root "pages#show"
  root "chatroom#show"
  get "/pages/:page" => "pages#show"
  get '/login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  post "message", to: 'messages#create'

  mount ActionCable.server, at: '/cable'
end
