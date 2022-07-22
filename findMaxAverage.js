/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findMaxAverage = function(nums, k) {

    for (i=0;i<nums.length;i++){
    a1=(nums[0]+nums[k-1])/k;
    a2=(nums[1]+nums[k])/k;
     a3=(nums[2]+nums[k+1])/k;
return maxAverage = Math.max(a1,a2,a3);
        
    }
    
}