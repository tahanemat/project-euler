# 10001st prime
   
# Problem 7

# By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

# What is the 10001st prime number?

primes = [2,3]

i = 3

def is_prime(n):
    for x in primes:
        if n % x == 0:
            return False
    return True

while len(primes) < 10001:
    i += 2
    if is_prime(i):
        primes.append(i)

print(primes[-1]) # Answer 104743