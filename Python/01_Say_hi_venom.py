import sys
import math
import random
import threading
import time
from functools import reduce

# ----- INTRO -----
# Python files end with the extension .py
# Print to the console
# Python statements terminate with a newline
print("Hello World")

# Accept user input and store it in a variable
# name = input("What is your name ")
# print("Hi ", name)

# If you want to extend a statement to multiple
# lines you can use parentheses or \
v1 = (
    1 + 2
    + 3
)
v1 = 1 + 2 \
    + 3

# Put multiple statements on 1 line
v1 = 5
v1 = v1 - 1

"""
Multi-line
Comment
"""

# ----- VARIABLES -----
# Variables are names assigned to values
# The 1st character must be _ or a letter
# Then you can use letters, numbers or _
# Variable names are type sensitive
v2 = 1
V2 = 2  # v1 is different from V1

# You can assign multiple variables
v3 = v4 = 20

# ----- DATA TYPES -----
# Data in Python is dynamically typed and that
# data type can change
# All data is an object which I cover later
# The basic types are integers, floats,
# complex numbers, strings, booleans
# Python doesn't have a character type

# How to get the type
print(type(10))

# There is no limit to the size of integers
# This is a way to get a practical max size
print(sys.maxsize)

# Floats are values with decimal values
# This is how to get a max float
print(sys.float_info.max)

# But, they are accurate to 15 digits
f1 = 1.1111111111111111
f2 = 1.1111111111111111
f3 = f1 + f2
print(f3)

# Complex numbers are [real part]+[imaginary part]
cn1 = 5 + 6j

# Booleans are either True or False
b1 = True

# Strings are surrounded by ' or "
str1 = "Escape Sequences \' \t \" \\ and \n"

str2 = '''Triple quoted strings can contain ' and "'''

# You can cast to different types with int, float,
# str, chr
print("Cast ", type(int(5.4)))  # to int
print("Cast 2 ", type(str(5.4)))  # to string
print("Cast 3 ", type(chr(97)))  # to string
print("Cast 4 ", type(ord('a')))  # to int

# ----- OUTPUT -----
# You can define a separator for print
print(12, 21, 1974, sep='/')

# Eliminate newline
print("No Newline", end='')

# String formatting %e for exponent
print("\n%04d %s %.2f %c" % (1, "Derek", 1.234, 'A'))

# ----- MATH -----
print("5 + 2 =", 5 + 2)
print("5 - 2 =", 5 - 2)
print("5 * 2 =", 5 * 2)
print("5 / 2 =", 5 / 2)
print("5 % 2 =", 5 % 2)
print("5 ** 2 =", 5 ** 2)
print("5 // 2 =", 5 // 2)

# Shortcuts
i1 = 2
i1 += 1
print("i1 ", i1)
