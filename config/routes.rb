Rails.application.routes.draw do
  


 
  resources :books, :data
  post "/signup", to: "users#create"
  get "/me", to: "users#me"

  post '/getbook' => 'books#getbook'

 get '/getbooks' => 'books#get_books'

  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#destroy"

  get '/getCheckedBooks' => 'users#get_books'


  get ':username' => 'users#show'

  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
