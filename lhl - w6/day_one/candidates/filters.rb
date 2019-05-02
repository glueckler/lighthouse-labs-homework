# In this file we define the methods to help filter out candidates
# This way, we keep these methods separated from other potential parts of the program

def find(id)
  puts id
  found = @candidates.find { |can| can[:id] == id }
  return found
end

def experienced?(candidate)
  yoe = candidate[:years_of_experience]
  if yoe >= 2
    return true
  else
    return false
  end
end

def qualified_candidates(candidates)
  qualify = candidates.select { |can| can[:github_points] >= 100 }
  qualify = qualify.select { |can| experienced? can }
  qualify = qualify.select { |can| can[:languages].find { |lang| lang == "Ruby" || lang == "Python" } != nil }
  qualify = qualify.select { |can| can[:date_applied] >= 15.days.ago.to_date }
  qualify = qualify.select { |can| can[:age] > 17}
  return qualify
end

def ordered_by_qualifications(candidates)
  return candidates.sort { |can_a, can_b|
    init_sort = can_a[:years_of_experience] <=> can_b[:years_of_experience]
    if init_sort == 0
      init_sort = can_a[:github_points] <=> can_b[:github_points]
    end
    init_sort
  }
end
