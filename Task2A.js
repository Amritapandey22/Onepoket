
let myNums = [1, 2, 3, 4, 5];

let sumBySimpleAddition = 0;
let sumByReducerMethod = 0;

for (let i = 0; i < myNums.length; i++ ) {
  sumBySimpleAddition += myNums[i];
}

const reducer = (accumulator, curr) => accumulator + curr;
sumByReducerMethod = myNums.reduce(reducer);
console.log(sumBySimpleAddition);
