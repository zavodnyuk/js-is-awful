const arr = [8,7,5,3,2,6,-1,-13,-2];

// Will sort array based on unicode values, not numerical values
const wrongSort = arr.sort();
// Will sort array based on numerical values
const correct = arr.sort((a,b) => a - b);

