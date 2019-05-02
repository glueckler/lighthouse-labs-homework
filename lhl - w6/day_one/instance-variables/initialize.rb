class Person

  def initialize(name)
    @name = name
  end

  attr_reader :name

  attr_writer :name

end

p = Person.new('L. Ron')
puts p.name