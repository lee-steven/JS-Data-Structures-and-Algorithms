const BinarySearchRecursiveKernel = (nums, target, left, right) => {
    const midpoint = (right - left) / 2 + 1

    if(right < left) return false; 

    if(nums[midpoint] === target) {
        return true;
    } else if(target > nums[midpoint]) { 
        return BinarySearchRecursiveKernel(nums, target, midpoint, right);
    } else {
        return BinarySearchRecursiveKernel(nums, target, left, midpoint);
    }

    return false;
}

const BinarySearchRecursive = (nums, target) => {
    return BinarySearchRecursiveKernel(nums, target, 0, nums.length - 1);
}

// "Main Method"
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(BinarySearchRecursive(nums, 9));