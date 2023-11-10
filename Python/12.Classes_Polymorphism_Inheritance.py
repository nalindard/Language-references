# ----- CLASSES OBJECTS -----
# Real world objects have
# attributes : height, weight
# capabilities : run, eat

# Classes are blueprints for creating objects
class Square:
    # init is used to set values for each Square
    def __init__(self, height="0", width="0"):
        self.height = height
        self.width = width

    # This is the getter
    # self is used to refer to an object that
    # we don't possess a name for
    @property
    def height(self):
        print("Retrieving the height")

        # Put a __ before this private field
        return self.__height

    # This is the setter
    @height.setter
    def height(self, value):

        # We protect the height from receiving
        # a bad value
        if value.isdigit():

            # Put a __ before this private field
            self.__height = value
        else:
            print("Please only enter numbers for height")

    # This is the getter
    @property
    def width(self):
        print("Retrieving the width")
        return self.__width

    # This is the setter
    @width.setter
    def width(self, value):
        if value.isdigit():
            self.__width = value
        else:
            print("Please only enter numbers for width")

    def get_area(self):
        return int(self.__width) * int(self.__height)


# Create a Square object
square = Square()
square.height = "10"
square.width = "10"
print("Area", square.get_area())

# ----- INHERITANCE & POLYMORPHISM-----
# When a class inherits from another it gets all
# its fields and methods and can change as needed


class Animal:
    def __init__(self, name="unknown", weight=0):
        self.__name = name
        self.__weight = weight

    @property
    def name(self, name):
        self.__name = name

    def make_noise(self):
        return "Grrrrr"

    # Used to cast to a string type
    def __str__(self):
        return "{} is a {} and says {}".format(self.__name, type(self).__name__, self.make_noise())

    # Magic methods are used for operator
    # overloading
    # Here I'll define how to evaluate greater
    # than between 2 Animal objects
    def __gt__(self, animal2):
        if self.__weight > animal2.__weight:
            return True
        else:
            return False
    # Other Magic Methods
    # __eq__ : Equal
    # __ne__ : Not Equal
    # __lt__ : Less Than
    # __gt__ : Greater Than
    # __le__ : Less Than or Equal
    # __ge__ : Greater Than or Equal
    # __add__ : Addition
    # __sub__ : Subtraction
    # __mul__ : Multiplication
    # __div__ : Division
    # __mod__ : Modulus

# Dog inherits everything from Animal


class Dog(Animal):
    def __init__(self, name="unknown", owner="unknown", weight=0):
        # Have the super class handle initializing
        Animal.__init__(self, name, weight)
        self.__owner = owner

    # Overwrite str
    def __str__(self):
        # How to call super class methods
        return super().__str__() + " and is owned by " + \
            self.__owner


animal = Animal("Spot", 100)
print(animal)

dog = Dog("Bowser", "Bob", 150)
print(dog)

# Test the magic method
print(animal > dog)

# Polymorphism in Python works differently from
# other languages in that functions accept any
# object and expect that object to provide the
# needed method

# This isn't something to dwell on. Just know
# that if you call on a method for an object
# that the method just needs to exist for
# that object to work.
