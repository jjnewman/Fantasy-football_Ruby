env = ENV["RACK_ENV"] || "development"

DataMapper.setup(:default, 'postgres://localhost/fantasy-football_development')

require_relative 'player'

DataMapper.finalize

DataMapper.auto_upgrade!
