class Player

  attr_reader :score, :name

  def initialize(name)
    @score = 3
    @name = name
  end

  def penalty
    @score -= 1
  end


end
