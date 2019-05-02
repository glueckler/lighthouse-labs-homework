require_relative '../setup'

puts "Exercise 1"
puts "----------"

store1 = Store.new(
  name: 'Store without Nma',
  annual_revenue: 300000,
  mens_apparel: true,
  womens_apparel: true
  )
store1.save!
store1.errors.full_messages

store2 = Store.new(
  name: 'Richmond',
  annual_revenue: 1260000,
  mens_apparel: false,
  womens_apparel: true
  )
store2.save!
store2.errors.full_messages

store3 = Store.new(
  name: 'BigShop',
  annual_revenue: 190000,
  mens_apparel: true,
  womens_apparel: false
  )
store3.save!
store3.errors.full_messages


puts '----------- store count ..'
puts Store.count
puts ' '