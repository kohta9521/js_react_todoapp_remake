// 分割代入

// const myProfile = {
//   name: "Kohta",
//   age: 19,
// };

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// 配列の場合
const myProfile = ["kohta", 19];

const message3 = `私の名前は${myProfile[0]}。年齢は${myProfile[1]}歳です。`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message4);
