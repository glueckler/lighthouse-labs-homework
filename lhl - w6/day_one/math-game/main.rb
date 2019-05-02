require './Game.rb'

game = Game.new()

while !game.game_over
  game.ask_question
  puts game.get_scores
  game.change_player
end

