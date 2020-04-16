# Summation of primes
   
# Problem 10

# The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

# Find the sum of all the primes below two million.

primes = [2]

def is_prime(n):
    for i in primes:
        if n % i == 0:
            return False
    return True

i = 1

while i+2 < 2000000:
    i += 2
    if is_prime(i):
        primes.append(i)

print(sum(primes))