#include <iostream>
#include <vector>
#include <algorithm>

int main(){
    std::vector<int> primes = {2};
    long n = 1;
    while(primes.size() <= 10001){
        n += 2;
        if (!std::any_of(primes.begin(), primes.end(), [n](int d){ return n % d == 0;})){
            primes.push_back(n);
        }
    }
    std::cout << primes[10000] << std::endl;
    return 0;
}