const BinarySearchRecursiveKernel = (nums, target, left, right) => {
    const midpoint = (right - left) / 2

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

const BinarySearchIterative = (nums, target) => {
    let left = 0, right = nums.length - 1;

    while(left < right) {
        const midpoint = (right - left) / 2; 
       
        if(nums[midpoint] === target) return true;
        else if(target > nums[midpoint]) {
            left = midpoint;
        } else {
            right = midpoint;
        }
    }
    return false;
}

// "Main Method"
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(BinarySearchRecursive(nums, 1));
console.log(BinarySearchIterative(nums, 10))