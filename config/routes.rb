Rails.application.routes.draw do
  root 'pages#index'
  
  #adjust the routes for the react 
  #this all catches all the paths, pass it to root - pages#index - which takes it to App.js - hence navigate to the other components
  match '*path', to: 'pages#index', via: :all
end
