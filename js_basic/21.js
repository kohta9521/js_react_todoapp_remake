// アロー関数 １番の難所
function func1(string) {
  return string;
}
const func2 = function func2(string) {
  return string;
};
console.log(func1("func1です"));
console.log(func2("func2です"));

// アロー関数での記述
const func3 = (string) => {
  return string;
};

console.log(func3("samplecode"));

// アロー関数の省略記法
const func5 = (str) => str;
console.log(func5("samplecode"));

const func6 = (num1, num2) => {
  return num1 + num2;
};
console.log(func6(10, 20));
