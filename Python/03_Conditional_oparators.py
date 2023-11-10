# ----- CONDITIONALS -----
# Comparison Operators : < > <= >= == !=

# if, else & elif execute different code depending
# on conditions
age = 30
if age > 21:
    # Python uses indentation to define all the
    # code that executes if the above is true
    print("You can drive a tractor trailer")
elif age >= 16:
    print("You can drive a car")
else:
    print("You can't drive")

# Make more complex conditionals with logical operators
# Logical Operators : and or not
if age < 5:
    print("Stay Home")
elif (age >= 5) and (age <= 6):
    print("Kindergarten")
elif (age > 6) and (age <= 17):
    print("Grade %d", (age - 5))
else:
    print("College")

# Ternary operator in Python
# condition_true if condition else condition_false
canVote = True if age >= 18 else False
print("Can Vote ? ", canVote)