# ----- FUNCTIONS -----
# Functions provide code reuse, organization
# and much more
# Add 2 values using 1 as default
# You can define the data type using function
# annotations
def get_sum(num1: int = 1, num2: int = 1):
    return num1 + num2


print(get_sum(5, 4))

# Accept multiple values


def get_sum2(*args):
    sum = 0
    for arg in args:
        sum += arg
    return sum


print(get_sum2(1, 2, 3, 4))

# Return multiple values


def next_2(num):
    return num + 1, num + 2


i1, i2 = next_2(5)
print(i1, i2)

# A function that makes a function that
# multiplies by the given value


def mult_by(num):
    # You can create anonymous (unnamed functions)
    # with lambda
    return lambda x: x * num


print("3 * 5 =", (mult_by(3)(5)))

# Pass a function to a function


def mult_list(list, func):
    for x in list:
        print(func(x))


mult_by_4 = mult_by(4)
mult_list(list(range(0, 5)), mult_by_4)

# Create list of functions
power_list = [lambda x: x ** 2,
              lambda x: x ** 3,
              lambda x: x ** 4]
