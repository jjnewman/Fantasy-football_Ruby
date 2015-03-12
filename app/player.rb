class Player

  include DataMapper::Resource

  # has n, :tags, :through => Resource

  property :id,           Serial
  property :game_id,      Integer 
  property :surname,      String
  property :club,         String
  property :position,     String
  property :cost,         Float

end