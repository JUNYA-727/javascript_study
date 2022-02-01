/**
 * const,let等の変数宣言
 */

var val1 = "var変数";
console.log(val1);

//var変数は上書き,再宣言ができる
val1 = "var変数を上書き";
console.log(val1);

//letは上書きができない､再宣言はできる
let val2 = "let変数";
console.log(val2);

val2 = "let変数を上書き";
console.log(val2);

//constは上書き｡再宣言ができない
const val3 = "const変数";
console.log(val3);

//constで定義したオブジェクトはプロバティが可能
const val4 = {
  name: "あああ",
  age: 20
};
val4.name = "いいい";
val4.addres = "Tokyo";

console.log(val4);

//constで定義した配列も変更可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 *　テンプレート文字列
 */
const name = "Junya";
const age = "20";
const message1 = "私の名前は" + name + "です｡年齢は" + age + "です｡";
console.log(message1);
const message2 = `私の名前は${name}です｡年齢は${age}です｡`;
console.log(message2);

/**
 * アロー関数
 */
function func1(str) {
  return str;
}
console.log(func1("func1です｡"));

const func2 = (str) => {
  return str;
};
console.log(func2("func2です｡"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));

/**
 * 分割代入
 */
const myprofile = {
  name1: "junya",
  age1: 20
};
const message3 = `名前は${myprofile.name1}です.年齢は${myprofile.age1}歳です｡`;
console.log(message3);

const { name1, age1 } = myprofile;
const message4 = `名前は${name1}です｡年齢は${age1}歳です｡`;
console.log(message4);

/**
 * デフォルト値､引数
 */
const sayhello1 = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
sayhello1();

/**
 * スプレッド構文
 */
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);
const sumfunc = (num1, num2) => console.log(num1 + num2);
sumfunc(...arr1);

const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1, num2, arr3);

const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
console.log(arr6);
const arr7 = [...arr4, ...arr5];
console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
const namearr = ["田中", "山田", "山本"];
for (let index = 0; index < namearr.length; index++) {
  console.log(namearr[index]);
}
const namearr2 = namearr.map((name) => {
  return name;
});
console.log(namearr2);

//for構文と同じ役割を果たす
namearr.map((name) => console.log(name));

//filterarは配列に対して有る条件のものを取り出す
const numarr = [1, 2, 3, 4, 5];
const newnumarr = numarr.filter((num) => {
  return num % 2 === 0;
});
console.log(newnumarr);

/**
 * 三項演算子
 */
//if　elseと同様な働き
const nn = 2;
console.log(nn < 2 ? "2未満です" : "2以上です");

const n2 = "1300";
const formatnum =
  typeof n2 === "number" ? n2.toLocaleString() : "数値を入力してください";
console.log(formatnum);

const checksum = (n3, n4) => {
  return n3 + n4 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checksum(100, 300));

// \\は右側がfalseなら右側を返す
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);
// &&は左側がtrueなら右側を返す
const numn = null;
const fee2 = numn && "何か設定されました";
console.log(fee2);
console.log(numn);
