#include <iostream>
#include <cmath>

int main(){
    for (int a = 1; a < 1000; a++){
        for (int b = a; b < 1000; b++){
            double c = sqrt(a*a + b*b);
            if (a+b+c > 1000){
                break;
            }
            else if (a+b+c == 1000){
                std::cout << a << " " << b << " " << c << std::endl;
            }
        }
    }
}