# ----- LISTS -----
# Lists can contain mutable pieces of data of
# varying data types or even functions
l1 = [1, 3.14, "Derek", True]

# Get length
print("Length ", len(l1))

# Get value at index
print("1st", l1[0])
print("Last", l1[-1])

# Change value
l1[0] = 2

# Change multiple values
l1[2:4] = ["Bob", False]

# Insert at index without deleting
# Also l1.insert(2, "Paul")
l1[2:2] = ["Paul", 9]

# Add to end (Also l1.extend([5, 6]))
l2 = l1 + ["Egg", 4]

# Remove a value
l2.remove("Paul")

# Remove at index
l2.pop(0)
print("l2", l2)

# Add to beginning (Also l1.append([5, 6]))
l2 = ["Egg", 4] + l1

# Multidimensional list
l3 = [[1, 2], [3, 4]]
print("[1, 1]", l3[1][1])

# Does value exist
print("1 Exists", (1 in l1))

# Min & Max
print("Min ", min([1, 2, 3]))
print("Max ", max([1, 2, 3]))

# Slice out parts
print("1st 2", l1[0:2])
print("Every Other ", l1[0:-1:2])
print("Reverse ", l1[::-1])
