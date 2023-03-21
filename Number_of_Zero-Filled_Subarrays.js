/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let count=0;
    for (let i=0;i<nums.length;i++)
    {
        if (nums[i]===0)
        {
            let j=i+1;
            while (j<nums.length&&nums[j]===0)
            {
                j++;
            }
            let temp=(j-i);
            count+=Math.floor((temp*(temp+1))/2);
            i=j;
        }
    }
    return count;
};