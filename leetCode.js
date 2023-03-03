function twoSum(nums, target){
    // answer variable will store answers
    let answer = []
    // first 'for loop' is grabbing a number
    for(i in nums){
        // this 'for loop' is iterating through array and comparing each number to the number grabbed by the parent 'for loop'
        for(j in nums){
            // conditional statement ensuring the same instance of a number isn't used twice
            if(i == j){
                continue
            }
            // conditional statement checking if the two selected numbers add up to the target
            else if(nums[i] + nums[j] == target){
                //.push() is adding indices to the answer array from above
                answer.push(i,j)
                return answer
            }
        }
    }
}

