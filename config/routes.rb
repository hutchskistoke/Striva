Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

resources :posts do
  resources :comments
end
resources :users

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

# resources :posts do
#   resources :comments
# end
# resources :users

# OR: 
# resources :users do
#   resources :posts do
#     resources :comments
#   end
# end

# resources :comments
# resources :posts
# resources :users

# resources :users 
# resources :posts do
#     resources :comments
#   end
