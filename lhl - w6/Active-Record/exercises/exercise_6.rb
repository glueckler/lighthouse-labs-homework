require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'
require_relative './exercise_5'

puts "Exercise 6"
puts "----------"

@store1.employees.create(first_name: "Dean", last_name: "Gluness", hourly_rate: 60)
@store1.employees.create(first_name: "Dace", last_name: "Fluness", hourly_rate: 61)

@store2.employees.create(first_name: "Cat", last_name: "Meow", hourly_rate: 39)
@store2.employees.create(first_name: "Jeep", last_name: "Cruise", hourly_rate: 49)

@store2.errors.full_messages