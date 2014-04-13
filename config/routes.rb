Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :contacts
      resources :phone_numbers
    end
  end
end
