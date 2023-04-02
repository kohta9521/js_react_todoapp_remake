// const や letといった変数の宣言方法についてのレクチャー

// var val1 = "val変数";
// console.log(val1);

// //! val変数は上書き可能
// val1 = "val変数の上書きのための文章";
// console.log(val1);

// // valの再宣言んについて
// var val1 = "vae変数を際宣言をしている";
// console.log(val1);

// let val2 = "letを用いた変数宣言";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書きしました";
// console.log(val2);

// const の変数宣言　厳密な宣言
// const val3 = "const変数の中身を家訓する";
// console.log(val3);

const val4 = {
  name: "じゃけえ",
  age: 28,
};

console.log(val4);
val4.name = "kohta";
val4.address = "広島";
console.log(val4);
