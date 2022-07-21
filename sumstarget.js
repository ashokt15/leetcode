var twoSum = function (nums, target) {
    var hashTable = {};
    for (i = 0; i < nums.length; i++) {
        hashTable[nums[i]] = i;
    } console.log(hashTable);
    for (i = 0; i < nums.length; i++) {
        if (hashTable.hasOwnProperty(target - nums[i])) {
            if (i != hashTable[target - nums[i]])
                return [i, hashTable[target - nums[i]]]
        }
    }
}