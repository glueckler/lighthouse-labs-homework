require './Question.rb'
require './Player.rb'

class Game

  def initialize
    @player1 = Player.new('Player 1')
    @player2 = Player.new('Player 2')
    @current_player = @player1
    @game_over = false
  end

  def get_scores
    "Player 1 coming in with #{@player1.score}/3.. Player 2, you got #{@player2.score}/3"
  end

  def change_player
    if @current_player == @player1
      @current_player = @player2
    else
      @current_player = @player1
    end
  end

  def ask_question
    question = Question.new()
    puts "okay.. #{@current_player.name}, #{question.question}"
    input = gets.chomp
    if question.check_ans(input)
      puts "You got it!"
    else
      puts "nahh wrong answer"
      score = @current_player.penalty
      if score == 0
        @game_over = true
        puts "annndd looks like you're out of lives #{@current_player.name}"
      end
    end

  end

  def game_over
    @game_over
  end

end
