// スプレッド構文

// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => {
//   console.log(num1 + num2);
// };
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// 一つにまとめる　展開の反対
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;

console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー・結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

const arr8 = [...arr4];
console.log(arr8);
arr8[0] = 100;
console.log(arr8);
console.log(arr4);
