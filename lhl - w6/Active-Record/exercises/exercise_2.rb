require_relative '../setup'
require_relative './exercise_1'

puts "Exercise 2"
puts "----------"

@store1 = Store.find(1)
@store1.name = 'Burnaby'
@store1.save

@store2 = Store.find(2)


puts @store1.inspect
puts @store2.inspect
