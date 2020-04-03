#include <iostream>
#include <string>
#include <algorithm>

bool IsPalindrome(int n){
    std::string number = std::to_string(n);
    std::string copy = number;
    std::reverse(copy.begin(), copy.end());
    int res = number.compare(copy);
    if (res == 0) return true;
    return false;
}

int main(){
    int largestPalindrome = 0;
    int product;
    for (int i = 100; i != 1000; ++i){
        for (int j = 100; j != 1000; ++j){
            product = i*j;
            if (IsPalindrome(product) && product > largestPalindrome) {largestPalindrome = product;}
        }
    }
    std::cout << largestPalindrome << std::endl;
    return 0;
}