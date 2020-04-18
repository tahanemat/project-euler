#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

bool IsNextPrime(unsigned int n, std::vector<unsigned int>& primes){
    if (!std::any_of(primes.begin(), primes.end(), [n](unsigned int d){return n % d == 0;})){
        return true;
    }
    return false;
}

int main(){
    std::vector<unsigned int> primes = {2};
    unsigned int n = 1;
    while (n+2 < 2000000){
        n += 2;
        if (IsNextPrime(n, primes) == true){
            primes.push_back(n);
        }
    }
    unsigned long long sum = 0;
    for (unsigned int a: primes){
        sum += a;
    }
    std::cout << sum << std::endl;
}