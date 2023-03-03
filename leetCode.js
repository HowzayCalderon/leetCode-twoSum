function twoSum(nums, target){
    let answer = []
    for(i in nums){
        for(j in nums){
            if(i == j){
                continue
            }
            else if(nums[i] + nums[j] == target){
                answer.push(i,j)
                return answer
            }
        }
    }
}

let random = [0,2,9,8,3]

console.log(twoSum(random, 5))