#include <iostream>

int main(){
    long number = 600851475143;
    int divisor = 1;
    while (number != 1){
        divisor++;
        while(number % divisor == 0) number /= divisor;
    }
    std::cout << divisor << std::endl;
    return 0;
}