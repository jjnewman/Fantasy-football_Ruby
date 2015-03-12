require 'sinatra'
require 'data_mapper'
require 'rack-flash'
require 'sinatra/partial'

require_relative 'player'
require_relative 'data_mapper_setup'

enable :sessions
set :session_secret, 'super secret'
# use Rack::Flash
#set :partial_template_engine, :erb
set :public_folder, Proc.new { File.join(root, '..', "public") }
set :views, Proc.new { File.join(root, "views") }

get '/' do
  erb :index
end

get '/players/new' do
  erb :"players/new"

end

post '/players' do
 @gkname = params["gk"]
  # club = params["club"]
  # cost = params["cost"]
  # Player.create(:name => name, :club => club, :cost => cost)
  erb :"players/new"
  # redirect to('/players/final')
end

get '/players/final' do
  erb :"players/final"
end