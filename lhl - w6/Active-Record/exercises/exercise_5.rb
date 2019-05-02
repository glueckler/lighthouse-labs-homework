require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'

puts "Exercise 5"
puts "----------"

sum_annual_revenue = Store.sum(:annual_revenue)
puts "----------- annual revenue"
puts sum_annual_revenue

average_annual_revenue = Store.average(:annual_revenue)
puts "----------- average annual revenue"
puts average_annual_revenue

count_over_one_mil = Store.where("annual_revenue > ?", 1000000).count
puts "stores with over 1 mil in annual sales.."
puts count_over_one_mil