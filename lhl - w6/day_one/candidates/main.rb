# This is the main entrypoint into the program
# It requires the other files/gems that it needs

require 'pry'
require './candidates'
require './filters'
require 'active_support/all'

# for can in @candidates
#   xp = experienced? can
#   puts "Candidate is experienced?.. #{xp}"
# end

# found = find 10
# puts found

# puts qualified_candidates(@candidates)

puts @candidates
puts '-'
puts ordered_by_qualifications(@candidates)

# binding.pry

# pp @candidates
