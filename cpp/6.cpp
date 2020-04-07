#include <iostream>

int main(){
    long sumOfSquares = 0;
    long squareOfSums = 0;
    for (int i = 1; i <= 100; i++){
        sumOfSquares += i*i;
        squareOfSums += i;
    }
    squareOfSums *= squareOfSums;
    std::cout << squareOfSums - sumOfSquares << std::endl;
    return 0;
}