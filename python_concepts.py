######################################################
# Operators
######################################################


# *
# **
# /
# +
# -
# %
# //

######################################################
# Setting/ redefining variables
######################################################

x = 5
x += 1
x -= 1
x *= 2
x **= 2
x /= 2
x %= 2
x //= 2

# bitwise Operators
# &=
# |=
# ^=
# >>=
# <<=

######################################################
# Booleans/ comparison operators+++
######################################################

x = 1
y = 2

x == 1
# True

x != 1
# False

x > y
# False

y >= x
# True

x == 1 and y == 2
# True

x == 1 or y == 10
# True

not(x == 1)
# False


######################################################
# Conditionals
######################################################

if x == y:
    print('X is equal to Y')
elif x == 100:
    print('X is equal to 100')
else:
    print('Nothing special about X')

# Ternary operator

'true' if True else 'false'

######################################################
# Functions
######################################################

def func(name = 'Laurence'):
    print(f'hello world, this is {name}')

func()

# > 'hello world, this is Laurence'

######################################################
# Classes
######################################################

# Defining classes

class Hello:
    def __init__(self, text, fact):
        self.text = text
        self.fact = fact

    def myfunc(self):
        print(self.text)

hello = Hello('Hello', 'Hello has 5 letters')

print(hello.text)
# > 'Hello'

print(hello.fact)
# > 'Hello has 5 letters'

hello.myfunc()
# > 'Hello'

hello.text = 'Hi there'

hello.myfunc()
# > 'Hi there'
