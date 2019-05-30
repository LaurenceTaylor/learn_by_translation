######################################################
# Operators
######################################################

# *
# **
# /
# +
# -
# %

######################################################
# Setting/ redefining variables
######################################################

# Local
x = 1
x -= 1
x += 1
x *= 5
x /= 5

# Instance
@x = 1

# Class
@@x = 1

# Global
$x = 1

######################################################
# Booleans
######################################################

x = 1
y = 2

x == 1
# true

x != 1
# false

x > y
# false

y >= x
# true

x == 1 && y == 2
# true

x == 1 || y == 10
# true

######################################################
# Conditionals
######################################################

x = 1
y = 2

if x == 1
  'X'
elsif y == 2
  'Y'
else
  'Z'
end

# Ternary operator

x == 1 ? 'X' : 'Z'

######################################################
# Methods
######################################################

# Defining
def hello_method
  'Hello'
end

# Calling methods
hello_method
# > 'Hello'

######################################################
# Classes
######################################################

# Defining classes
class Hello

  # Setting up instance variables
  def initialize(name)
    @name = name
  end

  # Creating instance methods
  def hello
    "Hello #{@name}"
  end

  # Creating class methods
  def self.hello
    'Hello'
  end
end

# Creating a new instance
instance = Hello.new('John')

# Calling instance methods
instance.hello

# Calling class methods
Hello.hello

######################################################
# Loops
######################################################

# While
i = 0

while i < 10
  p i
  i += 1
end

# For
for i in 1..10
  p i
end

# Each/ map

(1..10).each do |i|
  p i
end

(1..10).map { |i| p i }

######################################################
# Using arrays
######################################################

# New arrays
arr = []
arr2 = Array.new

# Adding to arrays
arr.push('Hello')
arr2 << 'Hello'

arr[0] == 'Hello'
# > true

######################################################
# Using hashes
######################################################

# New hashes
hash = { name: 'John', age: 27 }
hash = { :name => 'John', :age => 27 }
hash2 = Hash.new

# Adding to hashes
hash[:surname] = 'Smith'
hash[:city] = 'London'

######################################################
# Printing
######################################################

puts 'Hello'
p 'Hi'
print 'What up'

######################################################
# String interpolation
######################################################

y = 5

p "I have #{y} cats"
