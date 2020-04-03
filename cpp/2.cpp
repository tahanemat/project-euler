#include <iostream>
#include <deque>


int main(){
    std::deque<int> nums = {1,2};
    int sum = 2; // the first even number in the series
    while(nums[1] < 4000000){
        nums.push_back(nums[0] + nums[1]);
        nums.pop_front();
        if (nums[1] % 2 == 0) { sum+= nums[1]; } 
    }
    std::cout << sum << std::endl;
    return 0;
}