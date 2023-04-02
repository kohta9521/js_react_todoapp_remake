// map filterを使用した配列の処理
const nameArr = ["田中", "山田", "鈴木"];

// for (let index = 0; index < nameArr.lenfth; index++) {
//   console.log(nameArr[index]);
// }

// map
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(nameArr2);

nameArr.map((name, index) => {
  console.log(name);
  console.log(index);
});

// filter の使用方法
const numArr = [1, 2, 3, 4, 5];

const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});

console.log(newNumArr);
