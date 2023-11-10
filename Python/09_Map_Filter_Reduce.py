from functools import reduce

# ----- MAP -----
# Map is used to execute a function on a list


one_to_4 = range(1, 5)
def times2(x): return x * 2


print(list(map(times2, one_to_4)))

# ----- FILTER -----
# Filter selects items based on a function
# Print out the even values from a list
print(list(filter((lambda x: x % 2 == 0), range(1, 11))))

# ----- REDUCE -----
# Reduce receives a list and returns a single
# result
# Add up the values in a list
print(reduce((lambda x, y: x + y), range(1, 6)))
