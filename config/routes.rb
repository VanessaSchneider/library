Rails.application.routes.draw do
  


 
  resources :books
  post "/signup", to: "users#create"
  get "/me", to: "users#me"

  post '/getbook' ,to: "books#getbook"

  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#destroy"


  get ':username' => 'users#show'

  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
