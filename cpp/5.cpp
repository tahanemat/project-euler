#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
    std::vector<int> list = {11, 12, 13, 14, 15, 16, 17, 18, 19, 20};
    std::vector<int> primes = {2, 3, 5, 7, 11, 13, 17, 19};
    long multiple = 1;
    for (int n : primes)
    {
        while (std::any_of(list.begin(), list.end(), [n](int& i) { return i % n == 0; }))
        {
            std::for_each(list.begin(), list.end(), [n](int& i) { if (i % n == 0){ i /= n; } });
            multiple *= n;
        }
    }
    std::cout << multiple << std::endl;
    return 0;
}
