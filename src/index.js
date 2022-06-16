import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/*closure example*/
function hello() {
  var a = 10;
  function hello1() {
    console.log(a);
  }
  hello1();
}
var hellovalue = hello();
console.log(hellovalue);

/*reverse string */
var str = "hi hello world";
function reverseString(str) {
  var newValue = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newValue += str[i];
  }
  return newValue;
}

var reverseValue = reverseString(str);
console.log("reverse the given string --->", reverseValue);

/*double the elements using simple function*/
const arr = [5, 1, 3, 2, 6];

function double(x) {
  return x * 2;
}
const mapValues = arr.map(double);
console.log(mapValues);

/*double the elements using map function*/

const arrMap = [5, 1, 3, 2, 6];
const valuesdouble = arrMap.map((x) => {
  return x * 2;
});
console.log("using map", valuesdouble);

/*binary values using map */

const binaryArr = [5, 1, 3, 2, 6];
const binaryVal = binaryArr.map((x) => {
  return x.toString(2);
});
console.log("binary values", binaryVal);

/* filter logic example*/
/*find even values using filter */
const arr1 = [5, 1, 3, 2, 6];

const evenValues = arr1.filter((x) => {
  return x % 2 == 0;
});
console.log("even values", evenValues);

/* find odd values using flter*/
const oddArr = [5, 1, 3, 2, 6];
const oddValues = oddArr.filter((x) => {
  return x % 2;
});
console.log("odd values", oddValues);

/*greater than 4 using filter */
const greaterArr = [5, 1, 3, 2, 6];
const greaterValue = greaterArr.filter((x) => {
  return x > 4;
});
console.log("greater Value", greaterValue);

/*lesser than 4 using filter */
const lessArr = [5, 1, 3, 2, 6];
const lesserValue = lessArr.filter((x) => {
  return x < 4;
});
console.log("less value", lesserValue);

/* reduce examples */
/* sum the array values */
const sumArr = [5, 1, 3, 2, 6];
const sumValues = sumArr.reduce((acc, curr) => {
  return (acc += curr);
});
console.log("sum of the array", sumValues);

/* find the largest value */
const maxValue = [5, 1, 3, 2, 6];
const largerNumber = maxValue.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log("large Number", largerNumber);
