var nums = [3,1,2,4]
var nums = [0]

var sortArrayByParity = function(nums) {
    let r = [];
    l = nums.length;
    console.log(nums.length);
    for (let i = 0; i < l; i++) {
        let t = nums.shift();
        if (t % 2 == 0) {
            r.push(t);
        } else {
            nums.push(t);
        }
    }
    return r.concat(nums);
};

console.log(sortArrayByParity(nums))