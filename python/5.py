# Smallest multiple
   
# Problem 5

# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

numbers = [11,12,13,14,15,16,17,18,19,20]
primes = [2,3,5,7,11,13,17,19]

product = 1

def find_divisible(ns, d):
    for i in ns:
        if i % d == 0:
            return True
    return False

for d in primes:
    while find_divisible(numbers,d):
        product *= d
        array = numbers
        numbers = list(map(lambda x: x if x%d != 0 else x//d, array))

print(product) # Answer: 232792560