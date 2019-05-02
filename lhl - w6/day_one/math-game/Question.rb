class Question

  attr_reader :question
  def initialize
    rand1 = rand(1...20)
    rand2 = rand(1..20)
    @question = "What is #{rand1} + #{rand2} ?"
    @answer = rand1 + rand2
  end

  def check_ans(input)
    input.to_i == @answer
  end

end
