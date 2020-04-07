# Largest palindrome product
   
# Problem 4

# A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

# Find the largest palindrome made from the product of two 3-digit numbers.

def is_palindrome(number):
    digits = str(number)
    if digits[::-1] == digits:
        return True
    return False

largest = 0

for x in range(999,99,-1):
    for y in range(999,99,-1):
        product = x*y
        if product > largest and is_palindrome(product):
            largest = product

print(largest) # Answer: 906609